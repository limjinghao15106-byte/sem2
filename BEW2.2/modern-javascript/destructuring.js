//Object Desructuring
const student = {
    name:"john doe",
    age : 18 , 
    grade : "diploma"

}
const name = student.name //the noob way
const {age , grade } = student //The Pro way (destructuring)

//Nesteed Destructuring
const {parent : {father , mother}} = student

console.log (name)
console.log(age)
console.log(grade)
console.log(mother)
console.log(father)
console.log (parent)


//Destructuring arrays
const colors = ['red ' , 'green ' , 'blue']
const [firstcolor, secondcolor, thridcolor]= colors
console.log(firstcolor)
console.log(secondcolor)
console.log(thridcolor)


//destructuring fucntion parameteres
function greetperson ({name , age }){
    console.log (`Hello , ${name}.You are ${age} years old`)

}

const person={
    name:"jackie chan",
    age:67
}


//write me the above function , name it greetPersonWithoutDestructuring,do it the way without destructuring .
// The call of the function has to be the same , only passing person as an entire object varaible in.

const greetPersonWithoutDestructuring = (person) => {
    console.log (`Hello , ${person.name}. You are ${person.age} years old`)
}
greetPersonWithoutDestructuring(person)

//Default values with destructuring
const car = {
    brand:"toyota",
    model:"Camry",
    colors:"blue"//you can try commenting this line
}
//default value of 'color' is black
const {brand , mode , color ="black"}=car
console.log(color)

//You can do the same thing with arrays
const shoes= ["air jordan" , "yeezy"]
const [firstshoe , secondshoe, thirdshoe= "speedcat"]  = shoes
console.log(thirdshoe)
 