import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss']
})
export class Section7Component implements OnInit {

  headers: any=[];
  rowData: any=[];
  show: any;

  constructor(private projectService: ProjectService) {

    this.projectService.emitDontShowSection7.subscribe(res=>{
      this.show = false;
    });

    this.projectService.emitSection7Graph1.subscribe(res => {
      this.show = true;
      this.headers = res.headers;
      this.rowData = res.rowData;

    });
  }

  ngOnInit() {
  }

}
