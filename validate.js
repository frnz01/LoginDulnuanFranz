function emailValidation(email) {
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  }
  function passValidation(pass){
    var passPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passPattern.test(pass);
  }
function getEmailandPass(){
    var email = document.getElementById("uName").value;
    var password = document.getElementById("uPass").value;
    if (!emailValidation(email) && passValidation(password)) {
      alert("Invalid email address");
    }
    else if(emailValidation(email) && !passValidation(password)){
      alert("Invalid Password");
    }
    else if(!passValidation(password) && emailValidation(email)){
        alert("Invalid Password");
    }
    else if(passValidation(password) && !emailValidation(email)){
        alert("Invalid email address");
    }
    else if(passValidation(password) && emailValidation(email)){
        alert("Valid email address and password");
    }
    else{
        alert("Invalid email address and password");
    }
  }
 
//   function getPass() {
//     var password = document.getElementById("uPass").value;
//     if (!passValidation(password)) {
//       alert("Invalid Password");
//     }else{
//         alert("Valid Password");
//     }
//   }
