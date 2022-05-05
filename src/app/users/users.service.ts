import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { User } from "../models/models";

@Injectable({
    providedIn: 'root',
  })
export class UsersService {
  private readonly usersApiRoute: string = 'Users';
  private readonly baseApiUrl: string = 'http://localhost:3001';

  constructor(private httpService: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`${this.baseApiUrl}/${this.usersApiRoute}`);
  }
}