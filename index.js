
document.addEventListener("DOMContentLoaded", () => {
  
     
     const allJokeBtn = document.getElementById("all-joke-filter")
     const safeModeBtn = document.getElementById("safe-mode-filter")
     const getJokeBtn = document.getElementById("new-joke-button")
     const easterEgg = document.getElementById("easter-egg")
     const programming = document.getElementById("programming-filter")
     const spooky = document.getElementById('spooky-filter')
     const meme = document.getElementById('meme-fetch')

     getJokeBtn.addEventListener("click",() => {fetchJoke(jokeUrl), fetchMeme(meme)})
     safeModeBtn.addEventListener("click", (e)=> {changeColor(e) , jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"})
     allJokeBtn.addEventListener("click", (e)=> {changeColor(e), jokeUrl = "https://v2.jokeapi.dev/joke/Any?"})
     easterEgg.addEventListener("mouseover", ()=> alert("Thank you for checking out our page. We greatly appreciate the public APIs that made this possible"))
     programming.addEventListener('click', (e) => {changeColor(e) , jokeUrl = 'https://v2.jokeapi.dev/joke/Programming'})
     spooky.addEventListener('click', (e) => {changeColor(e), jokeUrl="https://v2.jokeapi.dev/joke/Spooky"})
   
    
 // global variables
 
 let jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"
 
 
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
      
//       element.data.memes.forEach(element => randomItems(element))
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


 function changeColor(e){
    e.target.style.color = "blue";
 }})

 image_array = [
     'image1.jpeg',
     'image2.jpeg',
     '3.jpeg',
     '4.jpeg',
     '5.jpeg',
     '6.jpeg',
     '7.jpeg',
     '8.jpeg',
     '9.jpeg',
     '10.jpeg',
     '11.jpeg',
     '12.jpeg',
     '13.jpeg',
     '14.jpeg',
     '15.jpeg',
     '16.jpeg'
     
     
 ]

 function get_random_image(){
     random_index = Math.floor(Math.random() * image_array.length)
     selected_image = image_array[random_index]

     document.getElementById('image_tag').src = `./Images2/${selected_image}`
    const memeLand = document.getElementById('meme-land')
    const imageTag = document.getElementById('image_tag')
    memeLand.append(imageTag)
 }


  
