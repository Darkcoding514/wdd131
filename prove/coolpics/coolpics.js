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
                    

    //  modal: https://wddbyui.github.io/wdd131/images/norris-full.jpg

const images = document.querySelectorAll('.imgcard');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listeners for opening the modal
images.forEach(image => {
    image.addEventListener('click', openModal);});

function openModal(e) {
    
// Code to show tha modal  - Use event parameter 'e'   
    console.log(e)   
    const img = e.target //get the img we click on
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full') //soo this will replace the file names (of imgs) that are 'sm' (small) with 'full' (large)

    modalImage.src = full;

    modal.showModal(); //shows the modal :)
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// also close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});