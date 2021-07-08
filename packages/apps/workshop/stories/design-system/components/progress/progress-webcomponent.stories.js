import { number } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Progress from '@ovh-ux/ui-kit.progress';

import readme from '@ovh-ux/ui-kit.progress/README.md';
import { compileTemplate } from '../../../../src/utils';

const moduleName = 'progress-webcomponent.stories';
angular.module(moduleName, [Progress]);

export default {
  title: 'Design System/Components/Progress/WebComponent',

  parameters: {
    docs: { iframeHeight: 220 },
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <!-- Info -->
    <oui-progress>
      <oui-progress-bar type="info" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>

    <!-- Success -->
    <oui-progress>
      <oui-progress-bar type="success" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>

    <!-- Warning -->
    <oui-progress>
      <oui-progress-bar type="warning" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>

    <!-- Error -->
    <oui-progress>
      <oui-progress-bar type="error" value="$ctrl.percentage"></oui-progress-bar>
    </oui-progress>`,
    {
      $ctrl: {
        percentage: number('Value', 50),
      },
    },
  ),
);

export const Stacked = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-progress>
      <oui-progress-bar type="success" value="30"></oui-progress-bar>
      <oui-progress-bar type="error" value="15"></oui-progress-bar>
    </oui-progress>`,
  ),
);

export const Sizes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-progress size="m">
      <oui-progress-bar type="info" value="50"></oui-progress-bar>
    </oui-progress>
    <oui-progress size="l">
      <oui-progress-bar type="info" value="50"></oui-progress-bar>
    </oui-progress>`,
  ),
);

export const WithThresholds = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-progress max-value="200">
      <oui-progress-bar type="success"
        value="139">
        Installing components: 139/200
      </oui-progress-bar>
      <oui-progress-threshold value="25"></oui-progress-threshold>
      <oui-progress-threshold value="50"></oui-progress-threshold>
      <oui-progress-threshold value="75"></oui-progress-threshold>
      <oui-progress-threshold value="100"></oui-progress-threshold>
      <oui-progress-threshold value="125"></oui-progress-threshold>
      <oui-progress-threshold value="150"></oui-progress-threshold>
      <oui-progress-threshold value="175"></oui-progress-threshold>
    </oui-progress>

    <oui-progress>
      <oui-progress-bar type="error" value="60"></oui-progress-bar>
      <oui-progress-threshold value="20"></oui-progress-threshold>
      <oui-progress-threshold value="50"></oui-progress-threshold>
      <oui-progress-threshold value="80"></oui-progress-threshold>
    </oui-progress>`,
  ),
);

WithThresholds.storyName = 'With thresholds';

export const WithCustomLabel = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-progress>
      <oui-progress-bar type="info"
        value="$ctrl.percentage">
        Progress: {{$ctrl.percentage}}%
      </oui-progress-bar>
    </oui-progress>`,
    {
      $ctrl: {
        percentage: number('Value', 50),
      },
    },
  ),
);

WithCustomLabel.storyName = 'With custom label';

export const WithoutLabels = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-progress no-labels>
      <oui-progress-bar value="7.5"></oui-progress-bar>
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar>
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar>
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar>
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar>
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar> 
      <oui-progress-bar value="7.5"></oui-progress-bar> 
    </oui-progress>`,
  ),
);

WithoutLabels.storyName = 'Without labels';

export const Compact = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <!-- Info -->
    <oui-progress compact>
      <oui-progress-bar type="info"
        value="$ctrl.percentage">
        {{$ctrl.percentage}}%
      </oui-progress-bar>
    </oui-progress>

    <!-- Success -->
    <oui-progress compact>
      <oui-progress-bar type="success"
        value="$ctrl.percentage">
      </oui-progress-bar>
    </oui-progress>

    <!-- Warning -->
    <oui-progress compact>
      <oui-progress-bar type="warning"
        value="$ctrl.percentage">
      </oui-progress-bar>
    </oui-progress>

    <!-- Error -->
    <oui-progress compact>
      <oui-progress-bar type="error"
        value="$ctrl.percentage">
        {{$ctrl.percentage}}%
      </oui-progress-bar>
    </oui-progress>`,
    {
      $ctrl: {
        percentage: number('Value', 50),
      },
    },
  ),
);
