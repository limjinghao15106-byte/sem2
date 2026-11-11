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
