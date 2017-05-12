import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Car } from "../../models/car";

@Component({
    selector: "car-form",
    template: require("./car-form.component.html"),
    styles: [ require("./car-form.component.scss") ],
})
export class CarFormComponent {

    public carForm = new FormGroup({
        makeInput: new FormControl(""),
        modelInput: new FormControl(""),
        yearInput: new FormControl(""),
        colorInput: new FormControl("#000000"),
        priceInput: new FormControl(""),
    });

    @Input()
    public submitText = "Submit";

    @Output()
    public onSubmitCar = new EventEmitter<Car>();

    public submitForm() {

        this.onSubmitCar.emit({
            make: this.carForm.value.makeInput,
            model: this.carForm.value.modelInput,
            year: Number(this.carForm.value.yearInput),
            color: this.carForm.value.colorInput,
            price: Number(this.carForm.value.priceInput),
        });

        this.carForm.setValue({
            makeInput: "",
            modelInput: "",
            yearInput: "",
            colorInput: "#000000",
            priceInput: "",
        });
    }

}
