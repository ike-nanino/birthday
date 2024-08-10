
 /*  Preloader    */

const preloader = document.querySelector("[data-preload]");
const body = document.body;


const loaded =  function() {
    
    setTimeout(function() {
    preloader.classList.add("loaded");
    body.classList.add("loaded");
    }, 2000);
}

 
window.addEventListener("load", loaded);

  
 