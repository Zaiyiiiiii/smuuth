export class SaladPiece {
    constructor(salad) {
        this.salad = salad
    }
    async login(user, pass) {
        const response = await this.getAuth(user, pass)
        if (!response || !response.auth) {
            return false
        }
        response._id = this.name
        response._rev = (await this.salad.authDB.get(response._id))._rev
        console.log(response)
        this.salad.authDB.put(response)
    }
}