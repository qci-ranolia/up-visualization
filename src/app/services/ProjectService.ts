import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {


  id = 0;
  masterData : any = [];
  emitId = new EventEmitter<any>();
  emitMap = new EventEmitter<any>();
  emitTree = new EventEmitter<any>();
  emitColors = new EventEmitter<any>()
  emitMapData = new EventEmitter<any>();
  emitUserLogin  = new EventEmitter<any>();
  emitSection2Graph1 = new EventEmitter<any>();
  emitSection2Graph2 = new EventEmitter<any>();
  emitSection2Graph3 = new EventEmitter<any>();
  emitSection3Graph1 = new EventEmitter<any>();
  emitSection3Graph2 = new EventEmitter<any>();
  emitSection3Graph3 = new EventEmitter<any>();
  emitSection4Graph1 = new EventEmitter<any>();
  emitSection4Graph2 = new EventEmitter<any>();
  emitSection5Graph1 = new EventEmitter<any>();
  emitSection5Graph2 = new EventEmitter<any>();
  emitSection6Graph1 = new EventEmitter<any>();
  emitSection6Graph2 = new EventEmitter<any>();
  emitSection6Graph3 = new EventEmitter<any>();
  emitFileSuccess = new EventEmitter<any>();
  emitMapColor = new EventEmitter<any>();
  emitBarColors = new EventEmitter<any>();
  emitSection7Graph1 = new EventEmitter<any>();
  emitDontShowSection6 = new EventEmitter<any>();
  emitDontShowSection7 = new EventEmitter<any>();

  constructor(private APIService: APIService, private router: Router) {}

  // getColors(){
  //   this.emitColors.emit(['lightskyblue','yellow','#169487']);
  // }

  logout(){
    this.router.navigate(['./login']);
  }

  checkLogin() {

  }

  login(email1, pwd1) {
    let email = email1;
    let pwd   = pwd1;

    console.log(email);
    console.log(pwd);

    if(email==="test@qcin.org" && pwd === "123") {
      localStorage.setItem('token','true');
      this.router.navigate(['./']);
    }

  }

  getColors(){
    // guage colors
    // '#BF3836','#63859B','#91C5AE'
    // this.emitColors.emit(['lightskyblue','#ffa52b','#169487']);
    // yellow[1]
    this.emitColors.emit(['#ef943e','#efd645','#7C90DB','#db5ca6']);
    // this.emitColors.emit(['#BF3836','#63859B','#91C5AE']);
    this.emitMapColor.emit(['#FFFAFF','#7C90DB']);
    // this.emitMapColor.emit(['#F3F3F1','#C2EAB6']);
    // this.emitMapColor.emit(['#FEBD34','#F1443C']);
    this.emitBarColors.emit(['#F2DC5D','#F2A359']);
  }


  getMasterData(){
    this.APIService.GetMasterData().subscribe(res =>{
      // console.log(res);
      if (res) {
        this.masterData = res.data;
        this.getDatafromMaster(this.id);
        this.getTree(this.id);
      } else {
        alert('Error 0')
      }
    }, err => {
      alert('Error 1')
    });
  }

  getIdFromMap(id){
    this.id = id;
    this.getDatafromMaster(id);
  }

  getDatafromMaster(id) {

    // let temp = this.masterData[id];                    // Get data from index of array

    // Get data from index of array as per ID

    let pos: any;
    for(let i =0; i<this.masterData.length; i++) {

      if(id === this.masterData[i].id) {
        pos = i;
        break;
      }
    }

    let temp = this.masterData[pos];                    // Get data from index of array as per ID

    this.emitSection2Graph1.emit(temp.Graph1);
    this.emitSection2Graph2.emit(temp.Graph2);
    this.emitSection2Graph3.emit(temp.Graph3);
    this.emitSection3Graph1.emit(temp.Graph4);
    this.emitSection3Graph2.emit(temp.Graph5);
    this.emitSection3Graph3.emit(temp.Graph6);
    this.emitSection4Graph1.emit(temp.Graph7);
    this.emitSection4Graph2.emit(temp.Graph8);
    this.emitSection5Graph1.emit(temp.Graph10);
    this.emitSection5Graph2.emit(temp.Graph11);

    if(temp.ODFVillages){
      if(temp.ODFVillages==1) {                         // Show this section
        this.emitDontShowSection6.emit({show:true});
        this.emitSection6Graph1.emit(temp.Graph12);
        this.emitSection6Graph2.emit(temp.Graph13);
        this.emitSection6Graph3.emit(temp.Graph14);
      } else {                                          // Dont Show the section
        this.emitDontShowSection6.emit({show:false});
      }
    } else {
      this.emitDontShowSection6.emit({show:false});
    }

    if(temp.Villages) {
      if(temp.Villages==1) {                            // Show section
        this.emitDontShowSection7.emit({show:true});
        this.emitSection7Graph1.emit(temp.Graph15);
      } else{
        this.emitDontShowSection7.emit({show:false});
      }
    } else {
      this.emitDontShowSection7.emit({show:false});
    }


  }

  getDatafromServer(id) {

  }

  getMap() {
    let temp1 : any;
    let temp2 : any;
    this.APIService.GetMap().subscribe(res => {
      // console.log(res);
      if (res) {
        temp1 = res;
        this.APIService.GetMapData().subscribe(res2 => {
          // console.log(res);
          if (res2) {
            temp2 = res2;
            this.emitMap.emit({map:temp1, data:temp2});
          } else {
            alert('Error 101');
          }
        }, err => {
          alert('Error 111');
        });
      } else {
        alert('Error 10');
      }
    }, err => {
      alert('Error 11');
    });
  }

  getMapData() {

  }

  getTree(id) {
    this.APIService.GetTree().subscribe(res => {

      let temp: any;
      let pos = 0;

      if (res) {

        temp = res.data;

        for(let i = 0; i<temp.length; i++) {

          if(temp[i].id==id) {
            console.log(id);
            pos = id;
            break;
          }

        }

        this.emitTree.emit({ tree: temp[pos].treeData });
      } else {
        alert('Error 20')
      }
    }, err => {
      alert('Error 21');
    });
  }

  updateFile(data, area) {

    if(area==='village') {

      this.APIService.UpdateFileVillage(data).subscribe((res)=>{
        console.log(res);
        if(res){
          alert('Village data updated!');
          this.emitFileSuccess.emit({msg:res, area: area});
        } else {}
      }, (err)=>{
        alert(err);
        console.log(err);
      });

    } else if( area === 'block') {

      this.APIService.UpdateFileBlock(data).subscribe((res)=>{
        console.log(res);
        if(res){
          alert('Block data updated!');
          this.emitFileSuccess.emit({msg:res, area: area});
        } else {}
      }, (err)=>{
        alert(err);
        console.log(err);
      });

    } else if( area === 'district' ) {

      this.APIService.UpdateFileDistrict(data).subscribe((res)=>{
        console.log(res);
        if(res){
          alert('District data updated!');
          this.emitFileSuccess.emit({msg:res, area: area});
        } else {}
      }, (err)=>{
        alert(err);
        console.log(err);
      });

    } else {

      this.APIService.UpdateFileState(data).subscribe((res)=>{
        console.log(res);
        if(res){
          // alert('State data updated!');
          this.APIService.AfterFileUploadUrl().subscribe(r=>console.log(r));
          this.emitFileSuccess.emit({msg:res, area: area});
        } else {}
      }, (err)=>{
        alert(err);
        console.log(err);
      });

    }

  }
  // 
  // afterFileUpload(data) {
  //   this.APIService.AfterFileUploadUrl(data).subscribe((res)=>{
  //     console.log(res);
  //     if(res){
  //
  //     } else {}
  //   }, (err)=>{
  //     console.log(err);
  //     alert(err);
  //   })
  // }

  getSection2Graph1() {
    this.APIService.GetGraph1().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection2Graph1.emit(res);

      } else {
        alert('Error 30');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection2Graph2() {
    this.APIService.GetGraph2().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection2Graph2.emit(res);

      } else {
        alert('Error 40');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection2Graph3() {
    this.APIService.GetGraph3().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection2Graph3.emit(res);

      } else {
        alert('Error 40');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection3Graph1() {
    this.APIService.GetGraph4().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection3Graph1.emit(res);

      } else {
        alert('Error 50');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection3Graph2() {
    this.APIService.GetGraph5().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection3Graph2.emit(res);

      } else {
        alert('Error 60');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection3Graph3() {
    this.APIService.GetGraph6().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection3Graph3.emit(res);

      } else {
        alert('Error 70');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection4Graph1() {
    this.APIService.GetGraph7().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection4Graph1.emit(res);

      } else {
        alert('Error 80');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection4Graph2() {
    this.APIService.GetGraph8().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection4Graph2.emit(res);

      } else {
        alert('Error 80');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection5Graph1() {
    this.APIService.GetGraph10().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection5Graph1.emit(res);

      } else {
        alert('Error 100');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection5Graph2() {
    this.APIService.GetGraph11().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection5Graph2.emit(res);

      } else {
        alert('Error 110');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection6Graph1() {
    this.APIService.GetGraph12().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection6Graph1.emit(res);

      } else {
        alert('Error 120');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection6Graph2() {
    this.APIService.GetGraph13().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection6Graph2.emit(res);

      } else {
        alert('Error 130');
      }
    }, err => {
      console.log(err);
    });
  }

  getSection6Graph3() {
    this.APIService.GetGraph14().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitSection6Graph3.emit(res);

      } else {
        alert('Error 140');
      }
    }, err => {
      console.log(err);
    });
  }

}
