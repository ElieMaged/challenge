//factory function

function createCircle(radius){
    return{
        radius,
        draw: function() {
            console.log('DRAW CIRCLE')
        }
    }
}

const circ = createCircle(1)

//constructor function

function CreateSquare(radius) {
this.radius = radius;
this.draw = function() {
    console.log('DRAW SQUARE')
}
}

const square = new CreateSquare(5)
