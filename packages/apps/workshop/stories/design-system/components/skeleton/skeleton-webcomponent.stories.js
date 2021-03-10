import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit/dist/js/oui-skeleton';

import readme from '@ovh-ux/ui-kit.skeleton/README.md';
import { compileTemplate } from '../../../../src/utils';

const moduleName = 'skeleton-webcomponent.stories';
angular.module(moduleName, ['oui.skeleton']);

export default {
  title: 'Design System/Components/Skeleton/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
  <oui-skeleton></oui-skeleton>`,
  ),
);

export const Sizes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-skeleton size="xs"></oui-skeleton>
    <oui-skeleton size="s"></oui-skeleton>
    <oui-skeleton size="m"></oui-skeleton>
    <oui-skeleton size="l"></oui-skeleton>
    <oui-skeleton size="xl"></oui-skeleton>
    <oui-skeleton size="auto"></oui-skeleton>`,
  ),
);

export const RandomizedWidth = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>`,
  ),
);

RandomizedWidth.storyName = 'Randomized width';
