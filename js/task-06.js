const input = document.querySelector("#validation-input")

const inputOfLength = Number(input.dataset.length)
    

input.addEventListener("blur", event => {
    
    if (inputOfLength === input.value.length) {
        input.classList.add("valid")
        input.classList.remove("invalid")
        
    }
    
    else {
        input.classList.add("invalid")
       input.classList.remove("valid")    }
    
})

