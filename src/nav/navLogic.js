import { displayHome } from "../page/home"
import { displayMenu } from "../page/menu"
import { displayAbout } from "../page/about"

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