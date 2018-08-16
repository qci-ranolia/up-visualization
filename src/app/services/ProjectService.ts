import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  emitId = new EventEmitter<any>();
  emitMap = new EventEmitter<any>();
  emitTree = new EventEmitter<any>();
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
  masterData : any = [];
  id = 0;

  constructor(private APIService: APIService) {}

  getMasterData() {
    this.APIService.GetMasterData().subscribe(res => {
      console.log(res);
      if (res) {
        this.masterData = res.data;
        this.getDatafromMaster(this.id);
      } else {
        alert('Error 0');
      }
    }, err => {
      alert('Error 1');
    });
  }

  getIdFromMap(id) {
    this.id = id;
    console.log(id);
    if(id<=76) {
      this.getDatafromMaster(id);
    } else {
      this.getDatafromServer(id);
    }
  }

  getDatafromMaster(id) {

    let temp = this.masterData[id];
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
    this.emitSection6Graph1.emit(temp.Graph12);
    this.emitSection6Graph2.emit(temp.Graph13);
    this.emitSection6Graph3.emit(temp.Graph14);

  }

  getMap() {
    this.APIService.GetMap().subscribe(res => {
      // console.log(res);
      if (res) {
        this.emitMap.emit({ map: res });
      } else {
        alert('Error 10');
      }
    }, err => {
      alert('Error 11');
    });
  }

  getTree() {
    this.APIService.GetTree().subscribe(res => {

      if (res) {
        this.emitTree.emit({ tree: res });
      } else {
        alert('Error 20');
      }
    }, err => {
      alert('Error 21');
    });
  }

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
