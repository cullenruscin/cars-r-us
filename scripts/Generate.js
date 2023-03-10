import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Wheels } from "./Wheels.js";
import { Technologies } from "./Technologies.js";

export const Generate = () => {
    return `
    ${Paints()}
    ${Interiors()}
    ${Wheels()}
    ${Technologies()}
    `;
}