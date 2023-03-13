import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Wheels } from "./Wheels.js";
import { Technologies } from "./Technologies.js";
import { Orders } from "./Orders.js";
import { createOrder } from "./database.js";


document.addEventListener("click", e => {
    const itemClicked = e.target;
    if (itemClicked.id.startsWith("orderButton")) {
        createOrder();
    }
})

export const Generate = () => {
    return `
        <h1>Cars R' Us</h1>
        
        <article class="choices">
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section> 
        </article>

        <article>
            <button id="orderButton">Order</button>
        </article>

        <article>
            <h2>Orders</h2>
            ${Orders()}
        </article>
    `;
}