import { Component } from '@angular/core';
import { BaseNodeComponent } from '@visuallyjs/browser-ui-angular';

@Component({
  selector: 'app-kanban-item',
  template: `
    <div class="vjs-kanban-item" draggable="true">
        <div class="vjs-kanban-item-delete" (click)="removeNode()"></div>
        {{ data.name }}
    </div>
  `,
  standalone: true
})
export class ItemComponent extends BaseNodeComponent  { }
