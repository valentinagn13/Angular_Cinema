import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Theaters } from "../models/theaters.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TheaterService {
  //*INYECTAR LA VARIABLE HTTP CLIENT LA CREA EL MISMO FRAMEWORK PERMITE HACER LOS METODOS DE GET POST AND DELETE
  constructor(private http: HttpClient) {}
  list(): Observable<Theaters[]> {
    return this.http.get<Theaters[]>(`${environment.url_ms_cinema}/theaters`);
  }
  delete(id: number) {
    return this.http.delete<Theaters>(
      `${environment.url_ms_cinema}/theaters/${id}`
    );
  }
  view(id: number): Observable<Theaters> {
    return this.http.get<Theaters>(
      `${environment.url_ms_cinema}/theaters/${id}`
    );
  }
  create(theater: Theaters): Observable<Theaters> {
    delete theater.id; //para borrar el id
    return this.http.post<Theaters>(
      `${environment.url_ms_cinema}/theaters`,
      theater
    );
  }
  update(theater: Theaters): Observable<Theaters> {
    return this.http.put<Theaters>(
      `${environment.url_ms_cinema}/theaters/${theater.id}`,
      theater //hay que anexarle un body
    );
  }
}
