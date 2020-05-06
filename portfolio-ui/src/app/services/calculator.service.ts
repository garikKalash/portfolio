import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable()
export class CalculatorService {


  constructor(private httpClient: HttpClient,
              private userService: UserService) {

  }

  getResult(expression: string): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.get<number>(`${environment.apiUrl}` + '/api/v1/calculator/' + expression + '/result', httpOptions);
  }
}
