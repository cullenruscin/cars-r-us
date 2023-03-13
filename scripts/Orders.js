import { getPaints, getInteriors, getWheels, getTechnologies, getOrders } from "./database.js";

const paints = getPaints();
const interiors = getInteriors();
const wheels = getWheels();
const technologies = getTechnologies();

const populateOrder = (order) => {
    const foundPaint = paints.find(paint => {
        return paint.id === order.paintId;
    })

    const foundInterior = interiors.find(interior => {
        return interior.id === order.interiorId;
    })

    const foundWheel = wheels.find(wheel => {
        return wheel.id === order.wheelId;
    })

    const foundTechnology = technologies.find(technology => {
        return technology.id === order.technologyId;
    })

    let calculate = foundPaint.price + foundInterior.price + foundWheel.price + foundTechnology.price;

    let totalCost = calculate.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>Order #${order.id} cost ${totalCost} and was placed on ${order.timestamp}</li>`
}

export const Orders = () => {
    const orders = getOrders();
    let html = '<ul>';
    const listItems = orders.map(populateOrder);
    html += listItems.join('');
    html += '</ul>';
    return html;
}