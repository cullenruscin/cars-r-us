import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

document.addEventListener(
    "change",
    (e) => {
        if (e.target.id === "technologies") {
            setTechnology(parseInt(e.target.value));
        }
    }
)

export const Technologies = () => {
    let html = '<h2>Technologies</h2>';

    html += '<select id="technologies">';
    html += '<option value="0">Choose a technology package</option>';

    const options = technologies.map(technology => {
            return `<option value="${technology.id}">${technology.package}</option>`;
        }
    )

    html += options.join("");
    html += '</select>';

    return html;

}