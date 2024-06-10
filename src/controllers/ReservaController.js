import BaseController from "./BaseController";


class ReservaController extends BaseController {

    constructor() {
        super('mqrgp1c5n5m4gwi', 'Reservas');
    }

    async crearReserva(nombre, email, tel, fecha, hora, personas, mensaje) {
        const ob = {
            "Nombre": nombre,
            "Mail": email,
            "Telefono": tel,
            "Fecha": fecha,
            "Hora": hora,
            "Comensales": personas,
            "Comentario": mensaje
        }
        console.log(ob);
        return fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(
               ob
            )
        }).then(response => response.json()).then(x => console.log("arribat: ", x))
    }

}


export default ReservaController;