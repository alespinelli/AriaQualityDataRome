import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FinalAirData } from '../../models/air-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: FinalAirData;
  private url: string = "https://api.waqi.info/api/feed/@9352/obs.en.json";

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
