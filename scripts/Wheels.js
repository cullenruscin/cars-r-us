import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "change",
    (e) => {
        if (e.target.id === "wheels") {
            setWheels(parseInt(e.target.value));
        }
    }
)


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