const boxes = document.querySelector("#boxes");
const inputAmount = document.querySelector('[type="number"]')
const buttonCreation = document.querySelector('[data-create]')
const buttonDestruction = document.querySelector('[data-destroy]')


 
  
const size = {
  width : 20 , 
  height : 20 , 
}

buttonCreation.addEventListener("click", e => {
const amount = inputAmount.value

  createCollection(amount)
  getRandomHexColor()
})

 buttonDestruction.addEventListener("click", e => {

destroyCollection(e)
inputAmount.value = ""
size.width = 20;
size.height = 20;
// После destroy должно перезагружатся внутри самого, чтобы счетчик был в теперешнем значении
}) 

// let width = 30;
//   let height = 30;

function createCollection(amount) {

  for (let i = 0; i < amount ; i += 1 ) {
  size.width += 10;
  size.height += 10;
  const creation = `<div  style = " width:${size.width}px; height :${size.height}px; background-color:${getRandomHexColor()}"> </div> `
  boxes.insertAdjacentHTML("beforeend",creation)
  };
}
  function destroyCollection(e) {
    boxes.innerHTML = ""
    // inputAmount.value = ""
  }


  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
