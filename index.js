// Write your code here!

const main = document.getElementById("main");
main.removeAttribute('id');


const newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
var body = document.querySelector('body');
body.appendChild(newHeader)
document.getElementsByTagName("h1")[0].innerHTML="Momo is the champion!";






