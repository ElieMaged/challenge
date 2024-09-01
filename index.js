class Car {
    constructor(brand, color, speed, passcode) {
this.brand = brand;
this.color = color;
this.speed = speed;
this._passcode = passcode;
    }
    get passcode() {
        return this._passcode
    }
    honk() {
        console.log('honk :3')
    }
}

class Bike extends Car {
constructor(brand ,color ,speed, passcode, wheels) {
super(brand,color,speed,passcode)
this.wheels = wheels
    }
passBy() {
    console.log(`${this.brand} just passed by you!`)
}
wheelie() {
console.log(`${this.brand} just performed a SICK wheelie using ${this.wheels} wheels!`)
}
}

const vitara = new Car('Vitara', 'black', 120, 1234)

const scorpion = new Bike('Scorpion', 'black', 150, 1532, 2)