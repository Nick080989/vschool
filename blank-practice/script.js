function Car(make, model, year, honkSound) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let jeep = new Car("Jeep", "Cherokee", 1995, "Honk!");

let mazda = new Car("Mazda", "Miata", 2024, "Beep!");

Car.prototype.honk = function() {
    console.log(this.honkSound);
}

jeep.honk();
mazda.honk();
