// This is the main js file for the entire site. 
// (Yes, that might be obvious, but I'm over commenting to help new devs wanting to build out larger projects.)

// -- NAVIGATION -- 

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})