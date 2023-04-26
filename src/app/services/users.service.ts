import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}
  
  getUsers() {
    return this.httpClient.get<User[]>('apibase/users');
  }

}
