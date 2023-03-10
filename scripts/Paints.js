import { getPaints, setPaint } from "./database.js";

const paints = getPaints();

document.addEventListener(
    "change",
    (e) => {
        if (e.target.id === "paints") {
            setPaint(parseInt(e.target.value));
        }
    }
)

export const Paints = () => {
    let html = '<h2>Paints</h2>';

    html += '<select id="paints">';
    html += '<option value="0">Choose a paint color</option>';

    const options = paints.map(paint => {
            return `<option value="${paint.id}">${paint.color}</option>`;
        }
    )

    html += options.join("");
    html += '</select>';

    return html;

}