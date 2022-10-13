var loginbtn = document.querySelector("#loginbtn");
var loginbtndiv = document.querySelector("#loginb");
var loginbox = document.querySelector("#loginDes");
var loginbtn2 = document.querySelector("#loginbtn3");

var userndiv=document.querySelector("#usernamediv");
var usernspace=document.querySelector("#usernamediv h2");
var usernspace1=document.querySelector("#usernamediv h3");
var logoutbtndiv=document.querySelector("#logoutb");
var logoutbtn=document.querySelector("#logoutbtn");

var err1 = document.getElementsByClassName("error")[0];
var err2 = document.getElementsByClassName("error")[1];

var booktic=document.querySelectorAll(".boktkt");

var hombtn=document.querySelector(".home_button");

loginbtn.addEventListener('click', function () {
    loginbox.style.display = 'block';
})

window.addEventListener('click', function (e) {
    if (e.target == loginbox) {
        loginbox.style.display = "none";
    }
})

function clearErrors() {
    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function submitForm() {
    var user = document.getElementById('usernm').value;
    var pass = document.getElementById('passwd').value;
    console.log(user);

    var regex=/^[a-zA-Z]([A-Za-z0-9.\-]){8,12}$/
    let result1 = regex.test(user);
    let result2 = regex.test(pass);

    // console.log(result1 + " " + result2);

    var result = true;
    clearErrors();

    if (!result1) {
        err1.innerHTML = "*Not in format(A-Z ,a-z ,0-9 and -)";
        result = false;
    }
    if (!result2) {
        err2.innerHTML = "*Not in format(A-Z ,a-z ,0-9 and -)";
        result = false;
    }
    else{
        usernspace.innerHTML=user;
        usernspace1.innerHTML=user.toUpperCase().charAt(0);
        user="";
        pass="";
        loginbox.style.display = "none";
        loginbtndiv.style.display = "none";
        userndiv.style.display='block';
        logoutbtndiv.style.display='block';
    }
    return result;

}

logoutbtn.addEventListener('click',()=>{
    userndiv.style.display='none';
    logoutbtndiv.style.display='none';
    usernspace.innerHTML='';
    loginbtndiv.style.display='block';

})

for(var i=0;i<booktic.length;i++){
    booktic[i].addEventListener('click',()=>{
        location.href='theater.html';
    })
}

hombtn.addEventListener('click',function(){
    location.href="Main.html";
})