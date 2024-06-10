import BaseController from "./BaseController";


class PlatoController extends BaseController {

    constructor() {
        super('m71f6lbfv2ehlag', 'Platos');
    }

    async getCarta() {
        let carta = await this.getAll();
        //carta = carta.list;
        // extraient la Foto, només agafem la primera
        carta = carta.map(e => {
            let Foto = (e.Foto && e.Foto[0].signedUrl) ?  e.Foto[0].signedUrl : '';
            delete e.Foto;
            e.Foto = Foto;
            return e;
        });
        return carta;
    }

    async getNoMenu() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=false
        return menu.filter(e =>!e.Menu);
    }
    
    async getMenu() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.Menu); 
    }

    async getVegetariano() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene vegetariano=true
        return menu.filter(e => e.Vegetariano);
    }
    async getDesayuno() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene desayuno=true
        return menu.filter(e => e.Tiempo.includes('Desayuno'));
    }
    async getComida() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene comida=true
        return menu.filter(e => e.Tiempo.includes('Comida'));
    }
    async getCena() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene cena=true
        return menu.filter(e => e.Tiempo.includes('Cena'));
    }
}


export default PlatoController;