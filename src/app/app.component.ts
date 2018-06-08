import { Component, OnInit } from '@angular/core';
import {ConversionService } from './service/conversion.service';
import { Unit } from './units/unit';
import { UnitRate } from './units/unit-rate';
import { ConversionResult } from './units/conversion-result';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConversionService]
})
export class AppComponent {
  // units placeholders
  public lengthMetricUnits: Unit[] = [];
  public lengthImperialUnits: Unit[] = [];
  public areaMetricUnits: Unit[] = [];
  public areaImperialUnits: Unit[] = [];
  public massMetricUnits: Unit[] = [];
  public massImperialUnits: Unit[] = [];

  // results 
  public lengthResult: ConversionResult;
  public massResult: ConversionResult;
  public areaResult: ConversionResult;

  constructor(private conversionService: ConversionService) { }

  ngOnInit() {
    this.conversionService.getAllUnits().subscribe(result => {
      var json = result.json();
      for (var i=0; i<json.length; i++) {
        var unit : Unit = new Unit(json[i].id, json[i].name, json[i].description, json[i].category, json[i].type);
        console.log("unit type ::" + unit.type);

        if (unit.category == 'length') {
          if (unit.type == 'imperial') {
            this.lengthImperialUnits.push (unit);
          } else {
            this.lengthMetricUnits.push (unit);
          }
        }

        else if (unit.category == 'mass') {
          if (unit.type == 'imperial') {
            this.massImperialUnits.push (unit);
          } else {
            this.massMetricUnits.push (unit);
          }
        }

        else if (unit.category == 'area') {
          if (unit.type == 'imperial') {
            this.areaImperialUnits.push (unit);
          } else {
            this.areaMetricUnits.push (unit);
          }
        }
      
      }
    
    }, error => console.error(error));

  }

  convertLength(value,metricId,imperialId) {
    console.log("converting "+ metricId +"->"+imperialId+", value="+value);
    
    this.conversionService.convert(metricId, imperialId, value).subscribe(result => {
      var json = result.json();   
      console.log("length json :: " + json);                               
      this.lengthResult =  new ConversionResult(json.value, 
                                              json.metricUnitName, 
                                              json.imperialUnitName, 
                                              json.convertedImperial, 
                                              json.convertedMetric);                                  
    }, error => console.error(error));
  }

  convertArea(value,metricId,imperialId) {
    console.log("converting "+ metricId +"->"+imperialId+", value="+value);
    
    this.conversionService.convert(metricId, imperialId, value).subscribe(result => {
      var json = result.json();   
      console.log("area json :: " + json);                               
      this.areaResult = new ConversionResult(json.value, 
                                              json.metricUnitName, 
                                              json.imperialUnitName, 
                                              json.convertedImperial, 
                                              json.convertedMetric);                                  
    }, error => console.error(error));
  }


  convertMass(value,metricId,imperialId) {
    console.log("converting "+ metricId +"->"+imperialId+", value="+value);
    
    this.conversionService.convert(metricId, imperialId, value).subscribe(result => {
      var json = result.json();   
      console.log("mass json :: " + json);                               
      this.massResult = new ConversionResult(json.value, 
                                              json.metricUnitName, 
                                              json.imperialUnitName, 
                                              json.convertedImperial, 
                                              json.convertedMetric);                                  
    }, error => console.error(error));
  }


}
