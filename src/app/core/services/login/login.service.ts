import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { serviceConfig } from "../../../app.config";
import { User } from '../../models/user';
@Injectable({ providedIn: 'root' })
export class LoginService {
    selectedSiteId: any;
    userTypeId: any;
    refereshDate: any;
    obj: any;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    login(userName: string, password: string, accessCode: string, isFromLogIn: any) {       
        var formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', password);
        formData.append('accessCode', accessCode);
        formData.append('isFromLogIn', isFromLogIn);
        return this.http.post<any>(`${serviceConfig.apiUrl}/api/token/`, { userName, password, accessCode, isFromLogIn })
            .pipe(map(user => {
                              this.obj = JSON.parse(user);
                if (this.obj && this.obj.access_token) {
                    localStorage.setItem('currentUser', JSON.stringify(this.obj));
                    this.currentUserSubject.next(this.obj);
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem("siteDropDownFlag");
        this.currentUserSubject.next(null!);
    }


    CheckUserLoggedInAtFirstTime(idDto: any) {
        return this.http.post(`${serviceConfig.apiUrl}/api/token/CheckIsUserLoggedIn`, idDto);
      }




}