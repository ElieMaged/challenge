class MakeEspresso{
    constructor(tea, hotWater, brand) {
        this.tea = tea;
        this.hotWater = hotWater;
        this.brand = brand;
   
    }
   makeTea = function() {
        console.log('We making tea UwU')
    }
    boil = function() {
        console.log('OH WE BOILIN!!!')
    }
}

const blackDecker = new MakeEspresso('black', 'mild', 'Black&Decker')
const kekDecker = new MakeEspresso('black', 'mild', 'Black&Decker')