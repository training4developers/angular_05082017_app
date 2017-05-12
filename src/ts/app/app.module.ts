import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from "./shared/shared.module";
import { CarToolModule } from "./car-tool/car-tool.module";
import { ColorToolModule } from "./color-tool/color-tool.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        SharedModule,
        CarToolModule,
        ColorToolModule,
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
