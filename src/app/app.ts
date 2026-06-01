import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { VisuallyJsModule, SurfaceComponent } from "@visuallyjs/browser-ui-angular";
import {
  uuid,
  Surface
} from "@visuallyjs/browser-ui"

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import { DragManager } from './drag-manager'
import { KanbanInspectorComponent } from './components/inspector.component';

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, KanbanInspectorComponent],
  templateUrl: './app.html'
})
export class App implements AfterViewInit {

  @ViewChild(SurfaceComponent) surfaceComponent!: SurfaceComponent;

  renderOptions = renderOptions
  viewOptions= viewOptions
  surface!: Surface;

  addColumn(event: any) {
    if (event.code === "Enter") {
      this.surface.model.addGroup({
          id: uuid(),
          title: event.target.value,
          description: "",
          color: "#FFFFFF"
        })
        event.target.value = ""
    }
  }

  ngAfterViewInit() {
    this.surface = this.surfaceComponent.surface;
    new DragManager(this.surface);
  }

}
