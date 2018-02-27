# oui-input

<component-status cx-design="complete" ux="rc"></component-status>

oui-input is a package which provides styles for the input component.

## Installation

```less
  @import 'oui-input/input';
```

## Usage
Guideline : Any text box must be sized according to the expected length of the field in the database.

*Formatted field*

When entering a formatted field (date, time, phone number, postal code, amount, email address, etc.), no formatting mask will be used.
The field will be formatted at the output (when entered / modified) or displayed (when it is not empty).

```html:preview
<input type="text" class="oui-input" value="Input text">
<input type="text" class="oui-input" placeholder="Input text with placeholder">
<input type="text" class="oui-input" value="Input text disabled" disabled="disabled">
<input type="text" class="oui-input" value="Input text disabled with value" disabled="disabled">
<input type="text" class="oui-input" value="Input text readonly with value" readonly="readonly">
<input type="text" class="oui-input oui-input_error" value="Input text Error">
```

### Inline input

```html:preview
<input type="text" class="oui-input oui-input_inline" value="Inline input">
```

### Sizes

```html:preview
<input type="text" class="oui-input oui-input_xs" value="XS">
<input type="text" class="oui-input oui-input_s" value="S">
<input type="text" class="oui-input oui-input_m" value="M">
<input type="text" class="oui-input oui-input_l" value="L">
<input type="text" class="oui-input oui-input_xl" value="XL">
```

## Mixins

```less
  @import 'oui-input/_mixins';
```

### .input-base

Define the base styles for an input.

```less
#oui > .input-base();
```

```less
#oui > .input(
  @background-color: Color,
  @border-color: Color,
  @font-color: Color,
  @border-color-hover: Color,
  @background-color-focus: Color,
  @border-color-focus: Color,
  @background-color-disabled: Color,
  @border-color-disabled: Color,
  @font-color-disabled: Color,
  @background-color-read-only: Color,
  @border-color-read-only: Color,
  @font-color-read-only: Color,
  @selection-background-color: Color,
  @selection-font-color: Color,
  @font-size: Number,
  @font-weight: Number,
  @padding: Number,
  @margin: Number
);
```

### .input-status

Define the styles for input warning and input error.

```less
#oui > .input-status();
```

```less
#oui > .input-status(
  status: Class[]
);
```

### .input-inline

`.oui-input` don't give you an inline element by default. If you want an inlined input, you can use this mixin.

```less
#oui > .input-inline();
```

## Classes

### Block

The block class is `oui-input` (top-level element).

### Modifier

The provided modifiers are:

| Class                 | Description                                 |
| --------------------- | ------------------------------------------- |
| `oui-input_warning`   | Make the input looks like one in warning    |
| `oui-input_error`     | Make the input looks like one in error      |
| `oui-input_inline`    | Make the input inlined                      |
