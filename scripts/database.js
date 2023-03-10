
const database = {
    paints: [
        { id: 1, color: "Silver", price: 399.99 },
        { id: 2, color: "Midnight Blue", price: 599.99 },
        { id: 3, color: "Firebrick Red", price: 699.99 },
        { id: 4, color: "Spring Green", price: 499.99 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 1249.99 },
        { id: 2, type: "Charcoal Fabric", price: 1249.99 },
        { id: 3, type: "White Leather", price: 2499.99 },
        { id: 4, type: "Black Leather", price: 2499.99 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 999.99 },
        { id: 2, type: "17-inch Pair Radial Black", price: 999.99 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1249.99 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1249.99 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 99.99 },
        { id: 2, package: "Navigation Package", price: 249.99 },
        { id: 3, package: "Visibility Package", price: 499.99 },
        { id: 4, package: "Ultra Package", price: 649.99 }
    ],
    orders: [
        // id, paintId, interiorId, wheelId, technologyId
        {}
    ],
    builder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}));
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}));
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}));
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}));
}

export const setPaint = (id) => {
    database.builder.paintId = id;
}

export const setInterior = (id) => {
    database.builder.interiorId = id;
}

export const setWheels = (id) => {
    database.builder.wheelId = id;
}

export const setTechnology = (id) => {
    database.builder.technologyId = id;
}