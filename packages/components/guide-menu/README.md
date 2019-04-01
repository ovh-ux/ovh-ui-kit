# Installation

```js
angular.module('myModule', ['oui.guide-menu']);
```

# API

## Component `oui-guide-menu`

| Attribute     | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `text`        | string    | @         | yes               | n/a                       | n/a       | button guide text
| `aria-label`  | string    | @?        | yes               | n/a                       | n/a       | accessibility label
| `placement`   | string    | @?        | yes               | `start`, `center`, `end`  | `start`   | placement of the dropdown menu

## Component `oui-guide-menu-item`

| Attribute     | Type      | Binding   | One-time binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `aria-label`  | string    | @?        | no                | n/a                       | n/a       | accessibility label
| `href`        | string    | @?        | yes               | n/a                       | n/a       | hypertext link (link)
| `disabled`    | boolean   | <?        | no                | `true`, `false`           | `false`   | disable (button)
| `external`    | boolean   | @?        | yes               | `true`, `false`           | `false`   | display external icon (link)
| `on-click`    | function  | &?        | no                | n/a                       | n/a       | on-click handler (button)

## Component `oui-guide-menu-group`

| Attribute     | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `label`       | string    | @         | yes               | n/a                       | n/a       | guide-menu group label
