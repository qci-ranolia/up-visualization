import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  emitMap = new EventEmitter<any>();
  emitTree = new EventEmitter<any>();
  emitSection2Graph1 = new EventEmitter<any>();
  emitSection2Graph2 = new EventEmitter<any>();
  emitSection2Graph3 = new EventEmitter<any>();
  emitSection3Graph1 = new EventEmitter<any>();
  emitSection3Graph2 = new EventEmitter<any>();
  emitSection3Graph3 = new EventEmitter<any>();
  emitSection4Graph1 = new EventEmitter<any>();
  emitSection5Graph1 = new EventEmitter<any>();
  emitSection5Graph2 = new EventEmitter<any>();

  constructor(private APIService: APIService) {}

  getMap() {
    this.APIService.GetMap().subscribe(res=>{
      // console.log(res);
      if(res){
        this.emitMap.emit({map:res});
      } else {
        alert('Error 10');
      }
    }, err=>{
      alert('Error 11');
    });
  }

  getTree() {
    this.APIService.GetTree().subscribe(res=>{

      if(res) {
        this.emitTree.emit({tree:res});
      } else {
        alert('Error 20');
      }
    }, err=>{
      alert('Error 21');
    });
  }

  getSection2Graph1() {
    this.APIService.GetGraph1().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection2Graph1.emit(res);

      } else {
        alert('Error 30');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection2Graph2() {
    this.APIService.GetGraph2().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection2Graph2.emit(res);

      } else {
        alert('Error 40');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection2Graph3() {
    this.APIService.GetGraph3().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection2Graph3.emit(res);

      } else {
        alert('Error 40');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection3Graph1() {
    this.APIService.GetGraph4().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection3Graph1.emit(res);

      } else {
        alert('Error 50');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection3Graph2() {
    this.APIService.GetGraph5().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection3Graph2.emit(res);

      } else {
        alert('Error 60');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection3Graph3() {
    this.APIService.GetGraph6().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection3Graph3.emit(res);

      } else {
        alert('Error 70');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection4Graph1() {
    this.APIService.GetGraph7().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection4Graph1.emit(res);

      } else {
        alert('Error 80');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection5Graph1() {
    this.APIService.GetGraph10().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection5Graph1.emit(res);

      } else {
        alert('Error 100');
      }
    }, err=>{
      console.log(err);
    });
  }

  getSection5Graph2() {
    this.APIService.GetGraph11().subscribe(res=>{
      console.log(res);
      if(res) {
        this.emitSection5Graph2.emit(res);

      } else {
        alert('Error 110');
      }
    }, err=>{
      console.log(err);
    });
  }

}
