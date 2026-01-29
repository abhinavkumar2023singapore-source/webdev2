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

/*let value = 0;

let interval = setInterval(() => {
    console.log(value);
    value++;

    if (value > 10) {
        clearInterval(interval);
    }
}, 1000);
*/
/*
const studentName = document.querySelector('#name')
const button = document.querySelector('.btn')
const list = document.querySelector('.list')

button.addEventListener('click', () => {
    //creating the  element
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')
        //providding the text 

    li.innerText = studentName.value
    deleteButton.innerText = "Delete"


    deleteButton.addEventListener('click', () => {
        // li.remove()
        list.removeChild(li)
    })
    li.appendChild(deleteButton)
    list.appendChild(li)
    studentName.value = ""
})
*/
function print() {
    console.log("inside print ")
}

function greet(print) { //hgher oerder function
    setTimeout(() => {



        console.log("hello students")
        print()
    }, 2000);
}
greet(print)