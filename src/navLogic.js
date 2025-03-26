import { displayHome } from "./home"
import { displayMenu } from "./menu"
import { displayAbout } from "./about"

function clearSection() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

function pageSwitch(event) {
    clearSection();

    const clickedButtonID = event.target.id;
    if (clickedButtonID === "home") {
        displayHome();
    }
    else if (clickedButtonID === "menu") {
        displayMenu();
    }
    else if (clickedButtonID === "about") {
        displayAbout();
    }
}

export {pageSwitch};