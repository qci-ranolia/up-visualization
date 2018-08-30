import { Routes } from '@angular/router';

// import { AuthGuard } from './service/ZAuthGuard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

export const routes: Routes = [

  { path: '', component:  HomeComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'upload', component: UploadComponent},
  { path: '**', redirectTo:'/login' }

];
