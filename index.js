
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then(res => res.json())
    .then(data => oneOrTwoParter(data))

    // const allJokeBtn = document.getElementById("all-joke-filter")
    // const safeModeBtn = document.getElementById("safe-mode-filter")
    // const getJokeBtn = document.getElementById("new-joke-button")
    // getJokeBtn.addEventListener("click",() => getNewJoke)

})

//callback functions 

function oneOrTwoParter (data){

const lineOne = document.getElementById("line-one")
const lineTwo = document.getElementById("line-two")
if (data.type === "single"){
    lineOne.textContent = data.joke

}else 
    lineOne.textContent = data.setup
    lineTwo.textContent = data.delivery
}


// function makeAllJokesAvail(){

// }

// const getNewJoke = () => {

//  const lineOne = document.getElementById("line-one")
//  const lineTwo = document.getElementById("line-two")

// fetch("https://v2.jokeapi.dev/joke/Any?")
// .then(res => res.json())
// .then(data => oneOrTwoParter(data)

// )}

// function safeMode() {
