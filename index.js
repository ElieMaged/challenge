function houseOne() {
    console.log('House 1 has been delivered!')
}

function houseTwo(callback) {
    setTimeout(() => {
        callback();
        console.log('House 2 has been delivered!')
    }, 3000)
}

function houseThree() {
    console.log('House 3 has been delivered!')
}

houseOne()
houseTwo(houseThree)