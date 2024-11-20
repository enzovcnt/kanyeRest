const citation = document.querySelector(".quote");
const button = document.querySelector(".button");


function getQuote() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => {
            citation.innerHTML = data.quote; //Why underline = Unresolved variable quote ?
            console.log(citation.innerHTML);
        })
        .catch(err => console.log(err));
}

getQuote();

button.addEventListener("click", getQuote);
