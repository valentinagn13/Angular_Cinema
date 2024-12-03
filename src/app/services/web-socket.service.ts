import { EventEmitter, Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { environment } from "src/environments/environment";
import { SecurityService } from "./security.service";
@Injectable({
  providedIn: "root",
})
export class WebSocketService extends Socket {
  callback: EventEmitter<any> = new EventEmitter();

  nameEvent: string;
  //  A DONDE ME VOY A CONECTAR Y QUE VA EN LA QUERY hi
  constructor(private securityService: SecurityService) {
    super({
      url: environment.url_ms_cinema,

      options: {
        query: {
          id: "id-prueba",
        },
      },
    });
    this.nameEvent = "";

    // this.listen();
  }
  //* NOMBRE DEL EVENTO SE CONFIGURA EN

  setNameEvent(nameEvent: string) {
    this.nameEvent = nameEvent;

    this.listen();
  }
  // acitva el socket
  listen = () => {
    this.ioSocket.on(this.nameEvent, (res: any) => this.callback.emit(res));
  };

  // Para llamar este método es necesario inyectar el servicio

  // y enviar el payload

  // emitEvent=(payload={})=>{

  // this.ioSocket.emit(this.nameEvent,payload)

  // }
}
