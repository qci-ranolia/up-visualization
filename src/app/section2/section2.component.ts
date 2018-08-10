import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  option1: any;
  option2: any;
  option3: any;
  dataSet1: any = [];
  dataSet2: any = [];
  graph1name: any;
  graph1data1 : any = [];
  graph1data2 : any = [];
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

  constructor( private projectService: ProjectService) {

    this.projectService.emitSection2Graph1.subscribe(res=>{
      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.getGraph1();
    });

    this.projectService.emitSection2Graph3.subscribe(res=>{
      this.graph3data1 = res.legends;
      this.graph3data2 = res.data;
      this.graph3name = res.name;
      this.getGraph3();
    });
  }

  ngOnInit() {
    this.projectService.getSection2Graph1();
    this.projectService.getSection2Graph2();
    this.projectService.getSection2Graph3();
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
      // color: this.color,
      title: {
        text: this.graph1name,
        // subtext: 'test2',
      },
      itemStyle: {
        borderWidth: 10,
        borderColor: '#FFF'
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
            orient: 'vertical',
            x: 'right',
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
                  label: {
                    show: false,
                      normal: {
                        show: false,
                          textStyle: {
                              color: 'black'
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
      };
  }

  getGraph2() {
    this.option2 = {

    }
  }

  getGraph3() {
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
    this.option3 = {
      // color: this.color,
      title: {
        text: this.graph3name,
        // subtext: 'test2',
      },
      itemStyle: {
        borderWidth: 10,
        borderColor: '#FFF'
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
            orient: 'vertical',
            x: 'right',
            // data:this.option1_legends
            data : this.graph3data1
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
                  name:this.graph3name,
                  type:'pie',
                  radius : ['50%','75%'],
                  center: ['50%', '50%'],
                  // data:this.option1_data1,
                  data : this.graph3data2,
                  // roseType: 'radius',
                  label: {
                    show: false,
                      normal: {
                        show: false,
                          textStyle: {
                              color: 'black'
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
      };
  }

}
