import {
    BrowserElement,
    EmptyLayout,
    EVENT_TAP,
    GroupEventCallbackPayload,
    NodeEventCallbackPayload
} from "@visuallyjs/browser-ui";
import { AngularViewOptions } from "@visuallyjs/browser-ui-angular";
import { ItemComponent } from "./components/item.component";
import { ColumnComponent } from "./components/column.component";

/**
 * View options map node/group types to the component used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions: AngularViewOptions = {
    nodes: {
        default: {
            component: ItemComponent,
            events: {
                [EVENT_TAP]: (p: NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    },
    groups: {
        default: {
            component: ColumnComponent,
            layout: {
                type: EmptyLayout.type
            },
            events: {
                [EVENT_TAP]: (p: GroupEventCallbackPayload<BrowserElement>) => {
                    p.model.clearSelection()
                }
            }

        }
    }
}


export default viewOptions
