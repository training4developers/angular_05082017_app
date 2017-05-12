import { ModelId, Model } from "../../shared/models/model";

export interface Car extends Model {
    id?: ModelId;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
}
