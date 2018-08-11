import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';
import { NgxEchartsService } from 'ngx-echarts';
declare var $: any

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
      console.log(res)
      this.treeData = res.tree;
      this.getTree();
    })
  }

  ngOnInit() {
    this.projectService.getMap();
    this.projectService.getTree();
  }
  /*render(){
    setTimeout(function() {
      this.getMap()
      this.getTree()
    },500)
  }*/
  getMap(){
    //console.log(this.map);
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

              min:0,
              max:7500,
              text:['High','Low'],
              realtime:false,
              calculable:true,
              inRange:{
                color:['lightskyblue','yellow','orangered']
              }
            },
            series: [
              {
                name: '香港18区人口密度',
                type: 'map',
                mapType: 'USA', // map type should be registered
                zoom: 1.3,
                roam: true,
                itemStyle: {
                  normal: { label: { show: false } },
                  emphasis: {
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                data: [
                  { name: 'Agra', value: 100, extra: 1000 },
                  { name: 'Aligarh', value: 200, extra: 1080 },
                  { name: 'Allahabad', value: 300, extra: 100 },
                  { name: 'Ambedkar Nagar', value: 400, extra: 1900 },
                  { name: 'Auraiya', value: 500, extra: 10000 },
                  { name: 'Azamgarh', value: 600, extra: 500 },
                  { name: 'Budaun', value: 700, extra: 700 },
                  { name: 'Baghpat', value: 800, extra: 600 },
                  { name: 'Bahraich', value: 900, extra: 750 },
                  { name: 'Ballia', value: 1000, extra: 150 },
                  { name: 'Balrampur', value: 1100, extra: 250 },
                  { name: 'Banda', value: 1200, extra: 200 },
                  { name: 'Bara Banki', value: 1300, extra: 3500 },
                  { name: 'Bareilly', value: 1400, extra: 1000 },
                  { name: 'Basti', value: 1500, extra: 1000 },
                  { name: 'Bijnor', value: 1600, extra: 1000 },
                  { name: 'Bulandshahr', value: 1700, extra: 1000 },
                  { name: 'Chandauli', value: 1800, extra: 1000 },
                  { name: 'Chitrakoot', value: 1900, extra: 1000 },
                  { name: 'Deoria', value: 2000, extra: 1000 },
                  { name: 'Etah', value: 2100, extra: 1000 },
                  { name: 'Etawah', value: 2200, extra: 1000 },
                  { name: 'Faizabad', value: 2300, extra: 1000 },
                  { name: 'Farrukhabad', value: 2400, extra: 1000 },
                  { name: 'Fatehpur', value: 2500, extra: 1000 },
                  { name: 'Firozabad', value: 2600, extra: 1000 },
                  { name: 'GB Nagar', value: 2700, extra: 1000 },
                  { name: 'Hapur', value: 2800, extra: 1000 },
                  { name: 'Ghazipur', value: 2900, extra: 1000 },
                  { name: 'Gonda', value: 3000, extra: 1000 },
                  { name: 'Gorakhpur', value: 3100, extra: 1000 },
                  { name: 'Hamirpur', value: 3200, extra: 1000 },
                  { name: 'Hardoi', value: 3300, extra: 1000 },
                  { name: 'Hathras', value: 3400, extra: 1000 },
                  { name: 'Jalaun', value: 3500, extra: 1000 },
                  { name: 'Jaunpur', value: 3600, extra: 1000 },
                  { name: 'Jhansi', value: 3700, extra: 1000 },
                  { name: 'Amroha', value: 3800, extra: 1000 },
                  { name: 'Kannauj', value: 3900, extra: 1000 },
                  { name: 'Kanpur Nagar', value: 4000, extra: 1000 },
                  { name: 'Kanpur Dehat', value: 4100, extra: 1000 },
                  { name: 'Kaushambi', value: 4200, extra: 1000 },
                  { name: 'Kushinagar', value: 4300, extra: 1000 },
                  { name: 'Kheri', value: 4400, extra: 1000 },
                  { name: 'Lalitpur', value: 4500, extra: 1000 },
                  { name: 'Lucknow', value: 4600, extra: 1000 },
                  { name: 'Maharajganj', value: 4700, extra: 1000 },
                  { name: 'Mahoba', value: 4800, extra: 1000 },
                  { name: 'Mainpuri', value: 4900, extra: 1000 },
                  { name: 'Mau', value: 5000, extra: 1000 },
                  { name: 'Meerut', value: 5100, extra: 1000 },
                  { name: 'Mirzapur', value: 5200, extra: 1000 },
                  { name: 'Moradabad', value: 5300, extra: 1000 },
                  { name: 'Muzaffarnagar', value: 5400, extra: 1000 },
                  { name: 'Pilibhit', value: 5500, extra: 7500 },
                  { name: 'Pratapgarh', value: 5600, extra: 1800 },
                  { name: 'Rae Bareli', value: 5700, extra: 10400 },
                  { name: 'Rampur', value: 5800, extra: 10010 },
                  { name: 'Saharanpur', value: 5900, extra: 1000 },
                  { name: 'St Kabir Nagar', value: 6000, extra: 1000 },
                  { name: 'St Ravidas Nagar (Bhadohi)', value: 6100, extra: 1000 },
                  { name: 'Shahjahanpur', value: 6200, extra: 1000 },
                  { name: 'Shravasti', value: 6300, extra: 1000 },
                  { name: 'Siddharthnagar', value: 6400, extra: 1000 },
                  { name: 'Sitapur', value: 6500, extra: 10 },
                  { name: 'Sonbhadra', value: 6600, extra: 500 },
                  { name: 'Sultanpur', value: 6700, extra: 9 },
                  { name: 'Unnao', value: 6800, extra: 1000 },
                  { name: 'Varanasi', value: 6900, extra: 1000 },
                  { name: 'Ghaziabad', value: 7000, extra: 1000 },
                  { name: 'Shamli', value: 7100, extra: 1000 },
                  { name: 'Sambhal', value: 7200, extra: 1000 },
                  { name: 'Amethi', value: 7300, extra: 1000 },
                  { name: 'Kasganj', value: 7400, extra: 1000 },
                  { name: 'Mathura', value: 7500, extra: 1000 }
                ],
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
                  'GB Nagar': 'GB Nagar',
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
                  'St Kabir Nagar': 'St Kabir Nagar',
                  'St Ravidas Nagar (Bhadohi)': 'St Ravidas Nagar (Bhadohi)',
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
