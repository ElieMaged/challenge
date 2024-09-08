class Character {
    constructor(name, hp, mp, power) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.power = power;
    }
     attack(target) {
if(this.power > target.power) {
    console.log(`${this.name} attacks ${target.name} for ${this.power} points of damage`);
    target.hp -= this.power;
    console.log(`${target.name} has ${target.hp} hp left`);
    target.hp <= 0 ? console.log(`${target.name} has fainted!`) : console.log(`${target.name} still lives!`);
    
} 

else if(target.power > this.power) {
    console.log(`${target.name} counters ${this.name} for ${target.power} points of damage`);
    this.hp -= target.power;
    console.log(`${this.name} has ${this.hp} hp left`);
}
 
    }
}




class Player extends Character {
    constructor(name, hp, mp, secret, power) {
    super(name, hp, mp, power);
    this._secret = secret;
    }
    get secret() {
        return this._secret
    }
}

let aurora = new Player('Aurora', 100, 100, 'likes girls', 10)

let bandit = new Character('Bandit', 50, 50, 5)


