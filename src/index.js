import { displayHome } from "./home";
import { applyNavStyle } from "./navStyle";
import { pageSwitch } from "./navLogic";



document.addEventListener("DOMContentLoaded", (event) => {
    displayHome();
    applyNavStyle();
})

const navButtons = document.querySelectorAll("button");
navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        pageSwitch(event);
    })
})