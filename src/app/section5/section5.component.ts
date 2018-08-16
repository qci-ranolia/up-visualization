import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {

    option1: any
    option2: any
    option3: any
    dataSet1: any = []
    dataSet2: any = []
    graph1name: any
    graph1data1 : any = []
    graph1data2 : any = []
    graph2name: any
    graph2data1 : any = []
    graph2data2 : any = []
    graph3name: any;
    graph3data1 : any = []
    graph3data2 : any = []
    graph4name: any;
    graph4data1 : any = []
    graph4data2 : any = []
    option1_data1: any
    option1_legends: any
    colors:any

  constructor(private projectService: ProjectService) {

    this.projectService.emitSection5Graph1.subscribe(res=>{
      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.getGraph1();
    });

    this.projectService.emitSection5Graph2.subscribe(res=>{
      this.graph2data1 = res.legends;
      this.graph2data2 = res.data;
      this.graph2name = res.name;
      this.getGraph2();
    });
    this.projectService.emitColors.subscribe(res=>{
      this.colors=res
    })
  }

  ngOnInit() {
    this.projectService.getSection5Graph1();
    this.projectService.getSection5Graph2();
    this.projectService.getColors()
  }

  getGraph1() {

    this.option1 = {
      color:[this.colors[2]],
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
          type: 'bar',
          barWidth: '50%',
      }]
    };
  }

  getGraph2() {

    this.option2 = {
      color:[this.colors[1]],
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
          type: 'bar',
          barWidth: '50%',
      }]
    };
  }


}
