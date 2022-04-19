
document.addEventListener("DOMContentLoaded", () => {
   fetchJoke(jokeUrl)
   fetchMeme(memeUrl)
    
    const allJokeBtn = document.getElementById("all-joke-filter")
    const safeModeBtn = document.getElementById("safe-mode-filter")
    const getJokeBtn = document.getElementById("new-joke-button")
    const easterEgg = document.getElementById("easter-egg")

    getJokeBtn.addEventListener("click",() => fetchJoke(jokeUrl))
    safeModeBtn.addEventListener("click", ()=> {alert("safe mode enabled", jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode")})
    allJokeBtn.addEventListener("click", ()=> {alert("caution: all jokes enabled"), jokeUrl = "https://v2.jokeapi.dev/joke/Any?"})
    easterEgg.addEventListener("mouseover", ()=> alert("Thank you for checking out our page. We greatly appreciate the public APIs that made this possible"))



})
// global variables

let jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"

let memeUrl = "https://api.imgflip.com/get_memes"

//callback functions 

const fetchMeme = (memeUrl) => {
    fetch(memeUrl)
    .then(res => res.json())
    .then(data => renderMemes(data))
}

const fetchJoke = (jokeUrl) => {
    fetch(jokeUrl)
    .then(res => res.json())
    .then(data => oneOrTwoParter(data))

}
const renderMemes = (returnFromFetch) => {
    returnFromFetch.data.memes.forEach(meme => {
        ul = document.getElementById("meme-list")
        img = document.createElement("img")
        memeName = document.getElementById("meme-name")
        img.src = meme.url
        img.width = 325
        img.height = 350
        
        ul.append(img)
    })
}
const oneOrTwoParter = (data) => {

const lineOne = document.getElementById("line-one")
const lineTwo = document.getElementById("line-two")
let categoryLine = document.getElementById("category")
categoryLine.textContent = `Catergory: ${data.category}`


if (data.type === "single"){
    lineOne.textContent = data.joke
    

}else 
    lineOne.textContent = data.setup
    lineTwo.textContent = data.delivery
    
}
