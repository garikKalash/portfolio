import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login-component/login.component';
import {CvComponent} from "./components/cv/cv.component";
import {ProjectDemoComponent} from "./components/project-demo/project-demo.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/cv'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'demos',
    component: ProjectDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
