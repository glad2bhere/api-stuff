
let quotesDiv = document.getElementById("quotes");

fetch("https://api.kanye.rest")
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p>Here's your Ye Quote: "${quote.quote}" </p>`
})

let catButton = document.getElementById("give-cat")

catButton.addEventListener("click", evt => {

    let catDiv = document.getElementById("cat-pic")

    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<h2>Here is a picture of a cat!</h2>
            <img src="${cat.url}" alt="Kitty" />`
        });
    })

})
