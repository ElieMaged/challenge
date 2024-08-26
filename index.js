// //Character Creator
// class MakeCharacter {
//     constructor(name, health, mana, race, strength, xp, level) {
//         this.name = name
//         this.health = health
//         this.mana = mana
//         this.race = race
//         this.strength = strength
//         this.xp = xp
//         this.level = level
//     }

//     levelup() {
//       switch(true) {
//         case  this.level === 1 && this.xp >= 20: 
//              this.level += 1
//              return `${this.name} has leveled up to ${this.level}!`
//         case  this.level === 2 && this.xp >= 40:
//             this.level += 1
//              return `${this.name} has leveled up to ${this.level}!`
//         case  this.level === 1 && this.xp < 20:
//              return `You do not have enough xp to levelup above ${this.level}!`
//         case  this.level ===  2  && this.xp < 40: 
//              return `You do not have enough xp to levelup above ${this.level}!`
//         case  this.level ===  3  && this.xp < 60: 
//              return `You do not have enough xp to levelup above ${this.level}!`
//         default: 
//              return `Man just get more xp yo :/`
//         }
//       } 
      
    

//     describe() {
//         return `I am ${this.name}, a level ${this.level} ${this.race}`
//     }

//     fight(target) {
//      if(this.strength > target.strength) {
//         this.xp += 20;
//           return `You defeat ${target.name}, gaining 20 xp!`
//      } else if(this.strength < target.strength) {
//         this.hp -= 10
//           return `${this.name} has been defeated by ${target.name}`
//      }
      
        
      
//     }

// }

// //Mob Creator


// const aurora = new MakeCharacter('Aurora', 20, 20,'bunny', 25, 0, 1)
// const carol = new MakeCharacter('Carol', 20, 20,'elf', 20, 0, 1)

// console.log(aurora)



const a = [1,2,3]
const b = [2]

function filterNumb(arr1, arr2) {
return a.filter(x => !arr2.includes(x))
}

console.log(filterNumb(a,b))

