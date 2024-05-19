// password validation

document.getElementById("signup").onclick=function(){
    var myinput = document.getElementById("myinput").value;
    var em=document.getElementById("mail").value;
    var para=document.getElementById("invalid");
    para.style.display="none"
    
    function filteremail(mail) {
        var regexx = /^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexx.test(mail);
    }
    
    function validatePassword(myinput) {
        var regex = /^^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{4,}$/;
        return regex.test(myinput);
    }
    
    if (validatePassword(myinput)&&filteremail(em)) {
        location.href="signin.html";
    }
    else {
      para.style.display="block"
    }
localStorage.setItem("email", em);
localStorage.setItem("password", myinput);
}



// password validation