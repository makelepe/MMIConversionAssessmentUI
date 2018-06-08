import { Injectable } from '@angular/core';
import { Unit } from '../units/unit';
import { UnitRate } from '../units/unit-rate';
import { ConversionResult } from '../units/conversion-result';
import { Http } from '@angular/http';
import { BaseService } from './base.service';

@Injectable()
export class ConversionService extends BaseService {
  private http: Http;
  
 
  constructor(http: Http) {
    super();
    this.http = http;
  }

  /**
   * fetch units from ConversionService REST controller 
   */
  getAllUnits () : any {
    return this.http.get(this.baseUrl + 'conversion/units');
  }

  /**
   * invoke ConversionService REST controller to perform conversion calculations 
   */
  convert (metricId: number, imperialId: number, value: string): any {
    return this.http.get(this.baseUrl + 'conversion/convert/?metricUnitId='+metricId+'&imperialUnitId='+imperialId+'&value=' + value);
  }

}
