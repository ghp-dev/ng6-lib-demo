import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  private readonly apiRoot = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShow(id: number){
    const url = `${this.apiRoot}/shows/${id}`;
    return this.http.get<Show>(url);
  }
}
