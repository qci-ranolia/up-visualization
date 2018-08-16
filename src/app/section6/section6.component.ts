import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  option1: any;
  option2: any;
  option3: any;
  dataSet1: any = [];
  dataSet2: any = [];
  heading1: any;
  count1: any;
  heading2: any;
  count2: any;
  data21: any;
  data22: any;
  data23: any;
  count21: any;
  count22: any;
  count23: any;
  heading3: any;
  count3: any;
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

  constructor(private projectService: ProjectService) {


    this.projectService.emitSection6Graph1.subscribe(res => {

      this.graph1data1 = res.legends;
      this.graph1data2 = res.data;
      this.graph1name = res.name;
      this.heading1 = res.heading;
      this.count1 = res.count;
      this.getGraph1();
    });

    this.projectService.emitSection6Graph2.subscribe(res=>{
      this.data21= res.data1;
      this.count21= res.data1_count;
      this.data22= res.data2;
      this.count22= res.data2_count;
      this.data23= res.data3;
      this.count23= res.data3_count;
      // console.log(res);
    });

    this.projectService.emitSection6Graph3.subscribe(res => {
      this.graph3data1 = res.legends;
      this.graph3data2 = res.data;
      this.graph3name = res.name;
      this.getGraph3();
    });

  }

  ngOnInit() {
    // this.projectService.getSection6Graph1();
    // this.projectService.getSection6Graph2();
    // this.projectService.getSection6Graph3();
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
      color:['lightskyblue','yellow','orangered'],
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

  getGraph3() {
    let itemStyle = {
      normal: {
        opacity: 0.7,
        color: {
          // repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
      }
    };
    this.option3 = {
      color:['lightskyblue','yellow','orangered'],
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
