import faker from 'faker';

export class Company {
    name: string;
    catchPharse: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companyName()
        this.catchPharse = faker.company.catchPhrase()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }
}
