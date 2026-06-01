### Kanban Board Demo

This demo illustrates a Kanban board implementation using VisuallyJS in an Angular application.

#### How it works

The Kanban board uses the `vjs-surface` component to represent columns and tasks. It demonstrates how to use VisuallyJS for layout-driven applications that involve drag-and-drop between structured containers.

#### Components Used

- `vjs-surface`: The main canvas for rendering columns and cards.
- `vjs-controls`: Navigation and zoom controls, configured to disable "zoom to extents" and "clear".

#### Component Options

The `vjs-surface` component is configured with:
- `viewOptions`: Defines how columns and cards are mapped from the data.
- `renderOptions`: Specifies the layout and visual styles of the Kanban board.

The `vjs-controls` component uses specific properties to tailor its behavior for a Kanban board:
- `zoomToExtents`: Set to `false`.
- `clear`: Set to `false`.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
