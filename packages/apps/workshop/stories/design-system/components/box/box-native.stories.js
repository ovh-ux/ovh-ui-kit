import readme from '@ovh-ux/ui-kit.box/README.md';

export default {
  title: 'Design System/Components/Box/Native',

  parameters: {
    docs: { iframeHeight: 250 },
    notes: readme,
  },
};

export const Default = () => `
<div class="oui-box">
  <h4 class="oui-box__heading">An awesome title for an awesome box</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed tempus sapien erat, et molestie magna tristique non.
    Sed tincidunt eu augue tempor consectetur. Nullam iaculis,
    nibh mollis vulputate elementum, neque est iaculis nisi,
    et gravida turpis erat non dui. Nunc eget tortor et enim
    interdum euismod sed eget purus. Integer in metus ultrices,
    ultricies lacus in, fermentum nisi. Cras sed neque id dui
    fermentum faucibus. Mauris mollis arcu justo, eget convallis
    massa volutpat ac.
  </p>
</div>`;

export const Light = () => `
<div class="oui-box oui-box_light">
  <h4 class="oui-box__heading">An awesome title for an awesome box</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed tempus sapien erat, et molestie magna tristique non.
    Sed tincidunt eu augue tempor consectetur. Nullam iaculis,
    nibh mollis vulputate elementum, neque est iaculis nisi,
    et gravida turpis erat non dui. Nunc eget tortor et enim
    interdum euismod sed eget purus. Integer in metus ultrices,
    ultricies lacus in, fermentum nisi. Cras sed neque id dui
    fermentum faucibus. Mauris mollis arcu justo, eget convallis
    massa volutpat ac.
  </p>
</div>`;
