
const student = [
    {
        last: "Patten",
        first: "Jonathan"
    },
    {
        last: "Bombase",
        first: "Cory"
    },
    {
        last: "Carter",
        first: "Brayder"
    },
    {
        last: "Yagami",
        first: "Light"
    },
    {
        last: "Tron",
        first: "Mega"
    }
];
// instead of a database ^



let container = document.querySelector("#student_container");



//loops through each item of the array
student.forEach(function(item){
    let name = document.createElement("div");
    name.className = "format";


    let html = `
    <p class="details">${item.first}</p>
    <p class="details">${item.last}</p>
        <hr>
    `;

    // container.innerHTML += html;
    name.innerHTML = html;

    container.appendChild(name)
})



