
const json = `{
    "login":"user",
    "password":"qwerty",
    "age":50,
    "address":
    [
        {"country":"Ukraine", "city":"Rivne"},
        {"country":"USA", "city":"Boston"},
        {"country":"Poland", "city":"Warsava"}
    ]
}`;

const userInputHandler = (e) =>{
    const userInput = document.getElementById("userInput").value
    const userInputToJson = document.getElementById("userInputToJson")
    console.log(e)
    let checkPaws = false
    let objectEnd = false
    userInputToJson.value =""
    for(let i = 0; i < userInput.length;i++){
    
        if (userInput[i] == "["){
            userInputToJson.value += userInput[i] + "\n   "
        }
        else if(userInput[i] === "{"){
            userInputToJson.value += userInput[i] + "\n       "
        }
        else if(userInput[i] === "}"){
            userInputToJson.value += "\n    "+userInput[i] + "\n    "
            objectEnd = true
        }
        else if(userInput[i] === "\"" && checkPaws === false){
            userInputToJson.value += userInput[i]
            checkPaws = true;
        }
        else if(userInput[i] === ":"){
            userInputToJson.value += userInput[i] + " ";
        }
        else if(userInput[i] === "," && objectEnd === true){
            userInputToJson.value += userInput[i] + "\n   ";
            objectEnd = false
        }
        else if(userInput[i] === "," && objectEnd === false){
            userInputToJson.value += userInput[i] + "\n       ";
        }
        else if(userInput[i] == "]"){
            userInputToJson.value += "\n" +userInput[i]
        }
        else{
            userInputToJson.value += userInput[i]
        }}
        try{
            JSON.parse(userInputToJson.value)
        }
        catch(ex){
            console.log("Error")
        }
    };

    
    







// JSON.parse()
// JSON.stringify()

// const showHandler = () => {
//  const logpass = document.getElementById("logpass")
//  const address = document.getElementById("address")
//  const age = document.getElementById("age")
//  const userData = JSON.parse(json)

//  logpass.innerText = `Login : ${userData.login} , Password: ${userData.password}`
//  age.innerText = `Age: ${userData.age}`

//  for(let i = 0; i <userData.address.length;i++){
//     const add =  userData.address[i]
//     const item = `Country: ${add.country}, City: ${add.city}`
//     const div = document.createElement("div")
//     div.innerText = item;
//     address.appendChild(div)
//     address.remove
//  }
// };