import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../models/associate';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseUrl = 'http://localhost:3000/associate';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Associates[]>(this.baseUrl);
  }

  getByCode(code: number) {
    return this.http.get<Associates>(`${this.baseUrl}/${code}`);
  }

  create(payload: Associates) {
    return this.http.post<Associates>(`${this.baseUrl}`, payload);
  }

  delete(code: number) {
    return this.http.delete<Associates>(`${this.baseUrl}/${code}`);
  }

  update(payload: Associates) {
    return this.http.put<Associates>(`${this.baseUrl}/${payload.id}`, payload);
  }
}
