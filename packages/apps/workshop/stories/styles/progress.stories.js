import { storiesOf } from '@storybook/html';

storiesOf('Styles/Progress', module)
  .add(
    'Native',
    () => `
    <progress class="oui-progress oui-progress_info" value="5" max="100"></progress>
    <progress class="oui-progress oui-progress_success" value="10" max="100"></progress>
    <progress class="oui-progress oui-progress_warning" value="60" max="100"></progress>
    <progress class="oui-progress oui-progress_error" value="100" max="100"></progress>
    `,
  );
