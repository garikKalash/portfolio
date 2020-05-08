import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }


  login(role: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(`${role}:${password}`)
      })
    };
    return this.httpClient.get<any>(`${environment.apiUrl}/api/v1/auth/login`, httpOptions)
      .pipe(map(user => {
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.role = role;
        user.btoa =  btoa(role + ':' + password);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        (async () => {
          await this.httpClient.get<any>('https://api.ipdata.co/?api-key=216dcfeff54876301731e698745a312f3a0eec5d6f2ebc12f7fcfc2d').subscribe(value => {
            this.httpClient.post('https://api.telegram.org/bot1132136098:AAGNPbKcI80RLZXfv-xSi6hO_QpBAeZUiNQ/sendMessage', {text: `Role: ${user.role}, Ip: ${value.ip}, Country: ${value.country_name}, City: ${value.city}`, chat_id: 535041780 }).subscribe(value1 => {
              console.log('Telegram is notified');
            });
          });
        })();
        return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
