import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import Autocomplete from '@ovh-ux/ui-kit.autocomplete';

import { compileTemplate } from '../../../../src/utils';

import { strings, objects } from '../../../_data/autocomplete.data.json';

// Create mock module for the stories
const moduleName = 'autocomplete.stories';
angular.module(moduleName, [Autocomplete]);

export default {
  title: 'Design System/Directives/Autocomplete',

  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const ArrayOfStrings = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <input
      type="text"
      class="oui-input oui-input_inline"
      placeholder="Search country name"
      ng-model="$ctrl.model"
      oui-autocomplete="$ctrl.suggestions"
      oui-autocomplete-on-select="$ctrl.onAutocomplete(value)">`,
    {
      $ctrl: {
        suggestions: strings,
        onAutocomplete: action('onAutocomplete'),
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
    <input
      type="text"
      class="oui-input oui-input_inline"
      placeholder="Search country name"
      ng-model="$ctrl.model"
      oui-autocomplete="$ctrl.suggestions"
      oui-autocomplete-property="country.name"
      oui-autocomplete-on-select="$ctrl.onAutocomplete(value)">`,
    {
      $ctrl: {
        suggestions: objects,
        onAutocomplete: action('onAutocomplete'),
      },
    },
  ),
);

ArrayOfObjects.story = {
  name: 'Array of objects',
};
