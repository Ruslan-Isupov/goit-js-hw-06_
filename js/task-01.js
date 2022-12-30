const listOfCategories = document.getElementById('categories') 
console.log("Number of categories:",listOfCategories.children.length)
const listOfItems = document.querySelectorAll('.item')
function showItems (items) {
   return items.forEach(item => {

  console.log("Category:",item.firstElementChild.textContent)
  console.log("Elements:",item.lastElementChild.children.length)
       
})

}
console.log(showItems(listOfItems))
// undefined только бы убрать