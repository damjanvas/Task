import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalStorage() {
    let storage = localStorage.getItem('user');
    return storage;
  }

  setLocalStorage() {
    localStorage.setItem('user', "true");
  }

  logout() {
    localStorage.removeItem('user');
  }

  loggedIn() {
    return localStorage.getItem('user');
  }

}
