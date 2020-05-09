import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login-component/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {CvComponent} from './components/cv/cv.component';
import {CvService} from './services/cv.service';
import {ProjectDemoComponent} from './components/project-demo/project-demo.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CalculatorService} from './services/calculator.service';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CurrencyComponent} from './components/currency/currency.component';
import {MatSelectModule} from '@angular/material/select';
import {CurrencyService} from './services/currency.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {S3MinioComponent} from './components/s3-minio/s3-minio.component';
import {MatFileUploadModule} from 'mat-file-upload';
import {FileService} from './services/file.service';
import {DetailsUploadComponent} from './components/s3-minio/upload/details-upload/details-upload.component';
import {FormUploadComponent} from './components/s3-minio/upload/form-upload/form-upload.component';
import {ListUploadComponent} from './components/s3-minio/upload/list-upload/list-upload.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DoneProjectsComponent} from './components/done-projects/done-projects.component';
import {ProjectService} from './services/project.service';
import {EditorModule} from 'primeng/editor';
import {LinksComponent} from './components/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CvComponent,
    ProjectDemoComponent,
    CalculatorComponent,
    CurrencyComponent,
    S3MinioComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    DoneProjectsComponent,
    LinksComponent
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFileUploadModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

    EditorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserService,
    CvService,
    CalculatorService,
    CurrencyService,
    FileService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
