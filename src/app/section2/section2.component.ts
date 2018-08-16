import { Component, OnInit } from '@angular/core'
import { ProjectService } from '../services/ProjectService'

@Component({
  selector:'app-section2',
  templateUrl:'./section2.component.html',
  styleUrls:['./section2.component.scss']
})

export class Section2Component implements OnInit {
  option1:any
  option2:any
  option3:any
  dataSet1:any = []
  dataSet2:any = []
  graph1name:any
  graph2name:any
  graph1data1:any = []
  graph1data2:any = []
  graph2data1:any = []
  graph2data2:any = []
  graph3name:any
  graph3data1:any = []
  graph3data2:any = []
  graph4name:any
  graph4data1:any = []
  graph4data2:any = []
  option1_data1:any
  option1_legends:any

  constructor( private projectService: ProjectService) {
    this.projectService.emitSection2Graph1.subscribe(res=>{
      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.getGraph1()
    });

    this.projectService.emitSection2Graph2.subscribe(res=>{
      this.graph2data1 = res.legends;
      this.graph2data2 = res.data;
      this.graph2name = res.name;
      this.getGraph2()
    });

    this.projectService.emitSection2Graph3.subscribe(res=>{
      this.graph3data1 = res.legends;
      this.graph3data2 = res.data;
      this.graph3name = res.name;
      this.getGraph3()
    });
  }
  ngOnInit() {
    // this.projectService.getSection2Graph1()
    // this.projectService.getSection2Graph2()
    // this.projectService.getSection2Graph3()
    this.getGraph2()
  }
  getGraph1() {
    let itemStyle = {
      normal:{
        opacity:0.7,
        color:{
          // repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
      }
    };
    this.option1 = {
      color:['lightskyblue','yellow','orangered'],
      title:{
        text: this.graph1name,
        // subtext: 'test2',
      },
      itemStyle:{
        borderWidth: 10,
        borderColor: '#FFF'
      },
      tooltip :{
        trigger: 'item',
        formatter: "{a} <br/>{b} :{c} ({d}%)"
      },
      visualMap:{
        show: false,
        min: -220,
        max: 3000,
        inRange:{
            // colorLightness: [0, 1]
        }
      },
      legend:{
        orient: 'vertical',
        x: 'right',
        // data:this.option1_legends
        data : this.graph1data1
      },
          series : [
              {
                title:{
                    // text: 'Customized Pie',
                    left: 'center',
                    top: 10,
                    textStyle:{
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
                        show: false,
                          textStyle:{
                            color: 'black'
                          }
                      }
                  },
                  // color: this.color,
                  labelLine:{
                    show: false,
                    normal:{
                      show: false,
                      lineStyle:{
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
      };
  }

  getGraph2() {
        this.option2 = {

        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            // feature: {
            //     restore: {},
            //     saveAsImage: {}
            // }
        },
        title:{
          text: this.graph2name,
          // subtext: 'test2',
        },
        series: [
            {
                name: 'Some name',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: this.graph2data2, name: this.graph2data1}],
            }
        ]
    };
  }

  // getGraph2() {
  //   this.option2={
  //     color:['orangered'],
  //     tooltip:{
  //     },
  //     legend:{
  //       data:['No. of village covered'],
  //       selectedMode:'single'
  //     },
  //     xAxis:{
  //       data:['a'],
  //       axisTick:{show:false},
  //       axisLine:{show:false},
  //       axisLabel:{show:false}
  //     },
  //     yAxis:{
  //       max:200,
  //       offset:20,
  //       splitLine:{show:false},
  //       axisTick:{show:false},
  //       axisLine:{show:false},
  //       axisLabel:{show:false}
  //     },
  //     grid:{
  //       top:'center',
  //       height:260
  //     },
  //     series:[{
  //       name:'No. of village covered',
  //       type:'pictorialBar',
  //       symbolClip:true,
  //       symbolBoundingData:200,
  //       animationDuration:3000,
  //       label:{
  //         normal:{
  //           show:true,
  //           position:'outside',
  //           offset:[0, -20],
  //           formatter:function (param){
  //             return (param.value / 200 * 100).toFixed(0) + '%'
  //           },
  //           textStyle:{
  //             fontSize:18,
  //             fontFamily:'Arial'
  //           }
  //         }
  //       },
  //       data:[{
  //         value:153,
  //         symbol:"path://M109.6,240.4c-4,3.7-7.3,6.6-10.6,9.6c-7.6,6.9-17.1,6.8-23.3,0c-5.3-5.8-5.7-16.7,2.1-23.7c38.1-33.9,76-68,114-102.1 c19.3-17.3,38.6-34.6,57.9-51.9c3.5-3.1,4.7-3.1,8.2,0.1c26.4,24.3,52.8,48.6,79.3,72.8c0.5,0.5,1,1.1,1.6,1.4 c0.8,0.4,1.9,0.9,2.5,0.6c0.6-0.3,1.1-1.5,1.1-2.3c0.1-4.2,0.1-8.4,0.1-12.6c0-12.4-0.1-24.7,0.1-37.1c0-3.1-0.6-4.9-4.1-4.4 c-2.9,0.4-4.1-1-4-4c0.2-4.4,0.1-8.9,0-13.3c-0.1-2.5,0.9-3.4,3.4-3.4c22.3,0.1,44.7,0.1,67,0c2.5,0,3.5,1,3.4,3.4 c0,4.7-0.1,9.4,0,14c0,2.6-0.9,3.9-3.6,3.6c-3.6-0.4-4.7,1.2-4.7,4.8c0.1,34.6,0,69.1,0.2,103.7c0,2,1.1,4.5,2.5,5.9 c7,6.9,14.1,13.7,21.5,20.2c5.7,5,6.7,11.2,5.1,18c-2.6,10.6-15.5,14.7-24.1,7.7c-4.3-3.6-8.3-7.5-13-11.7c-0.1,1.8-0.2,2.9-0.2,4 c0,58.8,0,117.6,0,176.4c0,7.2-2,9.2-9.2,9.2c-26.9,0-53.8,0-80.7,0c-5.3,0-6.2-0.9-6.2-6.3c0-38.3,0-76.6,0-114.9 c0-23.6-14.9-41.7-37.8-46.3c-24-4.7-49.4,13.4-52.5,37.7c-0.5,3.9-0.7,7.9-0.7,11.8c-0.1,37.2,0,74.4,0,111.6 c0,5.2-0.4,5.6-5.4,5.6c-27.1,0-54.3,0-81.4,0c-6.3,0-8.5-2.2-8.5-8.4c0-46.9,0-93.9,0-140.8C109.6,266.9,109.6,254.2,109.6,240.4z', 'path://M109.6,240.4c-4,3.7-7.3,6.6-10.6,9.6c-7.6,6.9-17.1,6.8-23.3,0c-5.3-5.8-5.7-16.7,2.1-23.7c38.1-33.9,76-68,114-102.1 c19.3-17.3,38.6-34.6,57.9-51.9c3.5-3.1,4.7-3.1,8.2,0.1c26.4,24.3,52.8,48.6,79.3,72.8c0.5,0.5,1,1.1,1.6,1.4 c0.8,0.4,1.9,0.9,2.5,0.6c0.6-0.3,1.1-1.5,1.1-2.3c0.1-4.2,0.1-8.4,0.1-12.6c0-12.4-0.1-24.7,0.1-37.1c0-3.1-0.6-4.9-4.1-4.4 c-2.9,0.4-4.1-1-4-4c0.2-4.4,0.1-8.9,0-13.3c-0.1-2.5,0.9-3.4,3.4-3.4c22.3,0.1,44.7,0.1,67,0c2.5,0,3.5,1,3.4,3.4 c0,4.7-0.1,9.4,0,14c0,2.6-0.9,3.9-3.6,3.6c-3.6-0.4-4.7,1.2-4.7,4.8c0.1,34.6,0,69.1,0.2,103.7c0,2,1.1,4.5,2.5,5.9 c7,6.9,14.1,13.7,21.5,20.2c5.7,5,6.7,11.2,5.1,18c-2.6,10.6-15.5,14.7-24.1,7.7c-4.3-3.6-8.3-7.5-13-11.7c-0.1,1.8-0.2,2.9-0.2,4 c0,58.8,0,117.6,0,176.4c0,7.2-2,9.2-9.2,9.2c-26.9,0-53.8,0-80.7,0c-5.3,0-6.2-0.9-6.2-6.3c0-38.3,0-76.6,0-114.9 c0-23.6-14.9-41.7-37.8-46.3c-24-4.7-49.4,13.4-52.5,37.7c-0.5,3.9-0.7,7.9-0.7,11.8c-0.1,37.2,0,74.4,0,111.6 c0,5.2-0.4,5.6-5.4,5.6c-27.1,0-54.3,0-81.4,0c-6.3,0-8.5-2.2-8.5-8.4c0-46.9,0-93.9,0-140.8C109.6,266.9,109.6,254.2,109.6,240.4z"
  //       }],
  //       z:10
  //     }, {
  //       name:'typeB',
  //       type:'pictorialBar',
  //       symbolBoundingData:200,
  //       animationDuration:0,
  //       itemStyle:{
  //         normal:{
  //           color:'#ccc'
  //         }
  //       },
  //       data:[{
  //         value:1,
  //         symbol:"path://M109.6,240.4c-4,3.7-7.3,6.6-10.6,9.6c-7.6,6.9-17.1,6.8-23.3,0c-5.3-5.8-5.7-16.7,2.1-23.7c38.1-33.9,76-68,114-102.1 c19.3-17.3,38.6-34.6,57.9-51.9c3.5-3.1,4.7-3.1,8.2,0.1c26.4,24.3,52.8,48.6,79.3,72.8c0.5,0.5,1,1.1,1.6,1.4 c0.8,0.4,1.9,0.9,2.5,0.6c0.6-0.3,1.1-1.5,1.1-2.3c0.1-4.2,0.1-8.4,0.1-12.6c0-12.4-0.1-24.7,0.1-37.1c0-3.1-0.6-4.9-4.1-4.4 c-2.9,0.4-4.1-1-4-4c0.2-4.4,0.1-8.9,0-13.3c-0.1-2.5,0.9-3.4,3.4-3.4c22.3,0.1,44.7,0.1,67,0c2.5,0,3.5,1,3.4,3.4 c0,4.7-0.1,9.4,0,14c0,2.6-0.9,3.9-3.6,3.6c-3.6-0.4-4.7,1.2-4.7,4.8c0.1,34.6,0,69.1,0.2,103.7c0,2,1.1,4.5,2.5,5.9 c7,6.9,14.1,13.7,21.5,20.2c5.7,5,6.7,11.2,5.1,18c-2.6,10.6-15.5,14.7-24.1,7.7c-4.3-3.6-8.3-7.5-13-11.7c-0.1,1.8-0.2,2.9-0.2,4 c0,58.8,0,117.6,0,176.4c0,7.2-2,9.2-9.2,9.2c-26.9,0-53.8,0-80.7,0c-5.3,0-6.2-0.9-6.2-6.3c0-38.3,0-76.6,0-114.9 c0-23.6-14.9-41.7-37.8-46.3c-24-4.7-49.4,13.4-52.5,37.7c-0.5,3.9-0.7,7.9-0.7,11.8c-0.1,37.2,0,74.4,0,111.6 c0,5.2-0.4,5.6-5.4,5.6c-27.1,0-54.3,0-81.4,0c-6.3,0-8.5-2.2-8.5-8.4c0-46.9,0-93.9,0-140.8C109.6,266.9,109.6,254.2,109.6,240.4z', 'path://M109.6,240.4c-4,3.7-7.3,6.6-10.6,9.6c-7.6,6.9-17.1,6.8-23.3,0c-5.3-5.8-5.7-16.7,2.1-23.7c38.1-33.9,76-68,114-102.1 c19.3-17.3,38.6-34.6,57.9-51.9c3.5-3.1,4.7-3.1,8.2,0.1c26.4,24.3,52.8,48.6,79.3,72.8c0.5,0.5,1,1.1,1.6,1.4 c0.8,0.4,1.9,0.9,2.5,0.6c0.6-0.3,1.1-1.5,1.1-2.3c0.1-4.2,0.1-8.4,0.1-12.6c0-12.4-0.1-24.7,0.1-37.1c0-3.1-0.6-4.9-4.1-4.4 c-2.9,0.4-4.1-1-4-4c0.2-4.4,0.1-8.9,0-13.3c-0.1-2.5,0.9-3.4,3.4-3.4c22.3,0.1,44.7,0.1,67,0c2.5,0,3.5,1,3.4,3.4 c0,4.7-0.1,9.4,0,14c0,2.6-0.9,3.9-3.6,3.6c-3.6-0.4-4.7,1.2-4.7,4.8c0.1,34.6,0,69.1,0.2,103.7c0,2,1.1,4.5,2.5,5.9 c7,6.9,14.1,13.7,21.5,20.2c5.7,5,6.7,11.2,5.1,18c-2.6,10.6-15.5,14.7-24.1,7.7c-4.3-3.6-8.3-7.5-13-11.7c-0.1,1.8-0.2,2.9-0.2,4 c0,58.8,0,117.6,0,176.4c0,7.2-2,9.2-9.2,9.2c-26.9,0-53.8,0-80.7,0c-5.3,0-6.2-0.9-6.2-6.3c0-38.3,0-76.6,0-114.9 c0-23.6-14.9-41.7-37.8-46.3c-24-4.7-49.4,13.4-52.5,37.7c-0.5,3.9-0.7,7.9-0.7,11.8c-0.1,37.2,0,74.4,0,111.6 c0,5.2-0.4,5.6-5.4,5.6c-27.1,0-54.3,0-81.4,0c-6.3,0-8.5-2.2-8.5-8.4c0-46.9,0-93.9,0-140.8C109.6,266.9,109.6,254.2,109.6,240.4z"
  //       }]
  //     }]
  //   }
  // }

  getGraph3() {

    let itemStyle = {
      normal:{
        opacity:0.7,
        color:{
          // repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
      }
    };
    this.option3 = {
      color:['yellow','orangered'],
      title:{
        text: this.graph3name,
        // subtext: 'test2',
      },
      itemStyle:{
        borderWidth: 10,
        borderColor: '#FFF'
      },
        tooltip :{
            trigger: 'item',
            formatter: "{a} <br/>{b} :{c} ({d}%)"
        },

        visualMap:{
            show: false,
            min: -220,
            max: 3000,
            inRange:{
                // colorLightness: [0, 1]
            }
        },
        legend:{
          orient: 'vertical',
          x: 'right',
          // data:this.option1_legends
          data : this.graph3data1
        },

        series : [
              {
                title:{
                    // text: 'Customized Pie',
                    left: 'center',
                    top: 10,
                    textStyle:{
                        color: 'white'
                    }
                },
                  name:this.graph3name,
                  type:'pie',
                  radius : ['50%','75%'],
                  center: ['50%', '50%'],
                  // data:this.option1_data1,
                  data : this.graph3data2,
                  // roseType: 'radius',
                  label:{
                    show: false,
                      normal:{
                        show: false,
                          textStyle:{
                              color: 'black'
                          }
                      }
                  },
                  // color: this.color,
                  labelLine:{
                    show: false,
                      normal:{show: false,
                          lineStyle:{
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
      };
  }
}
