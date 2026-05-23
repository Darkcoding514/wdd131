
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

let body = document.querySelector("body")
let text = document.querySelectorAll("h1, p, li")




function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png');
        console.log("dark")
        body.style.backgroundColor = "black"
        
        text.forEach(function(item){
            item.style.color = "white"
        })
    } else {
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');
        console.log("white")
        body.style.backgroundColor = "white"

        text.forEach(function(item){
            item.style.color = "black"
        })
    }
}           
                    