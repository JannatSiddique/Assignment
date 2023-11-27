function carDetails(manufacturer: string, model: string, ...otherDetails: [string, any][]): Record<string, any> {
    const carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    otherDetails.forEach(detail => {
        const [key, value] = detail;
        carInfo[key] = value;
    });

    return carInfo;
}
const carInformation = carDetails('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);
console.log(carInformation);

