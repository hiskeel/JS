//let student = new Object()

// student.name = "pashka Cherepashka"
// student.age = 19
// console.log(student)

// let student ={
//     name: "Pashka Cheburashka",
//     age: 18,
//     eMail: "mail"

// }
// console.log(student)
// student.

// function Student(name, year){
//     this.name = name
//     this.year = year
// }

// let ivan = new Student("Ivanchello", 19)
// let zorka = new Student("zorka", 17)

// console.log(ivan)
// console.log(zorka)
// Student.prototype.group = "321"
// Student.prototype.getAge = (year) => {
//     new Date().getFullYear()- year
// }
// console.log(ivan)
// console.log(zorka)

let vw = Object.create({
    CalculateDistPerYear: function()  
    {
        Object.defineProperty(this, "distanceYear", {
            value: (this.distance / this.age).toFixed(2) ,
            enumerable: false

        })
        console.log(this.distance)
        console.log(this.age)
        return this.distance / this.age 
    }
}, {
    model: {
        value: "Volkswagen",
        writable: true,
        configurable: false,
        enumerable: true
    },
    year: {
        value: 2000,
        writable: false
    },
    distance: {
        value: 100000,
        writable: true,
        enumerable: false,
        configurable: true

    },
    age: {
        get: function(){
        console.log("getter")
        return new Date().getFullYear()- this.year
        },
        set:function(value) {
            console.log("setter")
        }
    }
})
console.log(vw)