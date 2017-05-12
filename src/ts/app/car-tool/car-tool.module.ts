import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from "../shared/shared.module";

import { CarsService } from "./services/cars.service";

import { CarToolComponent } from "./components/car-tool/car-tool.component";
import { CarTableComponent } from "./components/car-table/car-table.component";
import { CarFormComponent } from "./components/car-form/car-form.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        NgbModule,
        SharedModule,
    ],
    declarations: [
        CarToolComponent,
        CarTableComponent,
        CarFormComponent,
    ],
    exports: [
        CarToolComponent,
    ],
    providers: [ CarsService ],
})
export class CarToolModule { }
