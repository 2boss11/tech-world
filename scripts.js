

    

function handleClick() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd   = document.getElementById("pwd").value;
    let phone = document.getElementById("phone").value;

    //2boss.2011ng@gmail.com
    //2virusfounD

    let namePattern = /^[a-z]{3,}/i
    let emailPattern = /[\w]{5,}\@[a-z]{3,}\.[a-z]{2,}/i
    //let pwdPattern = /^[A-Za-z0-9]{5,}[A-Z]+[0-9]+[\W]+/
    let pwdPattern = /^[A-Za-z0-9]{5,}[A-Z]+[0-9]+/   //A2virusfounD9
    let phonePattern = /^\+[\d]+\(?[\d]{6,}\)/i   //+234(7030616632)


    if (fname === "" || lname === "" || email === "" || pwd === "" || phone === "") {

        
        document.getElementById("notification").style.display= "flex"
        document.getElementById("notification").style.backgroundColor= " rgb(123, 20, 08)"
        document.getElementById("text").innerText= "InputField can not be Empty"
        
        //alert("input field cannot be empty");
        
    } else if (!namePattern.test(fname) || !namePattern.test(lname)) {

        document.getElementById("notification").style.display= "flex"
        document.getElementById("notification").style.backgroundColor= " yellow "
        document.getElementById("text").innerText= "Enter valid Name"
        
        //alert("enter valid name");

    } else if (!emailPattern.test(email)) {

        document.getElementById("notification").style.display= "flex"
        document.getElementById("notification").style.backgroundColor= "grey"
        document.getElementById("text").innerText= "Enter valid E-mail"

        //alert("enter valid email");

    } else if (!pwdPattern.test(pwd)) {

        document.getElementById("notification").style.display= "flex"
        document.getElementById("notification").style.backgroundColor= " blue"
        document.getElementById("text").innerText= "Enter strong password, it must be greater than 6"

        //alert("enter strong password, it must be greater than 6");

    } else if (!phonePattern.test(phone)) {
        
        document.getElementById("notification").style.display= "flex"
        document.getElementById("notification").style.backgroundColor= " tomato"
        document.getElementById("text").innerText = "Enter valid phone with country code"
        
        //alert("enter valid phone with country code");
    } else {
        //alert("restration complete")
        document.getElementById("notification").style.display = "flex"
        document.getElementById("notification").style.backgroundColor = " rgb(123, 205, 178)"
        document.getElementById("text").innerText = "Registration Successful!!!"
    }
}

