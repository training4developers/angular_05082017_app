import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { BaseRESTService } from "../../shared/services/base-rest.service";

import { Car } from "../models/car";

// declare var REST_BASE_URL: string;

@Injectable()
export class CarsService extends BaseRESTService<Car> {

    constructor(http: Http) {
        super(http, window["REST_BASE_URL2"] + "/cars");
    }
}
