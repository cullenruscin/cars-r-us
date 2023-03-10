import { getInteriors } from "./database.js";

const interiors = getInteriors();

export const Interiors = () => {
    let html = '<h2>Interiors</h2>';

    html += '<select id="interiors">';
    html += '<option value="0">Choose an interior type</option>';

    const options = interiors.map(interior => {
            return `<option value="${interior.id}">${interior.type}</option>`;
        }
    )

    html += options.join("");
    html += '</select>';

    return html;

}