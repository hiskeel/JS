// console.log("I am main.js")
// document.body.style.backgroundColor = "orange"

// let day = prompt("Enter day of week")
// if(day === 1)
//     {
//     console.log("Monday")
//     document.title = "Monday"
// }
// else if(day ===2)
//     console.log("Tuesday")
// else if(day ===3)
//     console.log("Wednesday")
// else if(day ===4)
//     console.log("Thursday")
// else if(day ===5)
//     console.log("Friday")
// else if(day ===6)
//     console.log("Saturday")
// else if(day ===7)
//     console.log("Sunday")
// else 
//     console.error("Error")
// let day = +prompt("Enter Numbber 1-20")
// if( day >= 1 && day <= 20){
//     console.log("TRUE")
// }

//task 1 
let num = +prompt("Enter num to square it:")
console.log(num**2)
//task 2
// let num1,num2 
// num1 = +prompt("Enter num 1")
// num2 = +prompt("Enter num 2")
// let avg =(num1 +num2) / 2
// console.log("AVG from " + num1 + " and " + num2 +" = " + avg)
// task 3 
let side = +prompt("Enter side of square:")
console.log("Area: ")
console.log(side**2)
//task 4
let km = +prompt("Enter km to find miles")
let miles = km * 0.621371
console.log(km + "kms = " + miles + " Miles")
//task 5

let num1,num2,res 
num1 = +prompt("Enter num 1")
num2 = +prompt("Enter num 2")
res = num1 + num2
console.log(num1 + " + " + num2 +" = " + res)
res = num1 - num2
console.log(num1 + " - " + num2 +" = " + res)
res = num1 * num2
console.log(num1 + " * " + num2 +" = " + res)
if (num2!= 0){
res = num1 / num2
console.log(num1 + " / " + num2 +" = " + res)}
else {
    console.log("Cant divide to 0")
}
//task 6
let a,b,x
a = +prompt("Enter a:")
b = +prompt("Enter b:")
x = -b/a
console.log("x = " + x)
//task 7
let hour, minute, leftTimeHour, leftTimeMinute
hour = +prompt("Enter hours")
minute = +prompt("Enter minutes")
leftTimeHour = 24 - ++hour
leftTimeMinute = 60 - minute
console.log("To the end of the day left: " + leftTimeHour + " hours :" + leftTimeMinute + " Minutes")
//task 8 
let num3  = +prompt("Enter 3 digits number: ")
secDigit = num3 % 100 / 10

console.log (parseInt(secDigit))
//task 9
let num5  = +prompt("Enter 5 digits number: ")

let reverse =  num5 % 10


console.log (reverse +""+  parseInt(num5 / 10) )


