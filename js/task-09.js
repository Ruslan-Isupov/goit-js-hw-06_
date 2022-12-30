const body = document.querySelector ("body")
const changeBgcolor = document.querySelector(".change-color")
const valueOfSpan = document.querySelector(".color")

changeBgcolor.addEventListener("click", e => {
  
    const valueOfColor = getRandomHexColor()
    valueOfSpan.textContent = valueOfColor
    body.style.backgroundColor = valueOfColor
    // body.style.backgroundColor = `${ valueOfColor }`
   



})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
