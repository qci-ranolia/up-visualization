import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  options: any;
  dataSet1: any = [];
  dataSet2: any = [];

  constructor( private projectService: ProjectService) {

    this.projectService.emitSection2Graph1.subscribe(res=>{
      this.dataSet1 = res.data1;
      this.dataSet2 = res.data2;
      this.getGraph1();
    });
  }

  ngOnInit() {
    this.projectService.getDataSection1Graph1();
  }

  getGraph1() {
    const xAxisData = [];
    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: this.dataSet1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: this.dataSet2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

}
