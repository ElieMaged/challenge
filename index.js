class Character {
    constructor(name, health) {
           this._name = name
           this.health = health
    }
    get name() {
        return this._name
    }
    announce() {
        console.log(`I am ${this.name}`)
    }
}


class Enemy extends Character {
    constructor(name, health, danger) {
        super(name, health)
        this._danger = danger
    }
    get danger() {
        return this._danger
    }

}


const rochelle = new Character('Rochelle', 100) 
const tank = new Enemy('Tank', 200, 'High')


const peeps = [rochelle, tank]

