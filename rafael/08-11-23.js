// EX 1 Ստեղծել երկու շրջան, 5 և 7 շառավիղներով, հաշվել շրջանագծերի մակերեսները և երկարությունները

function Circle (radius) {
    this.radius = radius;
    this.area = () => this.radius * this.radius * Math.PI ;
    this.circumference = () => 2 * this.radius * Math.PI;
}

let circle1 = new Circle(5);
let circle2 = new Circle(7);

let area1 = circle1.area();
let area2 = circle2.area();

let circumference1 = circle1.circumference()
let circumference2 = circle2.circumference()

console.log(`Circle 1 - Radius: ${circle1.radius}, Area: ${area1}, Circumference: ${circumference1}`);
console.log(`Circle 2 - Radius: ${circle2.radius}, Area: ${area2}, Circumference: ${circumference2}`);


// EX 4 Ստեղծել կառուցիչ որը կստեղծի հետևյալ տիպի օբյեկտներ


function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(amount) {
      this.speed += amount;
    }
  
    this.brake = function(amount) {
      this.speed -= amount;
    }
  
    this.status = function() {
      return this.brand + " running at " + this.speed + " km/h";
    }
  }
  
  const fordCar = new Car("Ford")
  const bmwCar = new Car("BMW")
 
  fordCar.accelerate(150)
  console.log(fordCar.status());
  
  bmwCar.accelerate(160)
  console.log(bmwCar.status());
  
  fordCar.brake(20); 
  console.log(fordCar.status());
  

  // EX 3 

  function User (name,birthday,proffesion,password) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.proffesion = proffesion
    this.password = password;
  }

  let user1 = new User('Aram','1990-01-01','Doctor','1234');
  let user2 = new User('Ani','2000-02-02', 'Teacher','abcd');

  this.calcAge = function() {
    const currentDate = new Date()
    const birthYear = this.birthday.getFullYear()
    const currentYear = currentDate.getFullYear()
    const age = currentYear - birthYear
    return age
  }

  let ageAni = user2.calcAge();





  // EX 5 
  // Геттеры используются для чтения значений, а сеттеры - для записи значений.
