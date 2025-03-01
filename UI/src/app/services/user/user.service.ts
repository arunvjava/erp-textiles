import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Response } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  saveUser(user: User) {
    return this.post('/user', user);
  }

  validateUser(user: User) {
    return this.post<Response<boolean>>('/user/validate', user);
  }

}
