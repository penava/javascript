const para = document.querySelector("p");

console.log(para.innerText);

para.innerText += " ninje su super";

const paras = document.querySelectorAll("p");

paras.forEach(para => {

    console.log(para.innerText);
})

const content = document.querySelector('.content');

console.log(content.innerHTML);

content.innerHTML += "<h2>This is new h2</h2>";

const people = ['mario', 'luigi', 'joshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.thenetninja.com");
link.innerText = "the netninja web";


//bojanje teksta ovisno o tekstu
const cont = document.querySelectorAll('p');

cont.forEach(p => {
    console.log(p.textContent);
    if(p.textContent.includes("error"))
    {
        p.classList.add("error");
    }
    else if(p.textContent.includes("success"))
    {
        p.classList.add("success");
    }

});


//toggliranje klasa

const title = document.querySelector(".title");

title.classList.toggle("test");