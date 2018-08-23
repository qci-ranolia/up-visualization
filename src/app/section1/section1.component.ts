import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '../services/ProjectService'
import { NgxEchartsService } from 'ngx-echarts'
declare var $: any

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})

export class Section1Component implements OnInit, OnDestroy {
  map : any = [];
  mapLoaded = false;
  option1: any;
  option2: any;
  treeData: any;
  mapData: any;
  colors:any;
  cName: any;
  mapColor : any;
  getColors : any

  constructor(private projectService: ProjectService,
    private es: NgxEchartsService) {

    this.projectService.emitMap.subscribe(res=>{
      // console.log(res);
      this.map = res.map.map;
      this.mapData = res.data.data;
      this.getMap();
    });

    this.projectService.emitTree.subscribe(res=>{
      // console.log(res);
      this.treeData = res.tree;
      this.getTree();
      this.cName = res.tree.name;
    });

    this.getColors = this.projectService.emitColors.subscribe(res=>{
      console.log(res)
      this.colors = res
    });
    this.getColors = this.projectService.emitMapColor.subscribe(res=>{
      console.log(res)
      this.mapColor = res
    })
  }
    ngOnInit() {
      this.projectService.getMasterData();
      this.projectService.getMap();
      this.projectService.getColors();
    }

    getMap(){
      //console.log(this.map);
        // fetch map geo JSON data from server
        // this.http.get('assets/data/HK.json')
        //   .subscribe(geoJson => {
            // hide loading:
            this.mapLoaded = true
            // register map:
            this.es.registerMap('USA', this.map)
            // update options:
            this.option1 = {
              title: {
                text: 'Map of UP',
                subtext: 'State Overview',
                sublink: 'https://updashboardv1.firebaseapp.com/#/'
              },
              tooltip: {
                trigger: 'item',
                // formatter: '{b}<br/>{c} some data'
                formatter : function (obj) {
                  // console.log(obj)
                  var value = obj.value;
                  return  "District" + '：' + obj.data.name + '<br>'
                      +"Total Villages" + '：' + obj.data.extra+ '<br>'
                      +"Villages Covered" + '：' + obj.data.extra+ '<br>'
                      +"Access" + '：' + obj.data.extra+ '<br>'
                      +"Usage" + '：' + obj.data.extra+ '<br>'
                      +"Over Reporting" + '：' + obj.data.extra+ '<br>'
                      +"Qlty. under con. Toilet" + '：' + obj.data.extra+ '<br>'
                }
              },
              toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                  // dataView: { readOnly: false },
                  // restore: {},
                  // saveAsImage: {}
                }
              },
              visualMap: {
                min:0,
                max:100,
                text:['Complete %','Start %'],
                realtime:false,
                calculable:true,
                inRange:{
                  color:this.mapColor
                }
              },
              series: [
                {
                  name: '香港18区人口密度',
                  type: 'map',
                  mapType: 'USA', // map type should be registered
                  scaleLimit:{
                    min:1.2,
                    max:3,
                  },
                  roam: true,
                  itemStyle: {
                    normal: {
                      label: {
                        show: false
                      }
                    },
                    emphasis: {
                      areaColor:'#fff',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderColor:'#fff',
                      borderWidth:1,
                      shadowColor:'rgba(0, 0, 0, 0.3)'
                    }
                  },
                  data: this.mapData,
                  nameMap: {
                    'Agra': 'Agra',
                    'Aligarh': 'Aligarh',
                    'Allahabad': 'Allahabad',
                    'Ambedkar Nagar': 'Ambedkar Nagar',
                    'Auraiya': 'Auraiya',
                    'Azamgarh': 'Azamgarh',
                    'Budaun': 'Budaun',
                    'Baghpat': 'Baghpat',
                    'Bahraich': 'Bahraich',
                    'Ballia': 'Ballia',
                    'Balrampur': 'Balrampur',
                    'Banda': 'Banda',
                    'Bara Banki': 'Bara Banki',
                    'Bareilly': 'Bareilly',
                    'Basti': 'Basti',
                    'Bijnor': 'Bijnor',
                    'Bulandshahr': 'Bulandshahr',
                    'Chandauli': 'Chandauli',
                    'Chitrakoot': 'Chitrakoot',
                    'Deoria': 'Deoria',
                    'Etah': 'Etah',
                    'Etawah': 'Etawah',
                    'Faizabad': 'Faizabad',
                    'Farrukhabad': 'Farrukhabad',
                    'Fatehpur': 'Fatehpur',
                    'Firozabad': 'Firozabad',
                    'Gautam Buddha Nagar': 'Gautam Buddha Nagar',
                    'Hapur': 'Hapur',
                    'Ghazipur': 'Ghazipur',
                    'Gonda': 'Gonda',
                    'Gorakhpur': 'Gorakhpur',
                    'Hamirpur': 'Hamirpur',
                    'Hardoi': 'Hardoi',
                    'Hathras': 'Hathras',
                    'Jalaun': 'Jalaun',
                    'Jaunpur': 'Jaunpur',
                    'Jhansi': 'Jhansi',
                    'Amroha': 'Amroha',
                    'Kannauj': 'Kannauj',
                    'Kanpur Nagar': 'Kanpur Nagar',
                    'Kanpur Dehat': 'Kanpur Dehat',
                    'Kaushambi': 'Kaushambi',
                    'Kushinagar': 'Kushinagar',
                    'Kheri': 'Kheri',
                    'Lalitpur': 'Lalitpur',
                    'Lucknow': 'Lucknow',
                    'Maharajganj': 'Maharajganj',
                    'Mahoba': 'Mahoba',
                    'Mainpuri': 'Mainpuri',
                    'Mau': 'Mau',
                    'Meerut': 'Meerut',
                    'Mirzapur': 'Mirzapur',
                    'Moradabad': 'Moradabad',
                    'Muzaffarnagar': 'Muzaffarnagar',
                    'Pilibhit': 'Pilibhit',
                    'Pratapgarh': 'Pratapgarh',
                    'Rae Bareli': 'Rae Bareli',
                    'Rampur': 'Rampur',
                    'Saharanpur': 'Saharanpur',
                    'Sant Kabir Nagar': 'Sant Kabir Nagar',
                    'Sant Ravidas Nagar (Bhadohi)': 'Sant Ravidas Nagar (Bhadohi)',
                    'Shahjahanpur': 'Shahjahanpur',
                    'Shravasti': 'Shravasti',
                    'Siddharthnagar': 'Siddharthnagar',
                    'Sitapur': 'Sitapur',
                    'Sonbhadra': 'Sonbhadra',
                    'Sultanpur': 'Sultanpur',
                    'Unnao': 'Unnao',
                    'Varanasi': 'Varanasi',
                    'Ghaziabad': 'Ghaziabad',
                    'Shamli': 'Shamli',
                    'Sambhal': 'Sambhal',
                    'Amethi': 'Amethi',
                    'Kasganj': 'Kasganj',
                    'Mathura': 'Mathura'
                  }
                }
              ]
            }
          // });
      }

    getTree() {
      const xAxisData = []
      this.option2 = {
        /* color:['black'], */
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
            symbolSize: 10,
            label: {
              normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 13
              }
            },
            itemStyle:{
              color:'#ffa02c',
              borderColor:'#ffa02c'
            },
            lineStyle:{
              color:'#ffa02c',
              curveness:0.6
            },/*
            tooltip:{
              backgroundColor:'rgba(0,0,0,0.7)',
              borderColor:'#000'
            }, */
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
      }
    }

    onMapEvent(event: any, type: string) {
      this.projectService.getIdFromMap(event.data.id);
    }

    onTreeEvent(event: any, type: string) {

      this.cName = event.data.name;
      // console.log(this.cName);
      this.projectService.getDatafromMaster(event.data.id);

  }

  ngOnDestroy() {
    this.getColors.unsubscribe()
  }
}
