function formSubmitHandler(e){
    cleanLabel()
 e.preventDefault();
 const data = {
    firstname : document.getElementById("firstName").value,
    lastname : document.getElementById("lastname").value,
    password : document.getElementById("password").value,
    email : document.getElementById("email").value,
    confirmPassword : document.getElementById("confirmPassword").value
 }
 if(validateData(data)){
    console.log(data)
 }else{
    console.log("Not valid")
 }

}
function showLabel(text){
    const labelError = document.getElementById("labelError");
    labelError.innerText = text;
    labelError.hidden = false;
}
function cleanLabel(){
    const labelError = document.getElementById("labelError");
    labelError.innerText = " ";
    labelError.hidden = true;
}
function validateData(data){
    
const regexEmail = /^$/;

    if(data.email === ""){
        showLabel("Пошта Обовёязкова")
        return false;
    }
    if(!regexEmail.test(data.email)){
        showLabel("Не коректний емеіл")
        return false
    }
    if(data.password.length< 6){
        showLabel("В паролі має бути більше 6-ти символів")
        return false;
    }
    if(data.password!= data.confirmPassword){
        showLabel("Паролі повинні збігатися")
        return false;
    }
    return true

}