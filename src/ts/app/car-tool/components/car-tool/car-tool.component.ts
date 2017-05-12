import { Component, OnInit } from "@angular/core";

import { Car } from "../../models/car";
import { CarsService } from "../../services/cars.service";

@Component({
    selector: "car-tool",
    template: require("./car-tool.component.html"),
    styles: [ require("./car-tool.component.scss") ],
})
export class CarToolComponent implements OnInit {

    public cars: Car[] = [];

    constructor(private carsSvc: CarsService) { }

    public ngOnInit() {
        this.refreshCars();
    }

    public createCar(newCar: Car) {
        return this.carsSvc.insert(newCar).then( () => this.refreshCars() );
    }

    public deleteCar(carId: number) {
        return this.carsSvc.delete(carId).then( () => this.refreshCars() );
    }

    private refreshCars() {
        return this.carsSvc.all().then( (cars) => this.cars = cars );
    }
}
