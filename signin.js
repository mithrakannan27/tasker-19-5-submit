var signupbutton=document.getElementById("signup");
signupbutton.onclick=function(){
    location.href="signup.html";
}

// password validation

document.getElementById("signin").onclick=function(){
    var myinput = document.getElementById("myinput").value;
    var em=document.getElementById("mail").value;
    var para=document.getElementById("invalid");
    para.style.display="none"
    
    if (em===localStorage.getItem("email") && myinput===localStorage.getItem("password")) {
        location.href="tasker.html";
    }
    else {
      para.style.display="block"
    }
}
    
// password validation