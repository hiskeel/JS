// let i = 1
// while(i <= 10){
    
//     //document.write("<p> "+ i + "</p>")
//     document.write(`<p style ="text-align: center; font-size: 2em; "> ${i} </p>`)
//     i++
    
// }

//practice
//task 1
// let sym = +prompt("Enter how many times show on the screen #")
// document.write("<p>")
// let i = 0;
// while(i != sym){document.write("#")
// i++ }
// document.write("</p>")

//task 2
// let num = +prompt("Enter a number")
// while(num != 0){
//     document.write("<p>" + num +" </p>")
//     num--
// }

//task 3
// let num = +prompt("Enter number: ")
// let pow = +prompt("Enter power: ")
// let res = 1
// while(pow != 0){
//     res*=num
//     pow--;
// }
// alert(res)

//task 4
// let num1= +prompt("Enter num1")
// let num2 = +prompt("Enter num 2")
// let i = 1
// document.write("<p>")


// while(i <= num1 || i <= num2){
//     if(num1 % i == 0 && num2 %i == 0)document.write(i +", ")
//     i++

// }
// document.write("</p>")

//task 5
// let num = +prompt("Enter number:")
// let i = 1;
// let res = 1
// while (i <= num){
// res*=i
// i++
// }
// alert(res)

//task 6
// let res
// do{
//     res=  +prompt("2 +2 *2 =")
// }while(res!= 6)
// alert("Good job")

//task 7 
// let num = 1000
// let divide = 2
// let count = 0
// do{
// num/=2
// count++
// }
// while(num > 50)
// alert(`number left under 50: ${num}, there were ${count} dividngs`)

//task 8
// document.write("<p>")
// let num = +prompt("Enter number")
// for(let i = 1; i<=100;i++){
//     if(i%num == 0)document.write(i + ", ")
// }
// document.write("</p>")

//task 9 
// let start = +prompt("Enter start range:")
// let end = +prompt("Enter end range:")
// document.write("<p>")
// for(let i = start;i <=end;i+=4)document.write(i + ", ")
// document.write("</p>")

//task 10
let num1 = +prompt("Enter number:")
let check = true
for(i = 2;i<num1; i++){
    if(num1 %i == 0){check = false;
    break}

}
if(check == true)alert("Your number is prime")
else alert("Your number is not prime")


