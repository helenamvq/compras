import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Itens } from './create/item.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {








  baseUrl = "http://localhost:3001/itens/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void {
this.snackBar.open(msg, 'X', {
  duration: 3000,
  horizontalPosition: "right",
  verticalPosition: "top"
})

  }
create(itens: Itens): Observable<Itens> {
 return this.http.post<Itens>(this.baseUrl, itens)
}
read(): Observable<Itens[]> {
  return this.http.get<Itens[]>(this.baseUrl)
}
readById(id: string): Observable<Itens> {
const url = `${this.baseUrl}/${id}`
  return this.http.get<Itens>(url)
}
update(itens: Itens): Observable<Itens> {
  const url = `${this.baseUrl}/${itens.id}`
  return this.http.put<Itens>(url, itens)
}
delete(id: number): Observable<Itens> {
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Itens>(url)
}
getItens() {
  return this.http.get<Itens[]>(this.baseUrl);
}
}
