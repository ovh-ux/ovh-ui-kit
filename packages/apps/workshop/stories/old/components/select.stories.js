import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.select/README.md';
import { compileTemplate } from '../../../src/utils';

import countries from '../../_data/countries.data.json';

const moduleName = 'oui-select-stories';
angular.module(moduleName, ['oui.select']);

export default {
  title: 'Old/Components/Select',

  parameters: {
    notes: readme,
  },
};

export const ArrayOfStrings = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="['a', 'b', 'c']"
      model="$ctrl.model"
      name="letter"
      placeholder="{{ $ctrl.placeholder }}"
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()">
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        placeholder: 'Select a letter...',
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

ArrayOfStrings.story = {
  name: 'Array of strings',
};

export const ArrayOfObjects = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="{{ $ctrl.placeholder }}"
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()">
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        items: countries,
        placeholder: 'Select a country...',
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

ArrayOfObjects.story = {
  name: 'Array of objects',
};

export const Searchable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="{{ $ctrl.placeholder }}"
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()"
      searchable>
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        items: countries,
        placeholder: 'Select a country...',
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

export const Multiple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="{{ $ctrl.placeholder }}"
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()"
      multiple>
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        items: countries,
        placeholder: 'Select a country...',
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

export const DisableItems = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disable-items="$ctrl.disableItems($item)"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="{{ $ctrl.placeholder }}">
    </oui-select>`,
    {
      $ctrl: new (class {
        constructor() {
          this.items = countries;
          this.placeholder = 'Select a country...';
        }

        disableItems($item) {
          const modulo = 2;
          return this.items.indexOf($item) % modulo === 1;
        }
      })(),
    },
  ),
);

DisableItems.story = {
  name: 'Disable items',

  parameters: {
    notes:
      'For each `$item` in `items` array, `disable-item` will be called with current `$item` as an argument.<br />If it returns true, `$item` will be disabled.',
  },
};

export const Grouping = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      group-by="$ctrl.groupByFirstLetter"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="{{ $ctrl.placeholder }}">
    </oui-select>`,
    {
      $ctrl: {
        items: countries,
        groupByFirstLetter: (item) => item.country.name.substr(0, 1).toUpperCase(),
        placeholder: 'Select a country...',
      },
    },
  ),
);

export const CustomOptionTemplate = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      group-by="$ctrl.groupByFirstLetter"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="{{ $ctrl.placeholder }}">
      <span ng-bind="$item.country.name"></span><br />
      <small>
        Code: <span ng-bind="$item.country.code"></span>
      </small>
    </oui-select>`,
    {
      $ctrl: {
        items: countries,
        groupByFirstLetter: (item) => item.country.name.substr(0, 1).toUpperCase(),
        placeholder: 'Select a country...',
      },
    },
  ),
);

CustomOptionTemplate.story = {
  name: 'Custom option template',

  parameters: {
    notes:
      'Template inside `oui-select` component will be used as the content of each option.<br />You can use `$item` variable to get option value for your template.',
  },
};
