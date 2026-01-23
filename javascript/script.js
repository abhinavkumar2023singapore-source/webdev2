/*var a = 212
let b = 34;

console.log(a)
console.log(b)

function print (){
    c= 40 
    console.log(c)
}
*/

// console.log ("this is  the begining of the code")

let value = 0;

let interval = setInterval(() => {
    console.log(value);
    value++;

    if (value > 10) {
        clearInterval(interval);
    }
}, 1000);