import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { File } from "../models/models";

@Injectable({
    providedIn: 'root',
  })
export class FilesService {
  private readonly filesApiRoute: string = 'Files';
  private readonly baseApiUrl: string = 'http://localhost:3001';

  constructor(private httpService: HttpClient) {}

  public getFiles(): Observable<File[]> {
    return this.httpService.get<File[]>(`${this.baseApiUrl}/${this.filesApiRoute}`);
  }
}