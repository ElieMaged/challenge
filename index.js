class MakeEspresso{
    constructor(tea, hotWater, brand, price) {
        this.tea = tea;
        this.hotWater = hotWater;
        this.brand = brand;
        let cost = price;
        let sayPrice = function() {
            console.log(cost)
        }
        this.announce = function() {
            console.log(cost + 'HEWOOO')
        }
    }

 
   makeTea = function() {
        console.log('We making tea UwU')
    }
    boil = function() {
        console.log('OH WE BOILIN!!!')
    }
}

const blackDecker = new MakeEspresso('black', 'mild', 'Black&Decker', '500$')
const kekDecker = new MakeEspresso('black', 'mild', 'Black&Decker')