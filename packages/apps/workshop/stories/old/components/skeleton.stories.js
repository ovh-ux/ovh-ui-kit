import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.skeleton/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-skeleton-stories';
angular.module(moduleName, ['oui.skeleton']);

storiesOf('Old/Components/Skeleton', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-skeleton></oui-skeleton>
    `)),
  )
  .add(
    'Sizes',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-skeleton size="xs"></oui-skeleton>
    <oui-skeleton size="s"></oui-skeleton>
    <oui-skeleton size="m"></oui-skeleton>
    <oui-skeleton size="l"></oui-skeleton>
    <oui-skeleton size="xl"></oui-skeleton>
    <oui-skeleton size="auto"></oui-skeleton>
    `)),
  )
  .add(
    'Randomized width',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    `)),
  );
