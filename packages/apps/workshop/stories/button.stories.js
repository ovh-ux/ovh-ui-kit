import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

// Create mock module for the stories
const moduleName = 'oui-button-stories';
angular.module(moduleName, ['oui.button']);

storiesOf('Atoms/Button', module)
  .add(
    'Simple button',
    forModule(moduleName).createElement(compile => compile`
      <oui-button aria-label="Manage your servers">Manage your servers</oui-button>
    `),
  )
  .add(
    'Action buttons',
    forModule(moduleName).createElement((compile) => {
      const disabled = boolean('Disabled', false);
      return compile`
        <oui-button aria-label="Cancel moving the server"
                    variant="secondary"
                    disabled="${disabled}">Cancel</oui-button>
        <oui-button aria-label="Confirm moving the server"
                    variant="primary"
                    disabled="${disabled}">Confirm</oui-button>
        <oui-button aria-label="Open help"
                    variant="link"
                    disabled="${disabled}">Need help?</oui-button>
      `;
    }),
  )
  .add(
    'Arrow buttons',
    forModule(moduleName).createElement((compile) => {
      const disabled = boolean('Disabled', false);
      return compile`
        <oui-button aria-label="Previous step"
                    variant-nav="previous"
                    disabled="${disabled}">Previous</oui-button>
        <oui-button aria-label="Next step"
                    variant-nav="next"
                    variant="primary"
                    disabled="${disabled}">Next</oui-button>
      `;
    }),
  );
