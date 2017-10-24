# oui-loader

<component-status cx-design="partial" ux="rc"></component-status>

oui-loader is a package which provide styles for the loader component.

## Installation

```less
@import 'oui-loader/loader';
```

## Usage

### Small loader 
Guideline: Use the small format when loading a single item. (ex: link in the left menu, a content in a table cell)

```html:preview
<div class="oui-loader oui-loader_s">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

### Medum loader 
Guideline: Use the medium format when loading a group or block. (ex: box, panel, zone of a page)

```html:preview
<div class="oui-loader oui-loader_m">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

### Large loader 
Guideline: Use large format when loading a whole page.

```html:preview
<div class="oui-loader oui-loader_l">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

## Mixins

```less
@import 'oui-loader/_mixins';
```

### .loader-base

Define the base styles for a loader.

```less
#oui > .loader-base();
```

### .loader-s

Will stylize your loader as a small one.

```less
#oui > .loader-s();
```

```less
#oui > .loader-s(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .loader-m

Will stylize your loader as a medium one.

```less
#oui > .loader-m();
```

```less
#oui > .loader-m(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .loader-l

Will stylize your loader as a large one.

```less
#oui > .loader-l();
```

```less
#oui > .loader-l(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .loader-inline

Will stylize your loader as an inlined one. Typically used for the small one.

```less
#oui > .loader-inline();
```

## Classes

### Block

The block class is `oui-loader` (top-level element).
