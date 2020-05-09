import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project.model';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';

@Injectable()
export class ProjectService {
  constructor(private httpClient: HttpClient,
              private userService: UserService) {
  }

  projects(): Observable<Project[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.get<Project[]>(`${environment.apiUrl}/api/v1/project`, httpOptions);
  }

  save(project: Project): Observable<Project> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.post<Project>(`${environment.apiUrl}/api/v1/project`, project, httpOptions);
  }


  remove(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/project/${id}`, httpOptions);
  }

  techDescription(name) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + this.userService.userValue.btoa
    });
    return this.httpClient.get<string>(`${environment.apiUrl}/api/v1/project/tech/${name}`, {
      headers,
      responseType: 'string' as 'json'
    });

  }

}
