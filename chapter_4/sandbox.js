const ul = document.querySelector(".people");

const people = ["marko", "pero", "ivan", "elja"];

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
})

console.log(html);

ul.innerHTML = html;