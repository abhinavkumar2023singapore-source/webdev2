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
/*function print() {
    console.log("inside print ")
}

function greet(print) { //hgher oerder function
    setTimeout(() => {



        console.log("hello students")
        print()
    }, 2000);
}
greet(print)
*/
/*console.log("Starting homework...");
setTimeout(() => {

    console.log("Homework done!");
    console.log("Starting dinner...");
    setTimeout(() => {
        console.log("Dinner done!");
        console.log("Getting ready to go out...");
        setTimeout(() => {
            console.log("Going to the playground!");
        }, 1000); // after dinner
    }, 1500); // dinner time
}, 2000); // homework time
*/

/*function finishHomework(callback) {
    console.log("Starting homework...");
    setTimeout(() => {
        console.log("Homework done!");
        callback();
    }, 2000);
}

function eatDinner(callback) {
    console.log("Starting dinner...");
    setTimeout(() => {
        console.log("Dinner done!");
        callback();
    }, 1500);
}

function goToPlayground() {}
console.log("Going to the playground!");
// Chained in steps, but cleaner 
finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    });
});
*/
/*
function doHomework() {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let done = true; // Simulate homework completion
            if (done) {
                console.log("Homework completed!");
                resolve("homework done");
            } else {
                reject("Homework not completed");
            }
        }, 2000)
    });
    return p;
}

function eatDinner() {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let done = true; // Simulate dinner completion 
            if (done) {
                console.log("Dinner completed!");
                resolve("dinner done");
            } else {

                reject("Dinner not completed");
            }

        }, 1500);
    });
    return p;
}
*/
/*
console.log("First Line")
setTimeout(() => {
    console.log("Inside setTimeout")
}, 0);
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved")
})
p.then(() => {
    console.log("Inside Promise:")
})
console.log("Last Line")
*/


function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food Ordered");
            resolve("");
        }, 2000);
    });
}

function prepareFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food Prepared");
            resolve("");
            // reject("order cancelled")
        }, 2000);
    });
}

function deliverFood() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Food Delivered");
            resolve("");
        }, 2000);
    });


    async function FoodOrder() {
        await orderFood();
        await prepareFood();
        await deliverFood();
        console.log("Enjoy your food !")
    }
    FoodOrder()