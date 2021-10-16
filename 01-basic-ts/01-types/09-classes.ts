class Car {

    constructor(public color: string) {

    }
    public drive(): void {
        console.log('VOOM VOOM')
    }
    protected honk(): void {
        console.log('HONK HONK')
    }
}

const honda = new Car('blue');
honda.drive();
// cannot access protected. only subclasses 
// honda.honk() 

class SportsCar extends Car {

    constructor(public seats: number, color: string) {
        super(color)
    }
    drive(): void {
        console.log('DRIVING!')
    }
    honk() {
        console.log('HONKING! ')
    }
    private accelerate(speed: number): void {
        console.log('accelerating')
    }
}

const ferrari = new SportsCar(2, 'blue')

ferrari.honk()
//PRIVATE!!
// ferrari.accelerate()
