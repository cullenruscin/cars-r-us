import { getWheels } from "./database.js";

const wheels = getWheels();

export const Wheels = () => {
    let html = '<h2>Wheels</h2>';

    html += '<select id="wheels">';
    html += '<option value="0">Choose a wheel type</option>';

    const options = wheels.map(wheel => {
            return `<option value="${wheel.id}">${wheel.type}</option>`;
        }
    )

    html += options.join("");
    html += '</select>';

    return html;

}