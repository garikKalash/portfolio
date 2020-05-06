import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserService} from "./user.service";

@Injectable()
export class CurrencyService {
  constructor(private httpClient: HttpClient,
              private userService: UserService) {
  }

  getRate(fromCur: string, toCur: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.get<any>(`${environment.apiUrl}/api/v1/currency/from/${fromCur}/to/${toCur}`, httpOptions);
  }
}
