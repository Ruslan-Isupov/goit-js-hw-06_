const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

input.addEventListener("input", event => {
    
    let valueOfInput = Number(input.value)
    text.style.fontSize = `${ valueOfInput }px`
})