const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// SPECIFYING THE ORDER OF THE TYPES TO MAKE IT A TUPLE

const pepsi: [string, boolean, number] = ['brown', true, 40]

// OR : 

type Drink = [string, boolean, number] // type alias : create your own type 
const pepsiDrink: Drink = ['brown', true, 40]