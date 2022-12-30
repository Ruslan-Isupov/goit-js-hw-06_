
const form = document.querySelector(".login-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const  {
       elements: { email  ,password }
    } = e.currentTarget
   
    if (email.value === "" || password.value === "") {
      
      return  alert("You need to fill all fields")
    } 
 
    const objectSubmit = {
    email : `${email.value}`,
    password : ` ${password.value}`,
    }
  
 console.log(objectSubmit)
e.currentTarget.reset();
})
// console.log(objectSubmit)
