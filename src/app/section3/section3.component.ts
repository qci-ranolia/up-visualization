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
  colors:any;
  barColors:any;

  constructor( private projectService : ProjectService ) {
    this.projectService.emitSection3Graph1.subscribe( res => {
      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.getGraph1();
    });
    this.projectService.emitSection3Graph2.subscribe( res => {
      this.graph2data1 = res.legends;
      this.graph2data2 = res.data;
      this.graph2name = res.name;
      this.getGraph2();
    });
    this.projectService.emitSection3Graph3.subscribe( res => {
      this.graph3data1 = res.legends;
      this.graph3data2 = res.data;
      this.graph3name = res.name;
      this.getGraph3();
    });
    this.projectService.emitColors.subscribe( res => {
      this.colors = res
    })
    this.projectService.emitBarColors.subscribe( res => {
      this.barColors = res
    })
  }

  ngOnInit() {
    this.projectService.getColors()
  }

  getGraph1() {
    var yMax = 100;
    var dataShadow = [];
    for (var i = 0; i < this.graph1data2.length; i++) {
      dataShadow.push(yMax);
    }
    this.option1 = {
      // color: ['#006699'],
      color : [this.colors[0], this.colors[1]],
      title: {
        text: this.graph1name,
        x:'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize:16
        }
        // subtext: 'test2',
      },
      xAxis: {
        type: 'category',
        data: this.graph1data1
      },
      yAxis: {
        type: 'value',
        max: 100,
        splitLine:{ show:false }
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} "
      },
      series: [{
        name: this.graph1name,
        data: this.graph1data2,
        type: 'bar',
        barWidth: '50%',
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            // backgroundColor: '#eee',
            borderColor: '#aaa',
            color:'#363636'
          }
        }
      }]
    }
  }

  getGraph2() {
    var yMax = 100;
    var dataShadow = [];
    for (var i = 0; i < this.graph2data2.length; i++) {
      dataShadow.push(yMax);
    }
    this.option2 = {
      color: [this.colors[1],this.colors[0]],
      title: {
        text: this.graph2name,
        x:'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize:16
        }
        // subtext: 'test2',
      },
      xAxis: {
        type: 'category',
        data: this.graph2data1
      },
      yAxis: {
        type: 'value',
        max: 100,
        splitLine:{ show:false }
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
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            // backgroundColor: '#eee',
            borderColor: '#aaa',
            color:'#363636'
          }
        }
      }]
    }
  }

  getGraph3() {
    var yMax = 100;
    var dataShadow = [];
    for (var i = 0; i < this.graph3data2.length; i++) {
      dataShadow.push(yMax);
    }
    this.option3 = {
      color:[[this.colors[2]]],
      title:{
        text:this.graph3name,
        x:'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize:16
        }
      },
      xAxis:{
        type:'category',
        data:this.graph3data1
      },
      yAxis:{
        type:'value',
        max: 100,
        splitLine:{ show:false }
      },
      tooltip:{
        trigger:'item',
        formatter:"{a} <br/>{b} : {c}"
      },
      series: [{
        name:this.graph3name,
        data:this.graph3data2,
        type:'bar',
        barWidth: '50%',
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            // backgroundColor: '#eee',
            borderColor: '#aaa',
            color:'#363636'
          }
        }
      }]
    }
  }

}
