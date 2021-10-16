const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 20,
        lng: 35
    },
    setAge(age: number): void {
        this.age = age
    }
}

const { age }: { age: number } = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile