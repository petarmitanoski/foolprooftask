import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { Type } from "../models/models";

@Injectable({
    providedIn: 'root',
  })
export class TypesService {
  private readonly typesApiRoute: string = 'Types';
  private readonly baseApiUrl: string = 'http://localhost:3001';

  constructor(private httpService: HttpClient) {}

  public getTypes(): Observable<Type[]> {
    return this.httpService.get<Type[]>(`${this.baseApiUrl}/${this.typesApiRoute}`);
  }
} 