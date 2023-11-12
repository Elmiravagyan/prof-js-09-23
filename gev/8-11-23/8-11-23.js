// Advanced JS: Constructors/Prototype

// Ex1

// Ստեղծել Կառուցիչ(constructor) շրջան(circle) որը կունենա մեթոդներ area, circumference և radius հատկությունը(property):
// Ստեղծել երկու շրջան, 5 և 7 շառավիղներով, հաշվել շրջանագծերի մակերեսները և երկարությունները։

function Circle(radius) {
    this.radius = radius
    this.area = function () {
        return Math.PI * Math.pow(radius, 2)
    }
    this.circumference = function () {
        return 2 * Math.PI * radius
    }
}
let circle5 = new Circle(5)
let circle7 = new Circle(7)

console.log(circle5.area())
console.log(circle7.circumference())

// Ex2

// Ստեղծել կառուցիչ քառանկյուն, որը կունենա մեթոդներ պարագիծը և մակերեսը հաշվելու համար։ 
// Կառուցիչը կունենա նաև մեթոդ քառանկյան տիպը որոշելու համար (ուղղանկյուն, շեղանկյուն, քառակուսի կամ այլ)։
// Ստեղծել երկու այլ կառուցիչներ որոնք կժառանգվեն քառանկյուն կլասից՝ ուղղանկյուն և շեղանկյուն։

function Quadrilateral(sideA, sideB, sideC, sideD, angleA, angleB, angleC, angleD, diagonalOne, diagonalTwo, diagonalAngle) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
    this.sideD = sideD
    this.angleA = angleA
    this.angleB = angleB
    this.angleC = angleC
    this.angleD = angleD
    this.diagonalOne = diagonalOne
    this.diagonalTwo = diagonalTwo
    this.diagonalAngle = diagonalAngle

    this.perimeter = function () {
        return sideA + sideB + sideC + sideD
    }

    this.area = function () {
        return Math.floor(1 / 2 * diagonalOne * diagonalTwo * Math.sin(diagonalAngle * Math.PI / 180))
    }

    this.typeQuadrilateral = function () {

        if (sideA === sideB && sideA === sideC && sideA === sideD && angleA === 90 && angleB === 90 && angleC === 90 && angleD === 90) {
            return "Quadrilateral is Square"
        } else if (sideA === sideC && sideA !== sideB && sideB === sideD && angleA === 90 && angleB === 90 && angleC === 90 && angleD === 90) {
            return "Quadrilateral is Rectangle"
        } else if (sideA === sideB && sideA === sideC && sideA === sideD && angleA === angleC && angleA !== angleB && angleB === angleD) {
            return "Quadrilateral is Rhombus"
        }
    }
}

let tetragon = new Quadrilateral(10, 15, 10, 15, 90, 90, 90, 90, 15, 15, 60)
let pentagon = new Quadrilateral(15, 15, 15, 15, 60, 120, 60, 120, 15, 15, 60)

console.log(tetragon.typeQuadrilateral())
console.log(pentagon.typeQuadrilateral())

// Ex3

// Ստեղծել User կլաս որը կպարունակի տվյալներ ծննդյան ամսաթվի, անունի ու մասնագիտության մասին։ ՈՒնենալ մեթոդ որը կվերադարձնի տարիքը։

// Դիցուք ունեք Ani և Aram արդեն ստեղծված User-ներ
// Առաջացրեք այնպիսի իրավիճակ որ Ani.getName() ֆունկցիան վերադարձնի Aram չնայած որ ստեղծելիս name-ը սահմանել եք Ani

// Ենթադրենք թե ծրագրավորողը մոռացել է ինչ-որ մեթոդ User տիպը սահմանելիս ու այն այլևս չեք կարող փոխել, 
// սակայն ունեք user1-ը ստեղծված User ֆունկցիայի միջոցով, ինչ տարբերակ կառաջարկեք մեթոդն ավելացնելու համար։
// Իսկ ին՞չ, եթե անփույթ ծրագրավորողը User կլասի վրա գրել է այնպիսի մեթոդ, 
// որը սխալմամբ վերադարձնում է user-ի password-ը ու դուք արդեն շատ օբյեկտներ եք ստեղծել այդ կլասի միջոցով, ինչպես լուծել այս խնդիրը։

function User(birthyear, name, profession) {
    this.birthyear = birthyear
    this.name = name
    this.profession = profession

    this.howOld = function () {
        return new Date().getFullYear() - birthyear
    }
}
const ani = new User(2000, "Ani", "engineer")
const aram = new User(2002, "Aram", "software developer")

ani.__proto__.getName = function () { return aram.name }
console.log(ani)
console.log(aram)
console.log(ani.getName())


// Ex4

// Ստեղծել կառուցիչ որը կստեղծի հետևյալ տիպի օբյեկտներ

// let car = {
//   // properties
//   brand: "Ford",
//   speed: 0,

// 	// methods:
// 	accelerate: function(amount) {
// 	this.speed += amount;
// },
// 	brake: function(amount) {
// this.speed -= amount;
// },
// status: function() {
// 	return this.brand + " running at " + this.speed + " km/h";
// 	}
// }

function Cars(brand, speed) {
    this.brand = brand
    this.speed = speed

    this.accelerate = function (amount) {
        return this.speed += amount
    }
    this.brake = function (amount) {
        return this.speed -= amount
    }
    this.status = function () {
        return this.brand + " running at " + this.speed + " km/h"
    }
}

let car = new Cars("audi", 100)
console.log(car.status())

// Ex5

// ա) Բացատրել getter/setter-ների ու սովորական մեթոդների տարբերությունները։

// getter-ը ֆունկցիա է որը հնարավորուտյուն է տալիս միայն կարդալ հատկությունը
// իսկ setter-ով կարող ենք փոխել կամ ինչ-որ գործողություն անել հատկություն հետ