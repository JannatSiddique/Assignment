"use strict";
function carDetails(manufacturer, model, ...otherDetails) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    otherDetails.forEach(detail => {
        const [key, value] = detail;
        carInfo[key] = value;
    });
    return carInfo;
}
// Storing car information
const carInformation = carDetails('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);
// Display the Object with car details
console.log(carInformation);
