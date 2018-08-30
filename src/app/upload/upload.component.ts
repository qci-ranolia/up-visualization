import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  formData = new FormData();;
  files: any;
  area: any;
  msg: any;

  constructor(private projectService: ProjectService) {
    this.projectService.emitFileSuccess.subscribe(res=>{
      this.msg = res.msg;
      this.area = res.area;
    });

  }

  ngOnInit() {
  }

  updateFile($event,area) {

    console.log(area);

    if( area ==='village') {
      this.upload($event,area);
    }

    if(area === 'block') {
      if(this.area ==='village') {
        this.upload($event,area);
      } else {
        alert('Please update "village" file first');
      }
    }

    if(area === 'district') {
      if(this.area ==='block') {
        this.upload($event,area);
      } else {
        alert('Please update "block" file first');
      }
    }

    if(area === 'state') {
      if(this.area ==='district') {
        this.upload($event,area);
      } else {
        alert('Please update "district" file first');
      }
    }

  }

  upload($event,area) {
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];

    this.formData = new FormData();
    this.formData.append('user_file', file);
    this.formData.append('area', area);

    this.projectService.updateFile(this.formData, area);
  }



}
