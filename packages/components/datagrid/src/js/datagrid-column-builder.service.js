import { getAttribute, hasAttribute } from '@ovh-ux/ui-kit.core/src/js/component-utils';

const copyValueProperties = ['hidden', 'title', 'type', 'type-options'];
const searchableTypes = [
  'number',
  'string',
];
const filterableTypes = [
  'boolean',
  'date',
  'number',
  'options',
  'string',
];

export default class DatagridColumnBuilder {
  constructor($parse, $compile) {
    'ngInject';

    this.$parse = $parse;
    this.$compile = $compile;
  }

  build(columnElements, $scope) {
    let hasFooter = false;
    const columns = [];
    const currentSorting = {
      columnName: undefined,
      dir: 0,
    };

    angular.forEach(columnElements, (columnElement) => {
      const column = {};

      if (hasAttribute(columnElement, 'name')) {
        column.name = getAttribute(columnElement, 'name');
      }

      if (hasAttribute(columnElement, 'property')) {
        const propertyValue = getAttribute(columnElement, 'property');

        column.name = column.name || propertyValue;
        column.getValue = this.$parse(propertyValue);

        // A column can be sorted only if it has a "property" attribute.
        if (hasAttribute(columnElement, 'sortable')) {
          const sortableValue = getAttribute(columnElement, 'sortable');
          column.sortable = !!sortableValue;

          const sorting = DatagridColumnBuilder.defineDefaultSorting(column, sortableValue);
          Object.assign(currentSorting, sorting);
        }
      }

      if (!hasAttribute(columnElement, 'type')) {
        column.type = 'string';
      }

      copyValueProperties.forEach((propertyName) => {
        if (hasAttribute(columnElement, propertyName)) {
          column[propertyName] = getAttribute(columnElement, propertyName);
        }
      });

      column.filterable = DatagridColumnBuilder.isFilterable(column)
                && hasAttribute(columnElement, 'filterable');
      column.searchable = DatagridColumnBuilder.isSearchable(column)
                && hasAttribute(columnElement, 'searchable');

      if (column['type-options']) {
        column.typeOptions = this.$parse(column['type-options'])($scope);
      }

      if (hasAttribute(columnElement, 'prevent-customization')) {
        column.preventCustomization = true;
      }

      if (hasAttribute(columnElement, 'hidden')) {
        column.hidden = true;
      }

      if (hasAttribute(columnElement, 'title')) {
        const titleValue = getAttribute(columnElement, 'title');

        column.title = this.buildTitle(titleValue, $scope);
        column.rawTitle = titleValue;
      }

      if (hasAttribute(columnElement, 'footer')) {
        hasFooter = true;
        column.footer = getAttribute(columnElement, 'footer');
      }

      if (!column.sortProperty) {
        column.sortProperty = column.name;
      }

      const htmlTemplate = columnElement.innerHTML.trim();
      if (!column.template && htmlTemplate.length) {
        column.template = htmlTemplate;
      }

      if (column.template) {
        column.compiledTemplate = this.getColumnTemplate(column);
      }

      columns.push(column);
    });

    return {
      columns,
      currentSorting,
      hasFooter,
    };
  }

  buildFromJs(columnsDescription) {
    let hasFooter = false;
    const columns = [];
    const currentSorting = {
      columnName: undefined,
      dir: 0,
    };

    angular.forEach(columnsDescription, (columnDescription) => {
      const column = {};

      column.name = columnDescription.name;

      const propertyValue = columnDescription.property;
      if (propertyValue) {
        column.name = column.name || propertyValue;
        column.getValue = this.$parse(propertyValue);

        // A column can be sorted only if it has a "property" attribute.
        const sortableValue = columnDescription.sortable;
        if (columnDescription.sortable) {
          column.sortable = !!sortableValue;

          const sorting = DatagridColumnBuilder.defineDefaultSorting(column, sortableValue);
          Object.assign(currentSorting, sorting);
        }
      }

      copyValueProperties.forEach((propertyName) => {
        column[propertyName] = columnDescription[propertyName];
      });

      column.filterable = DatagridColumnBuilder.isFilterable(column)
                && columnDescription.filterable;
      column.searchable = DatagridColumnBuilder.isSearchable(column)
                && columnDescription.searchable;


      if (columnDescription.typeOptions) {
        column.typeOptions = columnDescription.typeOptions;
      }

      column.preventCustomization = columnDescription.preventCustomization;

      column.title = columnDescription.title;

      if (columnDescription.footer) {
        hasFooter = true;
        column.footer = columnDescription.footer;
      }

      if (!column.sortProperty) {
        column.sortProperty = column.name;
      }

      const htmlTemplate = columnDescription.template ? columnDescription.template.trim() : '';
      column.template = htmlTemplate;

      if (column.template && column.template !== '') {
        column.compiledTemplate = this.getColumnTemplate(column);
      }

      columns.push(column);
    });

    return {
      columns,
      currentSorting,
      hasFooter,
    };
  }

  buildTitle(titleValue, $scope) {
    return this.$parse(titleValue)($scope);
  }

  buildActionColumn(actionColumnElement) {
    const column = {
      template: actionColumnElement.outerHTML,
    };
    column.compiledTemplate = this.getColumnTemplate(column);
    column.alwaysVisible = true;
    return column;
  }

  static defineDefaultSorting(_column_, sortableValue) {
    const column = _column_;
    column.sortable = sortableValue !== undefined;

    if (sortableValue && sortableValue.length) {
      column.defaultSortDir = sortableValue === 'asc' ? 1 : -1;
      return {
        columnName: column.name,
        dir: column.defaultSortDir,
      };
    }

    return {};
  }

  static isSearchable(column) {
    return searchableTypes.indexOf(column.type) > -1;
  }

  static isFilterable(column) {
    return filterableTypes.indexOf(column.type) > -1;
  }

  getColumnTemplate(_column_) {
    const column = _column_;
    if (!column.compiledTemplate) {
      column.compiledTemplate = this.$compile(`<div>${column.template}</div>`);
    }
    return column.compiledTemplate;
  }
}
