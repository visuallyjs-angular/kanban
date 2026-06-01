import { Component } from '@angular/core';
import { BaseGroupComponent } from '@visuallyjs/browser-ui-angular';
import { Group, uuid } from '@visuallyjs/browser-ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban-column',
  template: `
    <div class="vjs-kanban-lane" data-vjs-draggable="false">
        <div class="vjs-kanban-lane-header">

            <div class="vjs-kanban-lane-titlebar">
                <div class="vjs-kanban-lane-color" [style.backgroundColor]="data.color"></div>
                <div class="vjs-kanban-lane-title">{{data.title}}</div>
                <div class="vjs-kanban-lane-edit" aria-label="Edit column name and description" title="Edit column name and description" (click)="editColumn()"></div>
            </div>

            <div class="vjs-kanban-lane-description">{{data.description}}</div>
        </div>

        <div data-vjs-group-content="true"></div>

        <div class="vjs-kanban-lane-footer">
            <input type="text" placeholder="Add item..." (keypress)="addItem($event)">
        </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ColumnComponent extends BaseGroupComponent {

  addItem(event: any) {
    if (event.code === "Enter") {
      const order = this.getGroup().getMembers().length;
      const node = this.model.addNode({
        group: this.getGroup(),
        id: uuid(),
        order,
        name: event.target.value || "Item"
      });

      setTimeout(() => {
        const el = this.surface.getRenderedElement(node);
        el.scrollIntoView();
        this.model.setSelection(node);
      }, 0);

      event.target.value = "";
    }
  }

  editColumn() {
    this.model.setSelection(this.getGroup());
  }
}
