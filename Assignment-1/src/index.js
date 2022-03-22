
import icon from "./bg.jpg" 
import {add , mult , display} from "./calc"

import "./index.css";
//console.log(mult(5,4));
console.log(add(3,4));

console.log(icon)

// const h1 = document.createElement("h1");
// h1.innerText = mult(5,4);
// h1.classList.add("redtext");



//  document.getElementById("root").appendChild(h1);
 

const img = document.createElement("img");
img.src = icon;
document.getElementById("img").append(img);

document.querySelector("#form").addEventListener("submit" , addnote);
var mynote = JSON.parse(localStorage.getItem("yourNotes")) ||  [];
function addnote(event){
    event.preventDefault();
    var note = document.querySelector("#write").value;

    mynote.push(note);

    localStorage.setItem("yourNotes" , JSON.stringify(mynote));
console.log(mynote);



display(mynote);
}


