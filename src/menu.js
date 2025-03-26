function displayMenu() {
    const contentDiv = document.querySelector("#content");

    const menuItems = ["Pizza", "Calzones", "Pasta"];
    const MenuUl = document.createElement("ul");
    for (let menuItem of menuItems) {
        const menuLi = document.createElement(ul);
        menuLi.textContent = menuItem;
        MenuUl.appendChild(menuLi);
    }

    contentDiv.appendChild(MenuUl);
}

export { displayMenu };