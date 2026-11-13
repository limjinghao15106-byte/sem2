//Spread operator(... is the spread operator it display the arrays without the square bracket)
const nums1 = [1,2,3]
const num2 =[4,5,6]
const num3 = [...nums1, ...num2]
console.log(num3)

const numswithoutspread = [nums1,num2]
console.log(numswithoutspread)//[[1,2,3],[4,5,6]]

//spread operator with objects
const person = {
    name: "john doe",
    age:18

}

const student ={
    ...person,
    grade:"diploma"

}
console.log(student)//{name:'john doe' , age:28 ,grade:'10th'}

const studentwithoutspread = {
    person,
    grade:"diploma"
}
console.log(studentwithoutspread)


//using spread operator in fucntion arguement
function  sum (a,b,c){
    return a+b+c
}
const listofnums=[15, 30 ,45]
console.log(sum(...listofnums))//90

//destructuring +spread operator together
//array
const phones = ["iphone" , "samsung" , "oppo" , "vivio" , "nokia"]
const [first, ...rest] =phones
console.log(first)//Iphone
console.log(rest)// ["samsung" , "Oppo" ,"Vivo" , " Nokia"]

//Object
const phone ={
    brand:"apple",
    name:"iphone 18  pro max",
    year:2026


}
const updatedphone = {
    ..phone , 
    name: "Iphone Duo"

}


console.log(updatedphone)

//combining destructuring and spread in fucntion arguments
const printSoldierinfo=({name,...rest}) => {
    console.log(name)
    console.log(rest)

}

const soldier = {
    id:101,
    name:"yoo si jin",
    age:32,
    rank:"captain"
}
printSoldierinfo(soldier)