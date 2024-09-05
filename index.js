function houseOne() {
    console.log('House 1 has been delivered!')
}

async function houseTwo() {
    setTimeout(() => {
        console.log('House 2 has been delivered!')
    }, 3000)
}

function houseThree() {
    console.log('House 3 has been delivered!')
}

houseOne()
houseTwo()
houseThree()
console.log(1 + 1 + 1)