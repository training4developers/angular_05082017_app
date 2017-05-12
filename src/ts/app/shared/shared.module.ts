import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { EllipsisPipe } from "./pipes/ellipsis.pipe";
import { ColorNamePipe } from "./pipes/color-name.pipe";

import { ToolHeaderComponent } from "./components/tool-header.component";
import { UnorderedListComponent } from "./components/unordered-list.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        CapitalizePipe,
        EllipsisPipe,
        ColorNamePipe,
        ToolHeaderComponent,
        UnorderedListComponent,
    ],
    exports: [
        CapitalizePipe,
        EllipsisPipe,
        ColorNamePipe,
        ToolHeaderComponent,
        UnorderedListComponent,
    ],
})
export class SharedModule { }
