import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';
import { NgxEchartsService } from 'ngx-echarts';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  map : any = [];
  mapLoaded = false;
  option1: any;
  option2: any;
  treeData: any;

  constructor(private projectService: ProjectService,
    private es: NgxEchartsService) {

    this.projectService.emitMap.subscribe(res=>{
      this.map = res.map;
      this.getMap();
    });

    this.projectService.emitTree.subscribe(res=>{
      this.treeData = res.tree;
      this.getTree();
    });

  }

  ngOnInit() {
    this.projectService.getMap();
    this.projectService.getTree();
  }

  getMap() {
    console.log(this.map);
      // fetch map geo JSON data from server
      // this.http.get('assets/data/HK.json')
      //   .subscribe(geoJson => {
          // hide loading:
          this.mapLoaded = true;
          // register map:
          this.es.registerMap('USA', this.map);
          // update options:
          this.option1 = {
            title: {
              text: 'test1',
              subtext: 'test2',
              sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
            },
            tooltip: {
              trigger: 'item',
              // formatter: '{b}<br/>{c} some data'
              formatter : function (obj) {
                // console.log(obj)
                var value = obj.value;
                return  "Value" + '：' + obj.value + '<br>'
                    +"Extra" + '：' + obj.data.extra+ '<br>'
              }
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
              }
            },
            visualMap: {
              min: 800,
              max: 50000,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
              }
            },
            series: [
              {
                name: '香港18区人口密度',
                type: 'map',
                mapType: 'USA', // map type should be registered
                itemStyle: {
                  normal: { label: { show: true } },
                  emphasis: { label: { show: true } }
                },
                data: [
                  { name: '1', value: 20057.34, extra: 11 },
                  { name: '2', value: 15477.48, extra: 22 },
                  { name: '3', value: 31686.1, extra: 33 },
                  { name: '4', value: 6992.6 , extra: 44 },
                  { name: '5', value: 44045.49, extra: 55  },
                  { name: '6', value: 40689.64, extra: 66  },
                  { name: '7', value: 37659.78, extra: 77  },
                  { name: '8', value: 45180.97, extra: 88  },
                  { name: '9', value: 55204.26, extra: 99  },
                  { name: '10', value: 21900.9, extra: 100  },
                  { name: '11', value: 4918.26, extra: 101  },
                  { name: '12', value: 5881.84, extra: 102  },
                  { name: '13', value: 4178.01, extra: 103  },
                  { name: '14', value: 2227.92, extra: 104  },
                  { name: '15', value: 2180.98, extra: 105  },
                  { name: '16', value: 9172.94, extra: 106  },
                  { name: '17', value: 3368, extra: 107  },
                  { name: '18', value: 806.98, extra: 108  }
                ],
                nameMap: {
                  'Central and Western': '1',
                  'Eastern': '2',
                  'Islands': '3',
                  'Kowloon City': '4',
                  'Kwai Tsing': '5',
                  'Kwun Tong': '6',
                  'North': '7',
                  'Sai Kung': '8',
                  'Sha Tin': '9',
                  'Sham Shui Po': '10',
                  'Southern': '11',
                  'Tai Po': '12',
                  'Tsuen Wan': '13',
                  'Tuen Mun': '14',
                  'Wan Chai': '15',
                  'Wong Tai Sin': '16',
                  'Yau Tsim Mong': '17',
                  'Yuen Long': '18'
                }
              }
            ]
          };
        // });
    }

  getTree() {
    const xAxisData = [];
    this.option2 = {
      tooltip: {
        triggerOn: 'mousemove',
        trigger: 'item',
      },
      series: [
        {
          type: 'tree',

          data: [this.treeData],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9
            }
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };
  }

  onMapEvent(event: any, type: string) {
    // console.log('chart event:', type, event);
  }

  onchart1Event(event: any, type: string) {
    // console.log('chart event:', type, event);
  }


}
