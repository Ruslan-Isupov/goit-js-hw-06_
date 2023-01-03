const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
const createIngridients = 
  ingredients.map(element => {
   
    let itemOfList = document.createElement('li');
      
  itemOfList.textContent = element;
  itemOfList.classList.add("item");

    return itemOfList
  })
  listOfIngredients.append(...createIngridients)


 
  
  
   
  

