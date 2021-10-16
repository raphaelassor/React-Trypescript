const oldCivic = {
    name: 'Civic',
    year: 2000,
    isBroken: true,
    summary() {
        return `this is a summary `
    },
    origin: 'CN'
}

//  OVERHEAD IN THE ANNOTATION OF THE VEHICLE ARGUMENT 
const printVehicle = (vehicle: { name: string, year: number, isBroken: boolean }): void => {
    console.log(vehicle.isBroken)
    console.log(vehicle.year)
    console.log(vehicle.name)
}

printVehicle(oldCivic)

// =====================================================================

// INTERFACE IS A MINIMAL REQUIREMENT - OBJECTS MUST HAVE THE PROPERTIES IN THE INTERFACE BUT CAN HAVE MORE 
interface Vehicle {
    name: string;
    year: number;
    isBroken: boolean;
    summary(): string;

}

const printVehicleShort = (vehicle: Vehicle): void => {
    console.log(vehicle.isBroken)
    console.log(vehicle.year)
    console.log(vehicle.name)
}

printVehicleShort(oldCivic)

// =====================================================================


interface Reportable {
    summary(): string
}

const oldDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `${this.sugar} grams of sugar, ${this.color} color`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(oldDrink)