export class ConversionResult {

    public value :string;
    public metricUnitName :string;
    public imperialUnitName :string;
    public convertedImperial :string;
    public convertedMetric :string;

    constructor (value : string, 
      metricUnitName : string,
      imperialUnitName  : string,
      convertedImperial  : string,
      convertedMetric  : string,) {

        this.value = value;
        this.metricUnitName = metricUnitName;
        this.imperialUnitName = imperialUnitName;
        this.convertedImperial = convertedImperial;
        this.convertedMetric = convertedMetric;
}

}
