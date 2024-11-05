
console.log("datatype in js")

//! primitive datatype 

    - number
    - string
    - boolean
    - undefined
    - null
    - bigint

//! non-primitive datatype
    - object
    - Array
   // - function()


//! Number datatype
//! typeof operator is used know the datatype...
let num1 = 10
let num2 = 10.5
console.log(num1)
console.log(typeof num1) // number
console.log(num2)
console.log(typeof num2) // number

//! boolean datatype
let bool1 = true

console.log(bool1)

console.log(typeof bool1) // boolean

//! String datatype

let str1 = "Hello World"
let str2 = 'Hello World 2'
let str3 = `Hello World 3`
console.log(str1)
console.log(str2)
console.log(str3)
console.log(typeof str1) // string
console.log(typeof str2)
console.log(typeof str3)

//! undefined

let num3
console.log(num3)
console.log(typeof num3) // undefined

//! null

let salary=null
console.log(salary)
console.log(typeof salary) // object

//! BigInt

let bigInt1 = 12345678901234567890n
console.log(bigInt1)
console.log(typeof bigInt1) // bigint

let bigInt2 = BigInt(12345678901234567890)
console.log(bigInt2)
console.log(typeof bigInt2) // bigint

//! non primitive datatype

//! array
let arr=[1,'hello',undefined,null,['hi','how']]
console.log(arr)
console.log(typeof arr) // object

//! object

let obj={name:'John',age:30,city:'New York'}
console.log(obj)
console.log(typeof obj) // object

//! function

function greet(){
    console.log('Hello World')
}
greet()
console.log(typeof greet) // function
