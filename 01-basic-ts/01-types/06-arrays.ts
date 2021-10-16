const carMakers = ['Ford', 'Fiat', 'Toyota']
const carMakersEmpty: string[] = []

const dates = [new Date(), new Date()]

const carsByMaker = [
    ['f150'],
    ['Corola']
]
const carsByMakerEmpty: string[][] = []

// inference with extracing values: 
const carName = carMakers[0]

const upperCarMakers = carMakers.map((car: string): string => car.toUpperCase())


const flexibleDates = [new Date(), 'July 4th']
const flexibleDatesEmpty: (string | Date)[] = []