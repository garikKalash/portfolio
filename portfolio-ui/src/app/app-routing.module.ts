import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login-component/login.component';
import {CvComponent} from './components/cv/cv.component';
import {ProjectDemoComponent} from './components/project-demo/project-demo.component';
import {DoneProjectsComponent} from './components/done-projects/done-projects.component';
import {LinksComponent} from './components/links/links.component';


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
  },
  {
    path: 'projects',
    component: DoneProjectsComponent
  },
  {
    path: 'links',
    component: LinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
