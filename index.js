class Contractor {
    constructor(name, role) {
        this._name = name;
        this.role = role;
    }
    get name() {
        return this._name
    }
    sendCV() {
        console.log(`${this.name} has sent their CV!`)
    }
    announce() {
        console.log(`Hello! I am ${this.name}, and I am a ${this.role}`)
    }
}

class Frontend extends Contractor {
    constructor(name, role, special, frontLang) {
        super(name, role);
        this._special = special;
        this.frontLang = frontLang;
    }
    get special() {
        return this._special
    }
    design() {
        console.log('I create designs!')
    }
}

class Backend extends Contractor {
    constructor(name, role, special, backLang) {
       super(name, role);
       this._special = special;
       this.backLang = backLang;
    }
    get special() {
        return this._special
    }
    database() {
        console.log('I create databases!')
    }
}


const mark = new Contractor('Mark Azmy','Engineer')
const elie = new Frontend('Elie Maged','Frontend Engineer', 'Designs', 'Nextjs')
const harry = new Backend('Harry Adel', 'Backend Engineer', 'Databases', 'Nodejs')

const list = [mark, elie, harry]