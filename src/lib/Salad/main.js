import { Netease } from "./Netease"
import PouchDB from "pouchdb"

export class Salad {
    constructor(reglist) {
        this.reglist = Object.keys(reglist).map(key => reglist[key] = new reglist[key](this)) && reglist
        this.authDB = new PouchDB("salad-auth")
    }
    get plats(){
        return Object.keys(this.reglist)
    }
    login(plat, user, pass) {
        this.reglist[plat].login(user, pass)
    }
    async getPlaylists() {
        return await Promise.all(this.plats.map(async key => await this.reglist[key].getUserPlaylists()))
    }
}

export const Salads = new Salad({ netease: Netease })

