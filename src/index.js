import { displayHome } from "./page/home";
import { applyNavStyle } from "./nav/navStyle";
import { pageSwitch } from "./nav/navLogic";



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