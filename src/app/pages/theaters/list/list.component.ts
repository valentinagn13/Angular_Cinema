import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Theaters } from "src/app/models/theaters.model";
import { TheaterService } from "src/app/services/theater.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  //*
  //el constructor para arrancar los atributos

  theaters: Theaters[];

  constructor(private theatersService: TheaterService, private router: Router) {
    console.log("Saludos desde el constructor");
    this.theaters = [];
  }
  //primero se ejecuta el contructor y luego la clase programar apis dentro del metodo, llamar todas las apis desde ahi
  ngOnInit(): void {
    console.log("saludos desde ngOnInit");
    this.list();
  }
  //programar para que se llame la api desde aqui
  list() {
    this.theatersService.list().subscribe((data) => {
      this.theaters = data;
    });
  }
  delete(id: number) {
    Swal.fire({
      title: "Eliminación",
      text: "Está seguro que quiere eliminar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No,cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.theatersService.delete(id).subscribe((data) => {
          this.ngOnInit(); // actualiza la vista luego de eliminar
          Swal.fire({
            title: "Eliminado",
            text: "Se ha eliminado correctamente",
            icon: "success",
          });
        });
      }
    });
  }
  view(id: number) {
    this.router.navigate(["theaters/view/" + id]);
  }
  update(id: number) {
    this.router.navigate(["theaters/update/" + id]);
  }
}
