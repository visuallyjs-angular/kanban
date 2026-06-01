import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';

@Component({
  selector: 'app-kanban-inspector',
  template: `

      <div class="vjs-kanban-inspector">
        @if(currentObjectType === NODE) {
          <div>
            <strong>Label</strong>
            <input vjs-att="name" type="text"/>
            <strong>Description</strong>
            <textarea vjs-att="description" rows="10"></textarea>
          </div>
        } @else if (currentObjectType === GROUP) {
          <strong>Title</strong>
          <input vjs-att="title" type="text"/>
          <strong>Description</strong>
          <textarea vjs-att="description" rows="10"></textarea>
          <strong>Color</strong>
          <input type="color" vjs-att="color"/>
        }
       </div>
  `,
  standalone: true,
  imports: [CommonModule, VisuallyJsModule]
})
export class KanbanInspectorComponent extends InspectorComponent {
}
