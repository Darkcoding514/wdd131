

let title = document.querySelector("h1");
// finds the first h1
title.textContent = "Web Page Components";
// OR    document.querySelector("h1").textContent = "Web Page Components";
console.log(title);



// document.querySelector("#topics").style.color = "green";
// OR;
const topics = document.querySelector("#topics");
topics.style.color = "red";

const wrapper = document.getElementById("content");
wrapper.style.backgroundColor = "lightblue";


let list = document.querySelector('.list');
list.style.border = "3px solid black"; // will only do the first one unless it's FOR looped.

let para = document.querySelector('p');
// para.style.color = "blue";
para.style.fontSize = "2em";

para.classList.add("background");

const image = document.querySelector('img');
// first image

image.setAttribute('src', 'images/new_logo.png');
// so this replaces src's value with the new logo path
