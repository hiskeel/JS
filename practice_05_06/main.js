function formSubmitHandler(e){
    cleanLabels()
 e.preventDefault();
 const data = {
    
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
function showLabel(text , label){
    const labelError = document.getElementById(label);
    labelError.innerText = text;
    labelError.hidden = false;
}
function cleanLabels(){
    let labelsError =[];
    labelsError.push(document.getElementById("labelPasswordError"),document.getElementById("labelEmailError"),document.getElementById("labelPasswordRepeatError"))
    for(let i = 0; i < labelsError.length;i++){
        labelsError[i].innerText = " ";
        labelsError[i].hidden = true;
    }
    
   
}
function validateData(data){
    
    let check = true;
    const mailRegex =  /^\S+@\S+\.\S+$/;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!mailRegex.test(data.email)){
        showLabel("Wrong Email address", "labelEmailError")
        check = false;
    }
    if(data.email === ""){
        showLabel("Required field", "labelEmailError")
        check = false;
    }
    
    // if(!regexEmail.test(data.email)){
    //     showLabel("Не коректний емеіл", "labelEmailError")
        
    // }
    if(!regexPassword.test(data.password)) {
        showLabel("Wrong password", "labelPasswordError");
        check = false;
    }
    if(data.password.length< 6){
        showLabel(" Enter more then 6 symbols", "labelPasswordError")
        check = false;   
    }
    
    if(data.password!= data.confirmPassword){
        showLabel("Passwords must match", "labelPasswordRepeatError")
        check = false;  
    }
    if(data.confirmPassword == ""){
        showLabel("Required field", "labelPasswordRepeatError")
        check = false;  
    }
    if(check== false) return false
    return true

}