import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ProjectService } from '../services/ProjectService';
// declare var $: any;
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navIsFixed: boolean

  options: any
  section6: any
  section7: any

  constructor( private projectService : ProjectService ){

    // this.projectService.emitDontShowSection6.subscribe(res=>{
    //   this.section6 = res.show;
    // });
    //
    // this.projectService.emitDontShowSection7.subscribe(res=>{
    //   this.section7 = res.show;
    // });

  }
  
  ngOnInit() {
    this.checkLogin()
  }

  
  checkLogin() {
    let temp = localStorage.getItem('token');
    if(temp === "true") {
      
    } else {
      this.projectService.logout();
    }
  }
  // upArrow(){
  //   $("html, body").animate({ scrollTop: 0 }, "slow")
  //   return false  
  // }

}
