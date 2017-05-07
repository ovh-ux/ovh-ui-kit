# oui-modal

<component-status cx-design="partial" ux="rc"></component-status>

oui-modal is a package which provide styles for the `oui-modal` component.

## Installation

```less
  @import 'oui-modal/modal';
```

## Usage

### Default

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body">
    <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
    <div class="oui-modal__body-text">
      <h2 class="oui-modal__title">Warning</h2>
      <p class="oui-modal__text">The current order is not finished.</p>
      <p class="oui-modal__text">
        <strong>Are you sure you want to continue and return to the home page?</strong>
      </p>
    </div>
  </div>
  <div class="oui-modal__footer">
    <button class="oui-button oui-button_secondary" type="button">
      Cancel
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Exit
    </button>
  </div>
</div>
```

> **Important:** It can also be combined with *Bootstrap* modal classes

## Mixins

```less
@import 'oui-modal/_mixins';
```

### .modal-base

Define the base styles for a modal.

```less
#oui > .modal-base();
```

```less
.modal-base(
  @button-selector: Class, // Class name that will be prefixed on each subclasses
  @body-padding: Number,
  @close-button-width: Number,
  @close-button-height: Number,
  @close-button-color: Color,
  @close-button-font-size: Number,
  @close-button-padding: Number
)
```

### .modal-shadow

Will stylize your modal with a shadow around it.

```less
#oui > .modal-shadow();
```

### .modal-warning

Will stylize your modal as a warning one.

```less
#oui > .modal-warning();
```

## Classes

### Block

The block class is `oui-modal` (top-level element).

### Element

The modal component can take 6 to 7 inner elements:
* An inline element class `oui-modal__header` which contains header elements
* An inline element class `oui-modal__body` which contains body elements
* An inline element class `oui-modal__body-text` which contains body texts
* An inline element class `oui-modal__title` which contains the modal title
* An inline element class `oui-modal__text` which contains the modal text
* An inline element class `oui-modal__footer` which contains footer elements
* An optional button class `oui-modal__close-button` which provides the possibility to close the modal

### Modifiers

The provided modifiers are:

| Class                                      | Description                      |
| ------------------------------------------ | -------------------------------- |
| `oui-modal_shadow`                         | Adds a shadow to the modal       |
