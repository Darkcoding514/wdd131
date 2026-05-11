



const menu = document.querySelector("nav");
const btn = document.querySelector(".menu-btn");


btn.addEventListener("click", toggleMenu);

// could have done anonymous function also. which is function() {}, and you put code in brackets.
// Not as effective though, because you couldn't call that elsewhere.


function toggleMenu() {
    // Toggle the class "hide", add/remove that class (default is hidden)
    menu.classList.toggle('hide');

    // plays *animation* by simply adding/removing the "change" class (default doesn't have the class)
    btn.classList.toggle('change');

    

}