import {
    EVENT_CANVAS_CLICK,
    RowLayout,
    BrowserUIModel
} from "@visuallyjs/browser-ui";
import { AngularRenderOptions } from "@visuallyjs/browser-ui-angular";

/**
 * Render options control the basic behaviour and appearance of the UI. There are a lot of render options available, and we'd encourage you to read the docs for a full overview, but we've included a few here to give you some food for thought.
 */
const renderOptions:AngularRenderOptions = {
    layout:{
        type:RowLayout.type,
        options:{
            padding:{x:10, y:0}
        }
    },
    dragOptions:{
        cssFilter:"*"
    },
    zoom:{
        wheel:false
    },
    events:{
        [EVENT_CANVAS_CLICK]:(p:{model:BrowserUIModel}) => p.model.clearSelection()
    },
    elementsDraggable:false,
    consumeRightClick:false
}


export default renderOptions
