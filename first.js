console.log("javascript by beginner to pro")
console.log("Start with variables")
console.log("Premitive Data types are")
console.log("number,String,null,undefined,bigint,symbol")

let number=10
console.log(number)
console.log(typeof(number))

let myName="smijul"
console.log(myName)
console.log(typeof(myName))

let a=null
console.log(a)
console.log(typeof(a))

let b
console.log(b)
console.log(typeof(b))


let bigNumber=121232323232n
console.log(bigNumber)
console.log(typeof(bigNumber))

let sym1 = Symbol();
console.log(sym1); 
console.log(typeof sym1)

//TODO
console.log("Non premitive data types")

console.log("Object")

const student={
    fullname:"Smijul",
    age:25,
    place:"Kerala"
};
console.log(student)
console.log(typeof student)
console.log(student.age=30)
console.log(student.age)

const profile={
    userName:"human_iam",
    followers:1400,
    following:1300,
    age:25,
    isFoloowing:true,
    buisness:null,
}
console.log(profile)
console.log(typeof profile)
console.log(typeof profile["userName"])
console.log(typeof profile["followers"])
console.log(typeof profile["following"])
console.log(typeof profile["age"])
console.log(typeof profile["isFoloowing"])
console.log(typeof profile["buisness"])