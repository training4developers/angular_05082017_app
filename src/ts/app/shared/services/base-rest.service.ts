import { Http, RequestOptions, Headers } from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { ModelId, Model } from "../models/model";

export abstract class BaseRESTService<T extends Model> {

    private requestOptions = new RequestOptions({
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    });

    constructor(private http: Http, private baseUrl: string) { }

    public all(): Promise<T[]> {
        return this.http.get(this.collectionUrl())
            .map( (res) => res.json() ).toPromise();
    }

    public one(modelId: ModelId): Promise<T> {
        return this.http.get(this.elementUrl(modelId))
            .map( (res) => res.json() ).toPromise();
    }

    public insert(model: T): Promise<T> {
        return this.http.post(this.collectionUrl(),
            JSON.stringify(model), this.requestOptions)
            .map( (res) => res.json() ).toPromise();
    }

    public update(model: T): Promise<T> {
        return this.http.put(this.elementUrl(model.id),
            JSON.stringify(model), this.requestOptions)
            .map( (res) => res.json() ).toPromise();
    }

    public delete(modelId: ModelId): Promise<T> {
        return this.http.delete(this.elementUrl(modelId))
            .map( (res) => res.json() ).toPromise();
    }

    private collectionUrl() {
        return this.baseUrl;
    }

    private elementUrl(modelId: ModelId) {
        return `${this.baseUrl}/${encodeURIComponent(String(modelId))}`;
    }
}
