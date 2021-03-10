import { addBooleanParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

const escKeyCode = 27;

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  onKeyDown(event) {
    if (event.which === escKeyCode) {
      this.onSearchReset();
    }
  }

  onSearchChange() {
    const modelValue = this.model;

    this.onChange({ modelValue });
  }

  onSearchSubmit(modelValue) {
    if (this.resetOnSubmit) {
      this.model = undefined;
    }

    this.onSubmit({ modelValue });
  }

  onSearchReset() {
    // Since type="reset" doesn't reset the model
    this.model = undefined;

    this.onReset();
  }

  $onInit() {
    // Support presence of attribute 'disabled'
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'resetOnSubmit');
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => this.$element
      .addClass('oui-search')
      .removeAttr('aria-label')
      .removeAttr('id')
      .removeAttr('name'));
  }
}
