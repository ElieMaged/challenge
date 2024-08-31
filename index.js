function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = []
    let vowelArr = []
    
    for(let i = 0; i < str.length; i++){
    arr.push(str[i])
    }
    
    for(let i = 0; i <= vowels.length; i++) {
    arr.includes(vowels[i]) && vowelArr.push(str[i])
    }
    
    return vowelArr.length
    }