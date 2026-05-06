
let p = document.getElementById("intro");
p.style.backgroundColor = "#f2c556";


let em = document.querySelector("em");
em.style.backgroundColor = "#acbfcc";
em.textContent = "USS Voyager Starship";


let shipimg = document.createElement("img");
shipimg.setAttribute("src", "https://bit.ly/3RfG4sY");

let container = document.querySelector("#starship")
container.appendChild(shipimg)
// OR
// container.innerHTML = <img src="https://bit.ly/3RfG4sY">

shipimg.setAttribute("class", "rounded");
// OR shipimg.style.borderRadius = "10px";
