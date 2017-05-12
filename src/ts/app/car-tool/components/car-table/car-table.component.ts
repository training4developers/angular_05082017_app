import { Component, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";
import * as $ from "jquery";
import "tableexport";

import { Car } from "../../models/car";

@Component({
    selector: "car-table",
    template: require("./car-table.component.html"),
})
export class CarTableComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

    private tableElement: JQuery;
    private exportTable: any;

    public ngAfterViewInit() {
        this.tableElement = $("table");
        this.exportTable = this.tableElement.tableExport();
    }

    public ngAfterViewChecked() {
        this.exportTable.update();
    }

    public ngOnDestroy() {
        this.exportTable.remove();
    }

    @Input()
    public cars: Car[] = [];

    @Output()
    public onDeleteCar = new EventEmitter<number>();
}
