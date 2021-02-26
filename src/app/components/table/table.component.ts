import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';

import { AirData, FinalAirData } from '../../models/air-data';
import { DEFAULT_AIR_DATA } from './../../models/air-data';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'description', 'currentValue', 'minValue', 'maxValue'];
  public dataSource: FinalAirData = DEFAULT_AIR_DATA;
  @ViewChild('myTable') airTable: MatTable<AirData>;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getTableData().subscribe((value) => {
      //console.log(value.rxs.obs[0].msg.city.name)

      this.dataSource.city = value.rxs.obs[0].msg.city.name;

      //this.dataSource.time = value.rxs.obs[0].msg.time.utc.s ;
      this.dataSource.time = value.rxs.obs[0].msg.time.s.en.time;

      let i = 0;
      while (value.rxs.obs[0].msg.iaqi[i] && i<this.dataSource.airData.length) {
        this.dataSource.airData[i].currentValue = value.rxs.obs[0].msg.iaqi[i].v[0];
        this.dataSource.airData[i].minValue = value.rxs.obs[0].msg.iaqi[i].v[1];
        this.dataSource.airData[i].maxValue = value.rxs.obs[0].msg.iaqi[i].v[2];

        switch (value.rxs.obs[0].msg.iaqi[i].p) {
          case 'p'
            : this.dataSource.airData[i].name = "Pressure";
            break
          case 'h'
            : this.dataSource.airData[i].name = "Humidity";
            break
          case 't'
            : this.dataSource.airData[i].name = "Temperature";
            break
          default: this.dataSource.airData[i].name = value.rxs.obs[0].msg.iaqi[i].p
        };
        this.dataSource.airData[i].description = value.rxs.obs[0].msg.iaqi[i].i;
        i++;
      }
      if(this.dataSource.airData[i]){
              console.log('true');
              this.dataSource.airData.splice(i, this.dataSource.airData.length - i);
              this.airTable.renderRows();
      }
    });
  }



}
