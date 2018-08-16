import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  option1: any;
  option2: any;
  option3: any;
  dataSet1: any = [];
  dataSet2: any = [];
  graph1name: any;
  graph1data1 : any = [];
  graph1data2 : any = [];
  graph2name: any;
  graph2data1 : any = [];
  graph2data2 : any = [];
  graph3name: any;
  graph3data1 : any = [];
  graph3data2 : any = [];
  graph4name: any;
  graph4data1 : any = [];
  graph4data2 : any = [];
  option1_data1: any;
  option1_legends: any;

  constructor(private projectService: ProjectService) {

    this.projectService.emitSection3Graph1.subscribe(res=>{
      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.getGraph1();
    });

    this.projectService.emitSection3Graph2.subscribe(res=>{
      this.graph2data1 = res.legends;
      this.graph2data2 = res.data;
      this.graph2name = res.name;
      this.getGraph2();
    });

    this.projectService.emitSection3Graph3.subscribe(res=>{
      this.graph3data1 = res.legends;
      this.graph3data2 = res.data;
      this.graph3name = res.name;
      this.getGraph3();
    });

  }

  ngOnInit() {
    // this.projectService.getSection3Graph1();
    // this.projectService.getSection3Graph2();
    // this.projectService.getSection3Graph3();
  }

  getGraph1() {

    this.option1 = {
      color:['lightskyblue'],
      title: {
        text: this.graph1name,
        // subtext: 'test2',
      },
      xAxis: {
          type: 'category',
          data: this.graph1data1
      },
      yAxis: {
          type: 'value'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} "
      },
      series: [{
          name:this.graph1name,
          data: this.graph1data2,
          type: 'bar'
      }]
    };
  }

  getGraph2() {
    this.option2 = {
      color:['yellow'],
      title: {
        text: this.graph2name,
        // subtext: 'test2',
      },
      xAxis: {
          type: 'category',
          data: this.graph2data1
      },
      yAxis: {
          type: 'value'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} "
      },
      series: [{
          name:this.graph2name,
          data: this.graph2data2,
          type: 'bar'
      }]
    };
  }

  getGraph3() {
    this.option3 = {
      color:['orangered'],
      title: {
        text: this.graph3name,
        // subtext: 'test2',
      },
      xAxis: {
          type: 'category',
          data: this.graph3data1
      },
      yAxis: {
          type: 'value'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} "
      },
      series: [{
          name:this.graph3name,
          data: this.graph3data2,
          type: 'bar'
      }]
    };
  }


}
