import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})

export class Section4Component implements OnInit {

  option1 : any;
  option2 : any;
  option3 : any;
  dataSet1 : any = [];
  dataSet2 : any = [];
  graph1name : any;
  graph1data1 : any = [];
  graph1data2 : any = [];
  graph2name : any;
  graph2data1 : any = [];
  graph2data2 : any = [];
  graph3name : any;
  graph3data1 : any = [];
  graph3data2 : any = [];
  graph4name : any;
  graph4data1 : any = [];
  graph4data2 : any = [];
  option1_data1 : any;
  option1_legends : any;
  colors : any
  barColors : any

  constructor( private projectService : ProjectService ){

    this.projectService.emitSection4Graph1.subscribe( res => {
      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.getGraph1();
    })

    this.projectService.emitColors.subscribe( res => {
      this.colors = res
    })

    this.projectService.emitBarColors.subscribe( res => {
      this.barColors = res
    })

    this.projectService.emitSection4Graph2.subscribe( res => {
      // console.log(res);
      this.graph2data1 = res.legends;
      this.graph2data2 = res.data;
      this.graph2name = res.name;
      this.getGraph2();
    });

  }
  ngOnInit() {
    this.projectService.getColors()
    // this.projectService.getSection4Graph1();
    // this.projectService.getSection4Graph2();
  }

  getGraph1() {
    let itemStyle = {
      normal: {
        opacity:0.7,
        color: {
          // repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
      }
    };
    this.option1 = {
      color:this.colors,
      title: {
        text: this.graph1name,
        x:'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize:16
        }
        // subtext: 'test2',
      },
      itemStyle: {
        borderWidth: 10,
        borderColor: 'transparent'
      },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        visualMap: {
          show: false,
          min: -220,
          max: 3000,
          inRange: {
              // colorLightness: [0, 1]
          }
        },
          legend: {
            x:'center',
            y:'bottom',
            // data:this.option1_legends
            data : this.graph1data1
          },

          series : [
              {
                title: {
                  // text: 'Customized Pie',
                  left: 'center',
                  top: 10,
                  textStyle: {
                    color: 'white'
                  }
                },
                  name:this.graph1name,
                  type:'pie',
                  radius : ['50%','75%'],
                  center: ['50%', '50%'],
                  // data:this.option1_data1,
                  data : this.graph1data2,
                  // roseType: 'radius',
                  label:{
                    show: false,
                      normal:{
                        show: true,
                        formatter: '{d}%',
                        color:'black',
                        position:'inside',
                        textStyle:{
                          color: 'black',
                          // font:'blod'
                        }
                      }
                  },
                  // color: this.color,
                  labelLine: {
                    show: false,
                    normal: {show: false,
                      lineStyle: {
                        show: false,
                          // color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 5,
                      length2: 2
                    }
                  },
                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                    return Math.random() * 200;
                  }
              }
          ]
      }
  }

  getGraph2() {
    var yMax = 100
    var dataShadow = []
    for (var i = 0; i < this.graph1data2.length; i++) {
      dataShadow.push(yMax)
    }
    this.option2 = {
      color:[this.colors[2]],
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
          data: this.graph2data1,
          silent: false,
          axisLabel: {rotate: 20, interval: 0}
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
          name: this.graph2name,
          data: this.graph2data2,
          type: 'bar',
          barWidth: '30%',
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}%',
              color:'black'
            }
          }
      }]
    }
  }

}
