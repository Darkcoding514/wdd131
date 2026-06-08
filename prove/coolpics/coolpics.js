let button = document.querySelector('button');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('a')

button.addEventListener('click', openMenu);


var clicked = false;

function openMenu() {

    if (clicked === false) {
        
        nav.style.display = "grid";
        nav.style.justifyContent = "center";
        nav.style.gap = "15px";
        
        clicked = true;
        links.forEach(link => {
            link.style.color = "white";
        });
        }

    else if (clicked === true) {
        nav.style.display = "";
        nav.style.justifyContent = "";
        nav.style.gap = "";
        
        clicked = false;
        } 


        //

    }         
                    