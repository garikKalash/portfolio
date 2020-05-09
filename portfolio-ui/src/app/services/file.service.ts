import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable()
export class FileService {
  constructor(private httpClient: HttpClient,
              private userService: UserService) {

  }

  upload(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', `${environment.apiUrl}/api/v1/files`, formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    });

    return this.httpClient.request(req);
  }

  download(name) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + this.userService.userValue.btoa
    });
    return this.httpClient.get<any>(`${environment.apiUrl}/api/v1/files/${name}`, {
      headers,
      responseType: 'blob' as 'json'
    });

  }


  remove(name) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/v1/files/${name}`, httpOptions);
  }

  files() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.get<any>(`${environment.apiUrl}/api/v1/files`, httpOptions);
  }
}
