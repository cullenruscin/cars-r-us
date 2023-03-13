import { Generate } from "./Generate.js";

const container = document.querySelector("#container");

const renderHTML = () => {
    container.innerHTML = Generate();
}

renderHTML();

document.addEventListener("order", event => {
    renderHTML();
})