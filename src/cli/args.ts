import { isBetween } from "../utils/tools.js";


export class Arg {
    public isString: boolean;
    public isFlag: boolean;

    constructor(public value: string) {
        this.value = value;
        this.isString = isBetween(value, '"') || isBetween(value, "'");
        this.isFlag = value.startsWith('--');

        if (this.isString) this.value = this.value.slice(1, -1);
        if (this.isFlag) this.value = this.value.slice(2);
    }
}