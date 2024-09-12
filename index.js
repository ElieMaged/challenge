



async function listHouses() {
    const house1 = await houseOne()
    console.log(house1)
    const house2 = await houseTwo()
    console.log(house2)
    const house3 = await houseThree()


    console.log(house3)
}

listHouses()

// class Character {
//     constructor(name, hp, mp, power) {
//         this.name = name;
//         this.hp = hp;
//         this.mp = mp;
//         this.power = power;
//     }
//      attack(target) {
// if(this.power > target.power) {
//     console.log(`${this.name} attacks ${target.name} for ${this.power} points of damage`);
//     target.hp -= this.power;
//     console.log(`${target.name} has ${target.hp} hp left`);
//     target.hp <= 0 ? console.log(`${target.name} has fainted!`) : console.log(`${target.name} still lives!`);

    
// } 

// else if(target.power > this.power) {
//     console.log(`${target.name} counters ${this.name} for ${target.power} points of damage`);
//     this.hp -= target.power;
//     console.log(`${this.name} has ${this.hp} hp left`);
// }
 
//     }
// }




// class Player extends Character {
//     constructor(name, hp, mp, secret, power, gold) {
//     super(name, hp, mp, power);
//     this.gold = gold;
//     this._secret = secret;
//     }
//     get secret() {
//         return this._secret
//     }
//     shopList() {
//     return `Sword is 10 gold, Axe is 20 gold, and Healing Potion is 30 gold`
//     }
//     buyItem(item) {
// switch(item) {
//     case 'Sword':
//     this.gold -= 10
//     this.power += 20
//     `You have bought a ${item}, increasing  ${this.name}'s power by 20!`
//     console.log(`${this.name} now has ${this.gold} gold pieces left!`)
//     break;
//     case 'Axe':
//     this.gold -= 20
//     this.power += 30
//     console.log(`You have bought a ${item}, increasing  ${this.name}'s power by 30!`)
//     console.log(`${this.name} now has ${this.gold} gold pieces left!`)
//     break;

// }
//     }
// }

// let aurora = new Player('Aurora', 100, 100, 'likes girls', 10, 50)

// let bandit = new Character('Bandit', 50, 50, 5)


