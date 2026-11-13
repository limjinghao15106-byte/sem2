//Arrow function syntax ( never declare ur arrow function with a let only const)
const multiply = (a,b) =>a * b

//Traditional function syntax
function traditionalmultiply(a,b) {
    return a * b
}

//display all item from an argument
const displayall =(arr) => {
    for (const item of arr){
        console.log(item)
    }
}

const phones = ["iphone" , "samsung" , "Oppo"]
displayall(phones)

const converCMtoM = (converCMtoM) => {
    const m =cm/100
    return m
}

const lengthOfCarInCm=300
converCMtoM(converCMtoM(lengthOfCarInCm))

const lengthOfCarInM = converCMtoM(lengthOfCarInCm)
console.log(lengthOfCarInM)

//Write an arrow function that converts kgs to lbs , then returns the results.

const  convertKgToPunds = (lbs) => lbs * 2.20

const dTrump = 108 
const dTrumpInPounds = convertKgToPounds(dTrump)
console.log(dTrumpInPounds)


//Arrow Function in Callbacks
//What are callbacks?
//Example of callbacks

//.filter, .map , .reduce -> Array methods to do specific actions
//.filter -> is to find only the elements that fit the spcified criteria
//.map -> is essentially behaves like a for.. of loop but simpler
//it will also create a new array
//.reduce-> Used for calculating total . accumulation of value

const list =[2, 3, 6, 8]
const list2 =list.filter(num =>num >5)
console.log(list2 )//[6,8]


//                              This is call back
const listMultiplied = list.map(num => num * 2)
console.log (listMultiplied)

//Example without arrow function in callback
const listsquared = list.map(function(num){
    return num * num 
})
console.log(listsquared)

const sum = listsquared.reduce((total,num)=>total+ num , 0)
console.log(`The result of.reduce is ${sum}`)

//I want a product of the array using .reduce method , in arrow function format

const product = list.reduce((total , num )=>total * num , 0)
