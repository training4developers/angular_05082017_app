import { Pipe, PipeTransform } from "@angular/core";

const namer = require("color-namer");

@Pipe({
    name: "colorName",
})
export class ColorNamePipe implements PipeTransform {

    public transform(value: any) {
        return namer(value).ntc[0].name;
    }
}
