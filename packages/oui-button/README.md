# oui-button

<component-status cx-design="partial" ux="rc"></component-status>

oui-button is a package which provides styles for the button component.

## Installation

```less
@import 'oui-button/button';
```

## Usage

```html:preview
<div>
  <button class="oui-button oui-button_primary">
    Primary Button
  </button>
  <button class="oui-button oui-button_secondary">
    Secondary Button
  </button>
  <button class="oui-button oui-button_dropdown">
    Dropdown Button
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_primary oui-button_icon-right">
    Button Icon right
    <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_secondary oui-button_icon-left">
    <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
    Button Icon left
  </button>
  <button class="oui-button oui-button_link">
    Button link
  </button>
  <button class="oui-button oui-button_link oui-button_icon-left">
    <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>Button link Icon left
  </button>
  <button class="oui-button oui-button_link oui-button_icon-right">
    Button link Icon right<i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_link oui-button_icon-left">
      <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>Button link Full width Icon left
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_link oui-button_icon-right">
      Button link Full width Icon right<i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_primary">
      Primary Button Full width
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_secondary">
      Secondary Button Full width
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_primary">
      <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>Primary Full width Icon left
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_primary">
      Secondary Full width Icon right<i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_secondary">
      <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>Secondary Full width Icon left
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_secondary">
      Secondary Full width Icon right<i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
</div>
<div>
  <button class="oui-button oui-button_primary" disabled>
    Primary Button
  </button>
  <button class="oui-button oui-button_secondary" disabled>
    Secondary Button
  </button>
  <button class="oui-button oui-button_dropdown" disabled>
    Dropdown Button
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_primary oui-button_icon-right" disabled>
    Button Icon right
    <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_secondary oui-button_icon-left" disabled>
    <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
    Button Icon left
  </button>
  <button class="oui-button oui-button_link" disabled>
    Button link
  </button>
  <button class="oui-button oui-button_link oui-button_icon-left" disabled>
    <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>Button link Icon left
  </button>
  <button class="oui-button oui-button_link oui-button_icon-right" disabled>
    Button link Icon right<i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_link oui-button_full-width oui-button_icon-left" disabled>
      <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>Button link Full width Icon left
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_link oui-button_full-width oui-button_icon-right" disabled>
      Button link Full width Icon right<i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_primary" disabled>
      Primary Button Full width
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_secondary" disabled>
      Secondary Button Full width
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_primary" disabled>
      <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>Primary Full width Icon left
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_primary" disabled>
      Secondary Full width Icon right<i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_secondary" disabled>
      <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>Secondary Full width Icon left
    </button>
  </div>
  <div style="display: inline-block; width: 300px">
    <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_secondary" disabled>
      Secondary Full width Icon right<i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

## Mixins

```less
@import 'oui-button/_mixins';
```

### .button-base

Define the base styles for a button.

```less
#oui > .button-base();
```

```less
#oui > .button-base(
  @oui-font-color: Color,
  @oui-font-size: Number,
  @oui-font-weight: Number
);
```

### .button-filled

Will stylize your button as a filled one.

```less
#oui > .button-filled();
```

```less
#oui > .button-filled(
  @background-color: Color,
  @background-color_hover: Color,
  @background-color_disabled: Color,
  @oui-font-color_disabled: Color,
  @padding: Number
);
```

### .button-hollow

Will stylize your button as a hollow one.

```less
#oui > .button-hollow();
```

```less
#oui > .button-hollow(
  @background-color: Color,
  @border-color: Color,
  @border-color_hover: Color,
  @border-color_disabled: Color,
  @background-color_disabled: Color,
  @font-color_disabled: Color,
  @padding: Number
);
```

### .button-dropdown

Will stylize your button as a dropdown one.

```less
#oui > .button-dropdown();
```

```less
#oui > .button-dropdown(
  @icon-color: Color,
  @icon-color_active: Color,
  @background-color_active: Color,
  @border-color_active: Color,
  @icon-color_disabled: Color,
  @padding: Number
);
```

### .button-icon-base

Define the base styles for a button with an icon.

```less
#oui > .button-icon();
```

```less
#oui > .button-icon(
  @icon-size: Number,
  @icon-color: Color,
  @icon-color_disabled: Color,
  @icon-padding-right: Number,
  @icon-padding-left: Number
);
```

### .button-icon-right

Will stylize your button with an icon on the right.

```less
#oui > .button-icon-right();
```

```less
#oui > .button-icon-right(
  @icon-margin-left: Number,
  @icon-color_disabled: Color
);
```

### .button-icon-left

Will stylize your button with an icon on the left.

```less
#oui > .button-icon-left();
```

```less
#oui > .button-icon-left(
  @icon-margin-right: Number,
  @icon-color_disabled: Color
);
```

### .button-link

Will stylize your button as a link.

```less
#oui > .button-link();
```

```less
#oui > .button-link(
  @icon-selector: Class,
  @icon-color: Color,
  @font-color: Color,
  @font-weight: Number
);
```

### .button-link

Will stylize your button as a link full width.

```less
#oui > .button-link();
#oui > .button-full-width;
```

```less
#oui > .button-link-full-width(
  @icon-selector: Class,
  @icon-color: Color,
  @font-weight: Number
);
```

## Classes

### Block

The block class is `oui-button` (top-level element).

### Modifier

The provided modifiers are:

| Class                   | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `oui-button_primary`    | Make the button looks like a primary button                   |
| `oui-button_secondary`  | Make the button looks like a secondary button                 |
| `oui-button_dropdown`   | Make the button looks like a dropdown button                  |
| `oui-button_icon-right` | Make the button looks like a button with an icon on the right |
| `oui-button_icon-left`  | Make the button looks like a button with an icon on the left  |
| `oui-button_link`       | Make the button looks like a link                             |
