
document.addEventListener("DOMContentLoaded", () => {
    fetchJoke(jokeUrl)

    // fetchMeme(memeUrl)

    fetchMeme(memeUrl)
     
     const allJokeBtn = document.getElementById("all-joke-filter")
     const safeModeBtn = document.getElementById("safe-mode-filter")
     const getJokeBtn = document.getElementById("new-joke-button")
     const easterEgg = document.getElementById("easter-egg")
     const programming = document.getElementById("programming-filter")
     const spooky = document.getElementById('spooky-filter')
     const meme = document.getElementById('meme-fetch')
     meme.addEventListener('click', function(data){
         const image = document.createElement('img')
        image.src = data.url
         memeLanding.append(image)
         fetch(memeUrl)
         .then(res => res.json())
         .then(url=> {
             memeLanding.innerHTML = `<img src="${url}}"/>`
          
           
         })
     })

  
     
     const memeLanding = document.getElementById('meme-land')
     getJokeBtn.addEventListener("click",() => {fetchJoke(jokeUrl), fetchMeme(meme)})
     safeModeBtn.addEventListener("click", (e)=> {changeColor(e) , jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"})
     allJokeBtn.addEventListener("click", (e)=> {changeColor(e), jokeUrl = "https://v2.jokeapi.dev/joke/Any?"})
     easterEgg.addEventListener("mouseover", ()=> alert("Thank you for checking out our page. We greatly appreciate the public APIs that made this possible"))
     programming.addEventListener('click', (e) => {changeColor(e) , jokeUrl = 'https://v2.jokeapi.dev/joke/Programming'})
     spooky.addEventListener('click', (e) => {changeColor(e), jokeUrl="https://v2.jokeapi.dev/joke/Spooky"})
   
 
=======
    
 
     getJokeBtn.addEventListener("click",() => fetchJoke(jokeUrl))
     safeModeBtn.addEventListener("click", ()=> {alert("safe mode enabled", jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode")})
     allJokeBtn.addEventListener("click", ()=> {alert("caution: all jokes enabled"), jokeUrl = "https://v2.jokeapi.dev/joke/Any?"})
     easterEgg.addEventListener("mouseover", ()=> alert("Thank you for checking out our page. We greatly appreciate the public APIs that made this possible"))
     programming.addEventListener('click', () => {alert("programming jokes enabled"), jokeUrl = 'https://v2.jokeapi.dev/joke/Programming'})
     spooky.addEventListener('click', () => {alert("Spooky Jokes Enabled"), jokeUrl="https://v2.jokeapi.dev/joke/Spooky"})

 // global variables
 
 let jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"
 
 let memeUrl = "https://api.imgflip.com/get_memes"
 
 //callback functions 
 
//  const fetchMeme = (memeUrl) => {
//      fetch(memeUrl)
//      .then(res => res.json())
//      .then(data => renderMemes(data))
//  }
 
 const fetchJoke = (jokeUrl) => {
     fetch(jokeUrl)
     .then(res => res.json())
     .then(data => oneOrTwoParter(data))
 
 }
//  const renderMemes = (returnFromFetch) => {
//      returnFromFetch.data.memes.forEach(meme => {
//          ul = document.getElementById("meme-list")
//          img = document.createElement("img")
//          img.src = meme.url
//          img.width = 350
//          img.height = 350
         
//          ul.append(img)
//      })
//  }

//   function renderMemes(element){
//       console.log(element)
//       element.data.memes.forEach(meme => getRandomImages(meme))
//   }

//   function getRandomImages(meme){
//    const memeLanding = document.getElementById('meme-land')
//       const image = document.createElement("img")
//       image.src = meme.url
//       image.width = 100
//       image.height = 100
//       memeLanding.append(image)
//   }
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
 const content = {lineOne, lineTwo, categoryLine}

 function changeColor(e){
    e.target.style.color = "blue";
   
 }

image_array = [];