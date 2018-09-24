import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { ConfigService } from './config.service';
import { map, catchError, tap } from 'rxjs/operators';
import { CredentialsInterface } from '../interfaces/credentials.interface';
import { LoopbackResponseInterface } from '../interfaces/loopback-response.interface';

import { AngularFireDatabase } from  '@angular/fire/database';

@Injectable()
export class AuthenticationService {
    userId: string = '';
    _token: string;
    isLoggedIn: boolean = false;
    userData: any = {};

    private actionUrl: string;
    private httpOptions: any;

    constructor(
        private _http: HttpClient, 
        private _config: ConfigService,
        private angularFireDatabase: AngularFireDatabase,
    ) {
        this.httpOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json'
            })
        };
        this.actionUrl = `${this._config.apiUrl}${this._config.loginEndpoint}`;
        this._token = localStorage.getItem('token') || '';
        console.log('this._token: ', this._token);
    }

    addRegister(credentials: CredentialsInterface){ 
        const newValues = {
            username: credentials.username,
            email: credentials.email
        }

        const db = this.angularFireDatabase.database.ref('Devices');
        db.push(newValues);
        console.log('usuario agregado ');
    }
    
    login(credentials: CredentialsInterface) {
        
        const toAdd = JSON.stringify(credentials);

        return this._http.post<LoopbackResponseInterface>(`${this.actionUrl}/login`, toAdd, this.httpOptions)
            .pipe(
                map(response => response),
                catchError(this.handleError),
                tap((response: any) => {
                    if (response.id !== undefined) {
                        this.isLoggedIn = true;
                        this._token = response.id;
                        localStorage.setItem('isLoggedIn', 'true'); 
                        localStorage.setItem('userId', response.userId || '');
                        localStorage.setItem('created', response.created || '');
                        localStorage.setItem('token', response.id);
                        localStorage.setItem('email', response.email || '');
                    } 
                    return response;
                })
            );
    }

    changePassword(credentials: CredentialsInterface) {
        const newValues = {
            oldPassword: credentials.password,
            newPassword: credentials.repassword
        }
        const toAdd = JSON.stringify(newValues);

        return this._http.post<any>(`${this.actionUrl}/change-password?access_token=${this._token}`, toAdd, this.httpOptions)
            .pipe(
                map(response => response),
                catchError(this.handleError),
                tap((response: any) => {
                    return response;
                })
            );
    }

    register(credentials: CredentialsInterface) {
        
        const toAdd = JSON.stringify(credentials);

        return this._http.post<LoopbackResponseInterface>(`${this.actionUrl}/`, toAdd, this.httpOptions)
            .pipe(
                map(response => response),
                catchError(this.handleError),
                tap((response: any) => {
                    return response;
                })
            );
    }

    editProfile(credentials: CredentialsInterface) {
        const newValues = {
            newUsername: credentials.username
        }
        const toAdd = JSON.stringify(newValues);

        return this._http.put<any>(`${this.actionUrl}/${this.userId}`, toAdd, this.httpOptions)
        .pipe(
                map(response => response),
                catchError(this.handleError),
                tap((response: any) => {
                    return response;
                })
            );
    }

    logout(): void {
        this.isLoggedIn = false;
        this._token = '';
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('created');
        console.log('logout', 'Has cerrado sesión correctamente');
    }
    
    token(): string {
        return this._token;
    }
        
    isAuthenticated() {
        if (this.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    }
    
    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error || 'Server error');
    }

    saveSocialMediaData(data:any){
        this.userData = data;
    }

    getUserData():any{
        if(this.userData !== null){
            return this.userData;
        }
    }

}
