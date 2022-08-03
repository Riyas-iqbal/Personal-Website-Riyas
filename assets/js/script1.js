function namecheck() {
    var name1 = document.getElementById("name").value;
    var number = 0;
    number = /\d/.test(name1);
    if (number == 0) {
        document.getElementById("errorname").innerHTML = ""
    } else {
        document.getElementById("errorname").innerHTML = "Name Cannot Contain Number!"
    }
}

function emptynamecheck(){
    var name1 = document.getElementById("name").value;
    if (name1 == "") {
        document.getElementById("errorname").innerHTML = "Name shoudnt be empty"
    }else {
        if(/^[a-zA-Z]+$/.test(name1) || name1.indexOf(' ') >= 0){
            document.getElementById("errorname").innerHTML = " "
        }else{
            document.getElementById("errorname").innerHTML = "invalid Name!"
        }
    }
}


function checkphnoblur(){
    var number = document.getElementById("phno").value
    var l = number.length
    if(l==0){
        document.getElementById("errorphno").innerHTML = "Enter Your Phone Number"
    }else if(l < 10){
        document.getElementById("errorphno").innerHTML = "Phone Number Should Contain 10 Digits"
    }else if(l > 10){
        document.getElementById("errorphno").innerHTML = "Phone Number Shouldnt Contain More Than 10 Number"
    }else {
        if(/^[0-9]+$/.test(number)){
            document.getElementById("errorphno").innerHTML = ""
        }else{
            document.getElementById("errorphno").innerHTML = "Phone Number Should only contain Numbers"
        }
    }

}

function checkphno(){
    var number = document.getElementById("phno").value
    if(/^[0-9]+$/.test(number)){
        document.getElementById("errorphno").innerHTML = ""
    }else{
        document.getElementById("errorphno").innerHTML = "Phone Number Should only contain Numbers"
    }

}
