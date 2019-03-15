import '@ovh/ui-kit.clipboard';
import '@ovh/ui-kit.clipboard/src/index.less';

import {
  Storybook,
  Knobs,
  forModule,
  centered,
} from '@ovh/ui-kit.core/src/js/storybook-utils';

Storybook.storiesOf('Components/Clipboard', module)
  .addDecorator(centered)
  .addDecorator(Knobs.withKnobs)
  .add(
    'default',
    forModule('oui.clipboard').createElement((compile) => {
      const model = Knobs.text('Model', 'Copy this text');

      return compile`
        <oui-clipboard model="${model}"></oui-clipboard>
      `;
    }),
  );
