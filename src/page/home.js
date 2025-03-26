import pizzaImage from "../image/pizza.jpg";
import "../css/home.css"

function displayHome() {
    const contentDiv = document.querySelector("#content");
    contentDiv.classList.add("content")

    const header = document.createElement("h1");
    header.textContent = "This is the best pizza in town!"

    const image = document.createElement("img");
    image.src = pizzaImage;
    image.alt = "Image of pizza"
    image.classList.add("pizza-Image")

    contentDiv.appendChild(header);
    contentDiv.appendChild(image);
    
}

export {displayHome}