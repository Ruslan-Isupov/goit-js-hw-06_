const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
// const createIngridients = 
function createIngridients(ingredients) {
  return ingredients.map(element => {
    let itemOfList = document.createElement('li');
    itemOfList.textContent = element;
    itemOfList.classList.add("item")

    console.log(itemOfList)
    listOfIngredients.append(itemOfList)
  
  })

}
createIngridients(ingredients)
// Додати всі одразу ?
