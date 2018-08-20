import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/ProjectService'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : any;
  password: any;

  constructor(private projectService: ProjectService, private router: Router) {

    this.projectService.checkLogin();

    this.projectService.emitUserLogin.subscribe((res)=>{
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

  login() {

    let formData = new FormData();
    formData.append('email',this.email);
    formData.append('pwd',this.password);
    this.projectService.login(formData);

  }

}
