document.querySelector('H1').onclick = function() {
    alert('h1だよ。。');
}

var myImage = document.querySelector("img")

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/car.jpeg"){
        alert("yes")
        myImage.setAttribute("src",'images/goku.jfif');
    } else {
        alert("no")
        myImage.setAttribute("src",'images/car.jpeg');
    }
}


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("あなたの名前を入力してください");
    localStorage.setItem("name",myName);
    myHeading.textContent = "RWAはすごいよ" + myName ;
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem("name") ;
    myHeading.textContent = "RWAはすごいよね？" + storedName + "さん！" ;
}

myButton.onclick = function() {
    setUserName();
}