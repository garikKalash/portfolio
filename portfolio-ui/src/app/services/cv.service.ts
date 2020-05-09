import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CV} from '../models/cv.model';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill.model';
import {Experience} from "../models/experience.model";
import {Education} from "../models/education.model";
import {Language} from "../models/language.model";

@Injectable()
export class CvService {
  constructor(private httpClient: HttpClient, private userService: UserService) {
  }

  getCv(): Observable<CV> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.get<CV>(`${environment.apiUrl}/api/v1/gk/cv`, httpOptions);
  }

  addSkill(skill: Skill): Observable<Skill> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.post<Skill>(`${environment.apiUrl}/api/v1/gk/cv/skill`, skill, httpOptions);
  }

  removeSkill(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/gk/cv/skill/${id}`, httpOptions);
  }

  addExperience(experience: Experience): Observable<Experience> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.post<Experience>(`${environment.apiUrl}/api/v1/gk/cv/experience`, experience, httpOptions);
  }

  removeExperience(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/gk/cv/experience/${id}`, httpOptions);
  }

  removeEducation(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/gk/cv/education/${id}`, httpOptions);
  }

  addEducation(education: Education): Observable<Education> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.post<Education>(`${environment.apiUrl}/api/v1/gk/cv/education`, education, httpOptions);
  }

  addLanguage(language: Language): Observable<Language> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.post<Language>(`${environment.apiUrl}/api/v1/gk/cv/language`, language, httpOptions);
  }

  removeLanguage(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.userService.userValue.btoa
      })
    };
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/gk/cv/language/${id}`, httpOptions);
  }
}
