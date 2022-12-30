let value = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counterOfValue = document.querySelector('#value');

increment.addEventListener("click", event => {
    value += 1;
    counterOfValue.textContent = value
})
decrement.addEventListener("click", event => {
    value -= 1;
    counterOfValue.textContent = value;
   
})
