const toRoman = (num) => {
let result = ''
    while (num > 0) {
        if (num % 1000 ===  0) {
            result += "M"
            num -= 1000
        } else if (num % 500 === 0) {
            
                result += "D"
                num -= 500

            } else if (num % 100 === 0) {  

                result += "C"
                num -= 100
            } else if (num % 50 === 0) { 

                result += "L"
                num -= 50
            } else if (num % 10 === 0) {

                result += "X"
                num -= 10

            } else if (num % 5 === 0) {
                result += "V"
                num -= 5
            } else if (num % 1 === 0) {

                result += 'I'
                num -= 1
                // console.log('Hello')
        }

    }

    let reversed = ''
    for(let i = result.length -  1; i >= 0; i--){
        reversed += result[i]
    }
    return reversed
}
console.log(toRoman(5))
//V
console.log(toRoman(267))
    // CCLXVII
console.log(toRoman(99))
