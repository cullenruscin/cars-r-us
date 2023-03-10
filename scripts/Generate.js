import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Wheels } from "./Wheels.js";
import { Technologies } from "./Technologies.js";

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
    `;
}