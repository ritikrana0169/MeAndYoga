var myFunction=document.querySelector(".theme-switch__checkbox");

myFunction.addEventListener("click",()=>{
    var element = document.body;
   element.classList.toggle("dark-mode");
    console.log("as");
})