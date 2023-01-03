const body = document.querySelector ("body")
const changeBgcolor = document.querySelector(".change-color")
const valueOfSpan = document.querySelector(".color")

changeBgcolor.addEventListener("click", e => {
  
    const valueOfColor = getRandomHexColor()
    valueOfSpan.textContent = valueOfColor
    body.style.backgroundColor = valueOfColor
   
   



})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const body = document.querySelector ("body")
// const changeBgcolor = document.querySelector(".change-color")
// const valueOfSpan = document.querySelector(".color")
// // const widget = document.querySelector(".widget")
// changeBgcolor.addEventListener("click", e => {
  
//     const valueOfColor = getRandomHexColor()
//   valueOfSpan.textContent = valueOfColor;
//   const color = valueOfColor.toString()
//   console.log(color)
//     body.style.backgroundColor = valueOfColor.toString()
//     // body.style.backgroundColor = `${ valueOfColor }`
   



// })

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
