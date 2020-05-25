import { forModule } from 'storybook-addon-angularjs';

import Header from '@ovh-ux/ui-kit.header';

import readme from '@ovh-ux/ui-kit.header/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'header-webcomponent.stories';
angular.module(moduleName, [Header]);

export default {
  title: 'Legacy/Components/Header/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-header
      heading="My title"
      description="My subtitle">
    </oui-header>`,
  ),
);

export const WithTabs = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-header
      heading="My title"
      description="My subtitle">
      <oui-header-tabs>
        <oui-header-tabs-item href="#" active>Home</oui-header-tabs-item>
        <oui-header-tabs-item href="#">Header</oui-header-tabs-item>
        <oui-header-tabs-item href="#">Header Tabs</oui-header-tabs-item>
        <oui-header-tabs-dropdown text="Form">
            <oui-header-tabs-item href="#" disabled>Field</oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item href="#">Checkbox</oui-header-tabs-item>
            <oui-header-tabs-item href="#">Radio</oui-header-tabs-item>
        </oui-header-tabs-dropdown>
        <oui-header-tabs-item href="#" disabled>Pagination</oui-header-tabs-item>
        <oui-header-tabs-item href="#">Datagrid</oui-header-tabs-item>
      </oui-header-tabs>
    </oui-header>`,
  ),
);

WithTabs.story = {
  name: 'With tabs',
};
