# oui-button

<component-status cx-design="complete" ux="rc"></component-status>

## Installation

```less
@import 'oui-button/button';
```

## Usage

### Primary Action Button
* This button represents the action that the user is waiting for.  It must stand out visually, catching the eye and encourage the user to click.  This button is equivalent to press on the “Enter” key on the keypad.
* Normally, there’s only one primary action button per form.
* The min-width is set to 195px and the max-width is set to 300px. If the translation is longer than that, find a another translation or the bouton will be transform in a link (without border).

```html:preview
<button class="oui-button oui-button_primary">
  Primary Button
</button>
<button class="oui-button oui-button_primary oui-button_icon-right">
  Button Icon right
  <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
</button>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_primary">
    Primary Button Full width
  </button>
</div>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_primary">
    Primary Full width Icon right
    <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
</div>
```

#### Disabled Primary Action Button

```html:preview
<button class="oui-button oui-button_primary" disabled>
  Primary Button
</button>
<button class="oui-button oui-button_primary oui-button_icon-right" disabled>
  Button Icon right
  <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
</button>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_primary" disabled>
    Primary Button Full width
  </button>
</div>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_primary" disabled>
    Primary Full width Icon right
    <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
</div>
```

### Secondary Action Button

Multiple secondary action buttons can be found on a page.

```html:preview
<button class="oui-button oui-button_secondary">
  Secondary Button
</button>
  <button class="oui-button oui-button_secondary oui-button_icon-left">
  <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
  Button Icon left
</button>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_secondary">
    Secondary Button Full width
  </button>
</div>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_secondary">
    <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
    Secondary Full width Icon left
  </button>
</div>
```

#### Disabled Secondary Action Button

```html:preview
<button class="oui-button oui-button_secondary" disabled>
  Secondary Button
</button>
  <button class="oui-button oui-button_secondary oui-button_icon-left" disabled>
  <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
  Button Icon left
</button>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_secondary" disabled>
    Secondary Button Full width
  </button>
</div>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_secondary" disabled>
    <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
    Secondary Full width Icon left
  </button>
</div>
```
### Dropdown Button
Actions grouped under a Dropdown button.  On click, a panel slides down to display the actions list.
* Chevron points down when the menu is open.

```html:preview
<button class="oui-button oui-button_dropdown">
  Dropdown Button
  <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
</button>
```
#### Disabled Dropdown Button

```html:preview
<button class="oui-button oui-button_dropdown" disabled>
  Dropdown Button
  <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
</button>
```

### Link Button

```html:preview
<button class="oui-button oui-button_link">
  Button link
</button>
<button class="oui-button oui-button_link oui-button_icon-left">
  <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
  Button link Icon left
</button>
<button class="oui-button oui-button_link oui-button_icon-right">
  Button link Icon right
  <i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
</button>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_link oui-button_icon-left">
    <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
    Button link Full width Icon left
  </button>
</div>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_full-width oui-button_link oui-button_icon-right">
    Button link Full width Icon right
    <i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
</div>
```

#### Disabled Link Button

```html:preview
<button class="oui-button oui-button_link" disabled>
  Button link
</button>
<button class="oui-button oui-button_link oui-button_icon-left" disabled>
  <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
  Button link Icon left
</button>
<button class="oui-button oui-button_link oui-button_icon-right" disabled>
  Button link Icon right
  <i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
</button>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_link oui-button_full-width oui-button_icon-left" disabled>
    <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
    Button link Full width Icon left
  </button>
</div>
<div style="display: inline-block; width: 300px">
  <button class="oui-button oui-button_link oui-button_full-width oui-button_icon-right" disabled>
    Button link Full width Icon right
    <i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
</div>
```

### Small width

```html:preview
<button class="oui-button oui-button_primary oui-button_small-width">
  OK
</button>
<button class="oui-button oui-button_secondary oui-button_small-width">
  OK
</button>
<button class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width">
  <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
</button>
```

#### Disabled Small width

```html:preview
<button class="oui-button oui-button_primary oui-button_small-width" disabled>
  OK
</button>
<button class="oui-button oui-button_secondary oui-button_small-width" disabled>
  OK
</button>
<button class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" disabled>
  <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
</button>
```

### Large height

```html:preview
<button class="oui-button oui-button_primary oui-button_large-height">
  Primary Button
</button>
<button class="oui-button oui-button_secondary oui-button_large-height">
  Secondary Button
</button>
<button class="oui-button oui-button_primary oui-button_icon-right oui-button_large-height">
  Button Icon right
  <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
</button>
```

### Disabled Large height

```html:preview
<button class="oui-button oui-button_primary oui-button_large-height" disabled>
  Primary Button
</button>
<button class="oui-button oui-button_secondary oui-button_large-height" disabled>
  Secondary Button
</button>
<button class="oui-button oui-button_primary oui-button_icon-right oui-button_large-height" disabled>
  Button Icon right
  <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
</button>
```

### Icon alone

```html:preview
  <button type="button" class="oui-button oui-button_icon-alone">
    <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
  </button>
```
