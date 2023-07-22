import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../models/models';

const TOKEN_KEY = 'token';
const USERNAME = 'username';
const AUTH_RESPONSE = 'auth';
const ROLE = 'role';
const IS_DEMO = 'isDemo';
const FB_TOKEN = 'fbtoken'
const LANGUAGE = 'lan'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private userObj = new BehaviorSubject<LoginResponse | null>(null)
  private token = new BehaviorSubject<string>('')
  private url = new BehaviorSubject<string>('')
  private isAuthenticated = new BehaviorSubject<boolean>(false)

  constructor() { }
  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  setUserProfile(userObj:any) {
    this.userObj.next(userObj)
  }

  getUserProfile() {
    return this.userObj.asObservable()
  }

  public saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public setToken(token: string): void {
    this.token.next(token)
  }

  public getTokenObservable() {
    return this.token.asObservable()
  }

  public setURL(url: string): void {
    this.url.next(url)
  }

  public getURL() {
    return this.url.asObservable()
  }


  public deleteToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  public getUserName(): string | null {
    return localStorage.getItem(USERNAME);
  }

  public saveUserName(username: string): void {
    localStorage.setItem(USERNAME, username);
  }

  public deleteUserName(): void {
    localStorage.removeItem(USERNAME);
  }

  public getAuthData(): any {
    return JSON.parse(localStorage.getItem(AUTH_RESPONSE)!);
  }

  public setAuthData(obj:any): void {
    localStorage.setItem(AUTH_RESPONSE, obj);
  }

  public deleteAuthData(): void {
    localStorage.removeItem(AUTH_RESPONSE);
  }

  public getRole(): any {
    return localStorage.getItem(ROLE);
  }

  public setRole(string:any): void {
    localStorage.setItem(ROLE, string);
  }

  public deleteRole(): void {
    localStorage.removeItem(ROLE);
  }

  public getDemoStatus(): any {
    return localStorage.getItem(IS_DEMO);
  }

  public setDemoStatus(status:any): void {
    localStorage.setItem(IS_DEMO, status);
  }

  public deleteDemoStatus(): void {
    localStorage.removeItem(IS_DEMO);
  }

  public getFirebaseToken(): any {
    return localStorage.getItem(FB_TOKEN);
  }

  public setFirebaseToken(token:string): void {
    localStorage.setItem(FB_TOKEN, token);
  }

  public deleteFirebaseToken(): void {
    localStorage.removeItem(FB_TOKEN);
  }

  public getLanguage(): any {
    return localStorage.getItem(LANGUAGE);
  }

  public setLanguage(language:string): void {
    localStorage.setItem(LANGUAGE, language);
  }

  public deleteLanguage(): void {
    localStorage.removeItem(LANGUAGE);
  }

}
