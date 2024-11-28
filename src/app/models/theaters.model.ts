import { Seat } from "./seat.model";

export class Theaters {
  id?: number; //EL ? PARA INDICAR QUE EL CAMPO NO ES OBLIGATORIO
  location: string;
  capacity: number;
  seats?: Seat[];
}
