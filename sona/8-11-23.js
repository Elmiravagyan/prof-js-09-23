//ex1 done
function Circle(radius) {
    if(new.target) {
        this.radius = radius;
        this.circumference = () => {
            return 2*Math.PI*this.radius;
        };
        this.area = () => {
           return Math.PI*this.radius**2;
        };
    } else {
        return new Circle(radius);
    }
   
}

let c1 = new Circle(5);
let c1A = c1.area();
let c1C = c1.circumference();

let c2 = new Circle(7);
let c2A = c2.area();
let c2C = c2.circumference();

//ex 2 done
function Quadrilateral(a, b, c, d, angle1, angle2, angle3, angle4, diagonal1, diagonal2, height, base) {
   if(new.target) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.angles = [this.ang1 = angle1, this.ang2 = angle2, this.ang3 = angle3, this.ang4 = angle4];
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
    this.height = height;
    this.base = base;
    
    this.perimeter = () => {
        return (this.a+this.b+this.c+this.d);
    };

    this.type = () => {
        if(this.perimeter() / 4 === this.a) {
           return (this.angles.includes(90)) ? "square" : "rhombus";
        } else {
            //ենթադրելով, որ կողմերը միգուցե խառը հերթականությամբ լինեն;
            let sides = [this.a, this.b, this.c, this.d];
            let first = sides[0];
            sides.splice(0,1);
            let nextEqual = sides.findIndex((item) => item === first);
            if(nextEqual === -1) {
                return "unspecified quadrilateral";
            } else {
                sides.splice(nextEqual,1);
            };
                
            if(sides[0] === sides[1]) {
                return (this.angles.includes(90)) ? "rectangle" : "parallelogram";
            } else {
                return "unspecified quadrilateral";
            };
        };
    };
   
    this.area = () => {
        switch(this.type()) {
            case "square":
                return this.a**2;
            case "rhombus":
                return 1/2*this.diagonal1*this.diagonal2;
            case "rectangle":
                let sides = [this.a, this.b, this.c, this.d];
                return (sides[0]*sides.find(side => side !== sides[0]));
            case "parallelogram":
                return this.height*this.base;
            case "unspecified quadrilateral":
                //ենթադրելով, որ կողմերն էլ, անկյուններն էլ ամեն դեպքում հերթականությամբ են տված, որ շատ չխճճվի ամեն ինչ :D :D
                let area1 = 0.5*this.a*this.b*Math.sin(this.ang1*(Math.PI/180));
                let area2 = 0.5*this.c*this.d*Math.sin(this.ang3*(Math.PI/180));
                return area1+area2;
        };
    };
   } else {
    return new Quadrilateral(a, b, c, d, angle1, angle2, angle3, angle4, diagonal1, diagonal2, height, base);
   }
}

let figure1 = new Quadrilateral(4,4,5,5,90,90,90,90)
// console.log(figure1.area())
// console.log(figure1.perimeter())
// console.log(figure1.type())

function Rectangle(a,b,c,d) {
  if(new.target) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.angles = [this.angle1 = 90, this.angle2 = 90, this.angle3 = 90, this.angle4 = 90];
  } else {
    return new Rectangle(a,b,c,d)
  }
}

function Rhombus(a, diagonal1, diagonal2, angle1, angle2, angle3, angle4) {
    if(new.target) {
        this.a = a;
        this.b = a;
        this.c = a;
        this.d = a;
        this.diagonal1 = diagonal1;
        this.diagonal2 = diagonal2;
        this.angles = [this.ang1 = angle1, this.ang2 = angle2, this.ang3 = angle3, this.ang4 = angle4];
    } else {
        return new Rhombus(a, diagonal1, diagonal2, angle1, angle2, angle3, angle4);
    }    
}

Rectangle.prototype.__proto__ = Quadrilateral;
Rhombus.prototype.__proto__ = Quadrilateral;

//ex3 done
function User(dob, name, profession) {
   if(new.target) {
     this.dob = dob;
     this.name = name;
     this.profession = profession;
     this.age = () => {
        let currentYear = +Date().split(" ")[3];
        let birthYear = +this.dob.split(".")[2];
        return currentYear-birthYear;
     };
   } else {
    return new User(dob, name, prof);
   }
}

//3.2 done?
let user1 = new User("1.11.2000", "Ani", "barista");
let user2 = new User("1.11.1999", "Aram", "chef");

user1.__proto__.getName = function() {
    return "Aram";
}

user1.getName();

//3.3 done
let user0 = new User("4.12.2000", "Sona", "translator")

user0.__proto__.getProf = function() {
    return this.profession;
}

//3.4 
/* եթե constructor-ը ստեղծելուց հետո ենք ավելացրել<<վատ>> մեթոդը,
օրինակ՝ նախորդ թասկի լուծման պես՝ user0.__proto__.getPassword = null կամ 
user0.__proto__.getPassword = function() {return "Confidential information"};

եթե հենց User-ի մեջ ա գրված, երևի պահել բոլոր արդեն ստեղծված օբյեկտները,
 վերասահմանել User-ը ու նորից վերահայտարարել բոլոր օբյեկտները
*/

//ex4 done
function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
    this.accelerate = (amount) => {
        this.speed += amount;
    };
    this.brake = (amount) => {
        this.speed -= amount;
    };
    this.status = () => {
        return this.brand + " running at " + this.speed + " km/h";
    };
}  

//ex5
/*
Ի տարբերություն սովորական մեթոդների՝ getter/setter-ները access ենք անում առանց փակագծերի՝
համապատասխանաբար արժեք ելքագրելու ու արժեք վերագրելու համար:

Չգիտեմ, էլ ինչ ասեմ :D բայց ձեռքի հետ հասկացա, որ getter/setter-ների հետ պրակտիկաս շատ քիչ ա, պետք ա պարապել :)
*/