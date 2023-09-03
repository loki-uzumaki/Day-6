// 1.

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPGMovies(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");

// Example array of Movie instances
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG"),
    new Movie("Movie4", "Studio4", "PG13"),
];

// An array of PG-rated movies
const pgMovies = Movie.getPGMovies(moviesArray);

console.log(casinoRoyale);
console.log(pgMovies);


// 2.


class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
}

// Example usage:
const myCircle = new Circle(2.5, "blue");
console.log(myCircle.toString());
console.log(`Area: ${myCircle.getArea()}`);
console.log(`Circumference: ${myCircle.getCircumference()}`);



// 3.


class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greet() {
        console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }
}

// Example usage:
const person1 = new Person("lokesh", "kumar", 23, "lokeshkumar@yahoo.com");
person1.greet();
console.log(person1.email);

// Updating the email
person1.setEmail("lokeshkumar@yahoo.com");
console.log(person1.email);



// 4.


class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
        const fare = this.baseFare +
            (distanceInKilometers * this.costPerKilometer) +
            (timeInMinutes * this.costPerMinute);
        return fare;
    }
}

// Example usage:
const calculator = new UberPriceCalculator(5, 1.5, 0.2); // Base fare: $5, $1.5 per kilometer, $0.2 per minute
const distance = 10; // 10 kilometers
const time = 20; // 20 minutes
const totalPrice = calculator.calculatePrice(distance, time);
console.log(`The estimated Uber price is $${totalPrice}`);