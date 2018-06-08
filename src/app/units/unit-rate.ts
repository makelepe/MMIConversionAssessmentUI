import { Unit } from "./unit";

export class UnitRate {

    id: number;
    conversionRate : number;
    description : Unit;
    category : Unit;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

}
