
const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const idContainer = document.querySelector("#idContainer");
const codeContainer = document.querySelector("#codeContainer");
const id = document.querySelector("#id");
const code = document.querySelector("#code");
const output = document.querySelector("#output");

function updateidField() {
  const value = ticketType.value;
    // console.log(value)
    
  if (value === 'discount') {
    idContainer.style.display = "flex";
    codeContainer.style.display = "none";
    id.required = true;
    code.required = false;
  } else if (value === 'normal') {
    idContainer.style.display = "none";
    codeContainer.style.display = "flex";
    id.required = false;
    code.required = true;
  } else {
    idContainer.style.display = "none";
    codeContainer.style.display = "none";
    id.required = false;
    code.required = false;
  }
}


ticketType.addEventListener("change", updateidField);
updateidField();


function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
    console.log("form submitted");
  event.preventDefault(); //normally not used here, but we have no backend, so.
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const availableDate = form.availableDate.value;

  const idnum = form.id.value.trim();
  const codenum = form.code.value.trim();



if (type === "discount" && !idnum) {
    output.textContent = "Please add your student ID number!!."
    return;
  }
  
if (type == "discount" && idnum.length < 9) {
    output.textContent = "Id needs to be atleast 9 characters long."
    return;
}
if (type == "normal" && codenum !== "EVENT131") {
    output.textContent = "Invalid access code."
    return;
}




  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    console.log("past date")
    return;
  } else {
    console.log(isPastDate(availableDate))
  }


  if (type === "discount") {
    output.innerHTML = `
    <h2>Event Ticket Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${availableDate}</p>
    <p>Ticket Type: ${type}</p>
    <p>Student ID: ${idnum}</p>
    `;
  } else if (type === "normal") {
    output.innerHTML = `
    <h2>Event Ticket Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${availableDate}</p>
    <p>Ticket Type: ${type}</p>
    <p>Access Code: ${codenum}</p>
    `;
  }

  form.reset(); //empties form and then updates the notes field
  updateidField();
});
          