import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UsuarioServiceService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://randomuser.me/api/?results=5000';
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
