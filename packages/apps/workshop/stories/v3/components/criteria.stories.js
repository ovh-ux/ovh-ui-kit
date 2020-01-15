import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.criteria/README.md';
import { compileTemplate } from '../../../src/utils';

import { properties } from '../../_data/criteria.data.json';

// Create mock module for the stories
const moduleName = 'oui-criteria-stories';
angular.module(moduleName, [
  'oui.criteria',

  // For examples
  'oui.action-menu',
]);

export default {
  title: 'Version 3/Internal/Criteria',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
<oui-criteria
  disabled="$ctrl.disabled"
  model="$ctrl.model"
  on-change="$ctrl.onChange(modelValue)"
  properties="$ctrl.properties">
</oui-criteria>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        properties,
      },
    },
  ),
);

export const WithASearchField = forModule(moduleName).createElement(
  () => compileTemplate(
    `
<oui-criteria
  disabled="$ctrl.disabled"
  model="$ctrl.model"
  on-change="$ctrl.onChange(modelValue)"
  properties="$ctrl.properties"
  searchable>
</oui-criteria>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        properties,
      },
    },
  ),
);

WithASearchField.story = {
  name: 'With a search field',
};

export const WithActionMenu = forModule(moduleName).createElement(
  () => compileTemplate(
    `
<oui-criteria
  disabled="$ctrl.disabled"
  model="$ctrl.model"
  on-change="$ctrl.onChange(modelValue)"
  properties="$ctrl.properties"
  searchable>
  <oui-action-menu text="Actions">
    <oui-action-menu-item on-click="$ctrl.onActionClick('Action 1')">
      Action 1 (button)
    </oui-action-menu-item>
    <oui-action-menu-item on-click="$ctrl.onActionClick('Action 2')" href="#">
      Action 2 (link)
    </oui-action-menu-item>
    <oui-action-menu-item disabled>
      Action 3 (disabled)
    </oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item on-click="$ctrl.onActionClick('External link')" href="#" external>
      External link
    </oui-action-menu-item>
  </oui-action-menu>
</oui-criteria>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        properties,
      },
    },
  ),
);

WithActionMenu.story = {
  name: 'With action menu',
};
