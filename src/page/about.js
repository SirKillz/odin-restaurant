function displayAbout() {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "About Us:"
    contentDiv.appendChild(h1);

    const para = document.createElement("p");
    para.textContent = "Founded in 1929, we still keep our original recipe passed down from generation to generation.  Stop by and find out why we are the most loved pizza place in town!"
    contentDiv.appendChild(para);
}

export {displayAbout};