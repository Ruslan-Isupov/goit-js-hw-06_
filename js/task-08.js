
const form = document.querySelector(".login-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
 const eventElements = e.currentTarget.elements
   if (eventElements.email.value === "" || eventElements.password.value === "") {
      
      return  alert("You need to fill all fields")
    } 
    
    createNewobject(e)
  
 
 e.currentTarget.reset();
})
function createNewobject(e) {
      const  {
       elements: { email  ,password }
      } = e.currentTarget
   const objectSubmit = {
    email : `${email.value}`,
      password: ` ${password.value}`
    
   }
    
    console.log(objectSubmit) 
}

