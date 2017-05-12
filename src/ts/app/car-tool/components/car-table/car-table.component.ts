import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Car } from "../../models/car";

@Component({
    selector: "car-table",
    template: require("./car-table.component.html"),
})
export class CarTableComponent {

    @Input()
    public cars: Car[] = [];

    @Output()
    public onDeleteCar = new EventEmitter<number>();
}
