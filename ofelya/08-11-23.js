// Advanced JS: Constructors/Prototype

// Ex1

// Ստեղծել Կառուցիչ(constructor) շրջան(circle) որը կունենա մեթոդներ area, circumference և radius հատկությունը(property):

// Ստեղծել երկու շրջան, 5 և 7 շառավիղներով, հաշվել շրջանագծերի մակերեսները և երկարությունները։
function Circle(radius) {
    this.radius = radius
      this.area = function() {
     Math.PI* (this.radius * this.radius);
      }
    this.circumference = function() {
        2*Math.PI * this.radius;
 }
}
const circle1 = new Circle(5)
const circle2 = new Circle(7)

// TODO Ճիշտ է

// Ex2

// Ստեղծել կառուցիչ քառանկյուն, որը կունենա մեթոդներ պարագիծը և մակերեսը հաշվելու համար։ Կառուցիչը կունենա նաև մեթոդ քառանկյան տիպը որոշելու համար (ուղղանկյուն, շեղանկյուն, քառակուսի կամ այլ)։
// Ստեղծել երկու այլ կառուցիչներ որոնք կժառանգվեն քառանկյուն կլասից՝ ուղղանկյուն և շեղանկյուն։
function Quadrilateral (base, height) {
this.base = base,
this.height = height, 
this.area = function () {
return this.base* this.height
}
}

// TODO Կիսատ է


// Ex3

// Ստեղծել User կլաս որը կպարունակի տվյալներ ծննդյան ամսաթվի, անունի ու մասնագիտության մասին։ ՈՒնենալ մեթոդ որը կվերադարձնի տարիքը։
function User(birthday, name, specialty,) {
    this.birthday = birthday,
    this.name = name, 
    this.specialty = specialty, 
    Object.defineProperty(this, "age", {
        get ()  {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();

    }
});
}

// TODO Ճիշտ է

// Դիցուք ունեք Ani և Aram արդեն ստեղծված User-ներ
// Առաջացրեք այնպիսի իրավիճակ որ Ani.getName() ֆունկցիան վերադարձնի Aram չնայած որ ստեղծելիս name-ը սահմանել եք Ani
let userAni = new User("02.04.1995", "Ami", "docotr");
let userAram = new User("11.03.1997", "Aram", "singer")
userAni.__proto.getName =function() {
    return userAram.name
}

userAni.getName();

// TODO Ճիշտ է

// Ենթադրենք թե ծրագրավորողը մոռացել է ինչ-որ մեթոդ User տիպը սահմանելիս ու այն այլևս չեք կարող փոխել, սակայն ունեք user1-ը ստեղծված User ֆունկցիայի միջոցով, ինչ տարբերակ կառաջարկեք մեթոդն ավելացնելու համար։
let user1 = new User("07.10.21", "Silvi", "baby", "female")
User.prototype.getGender = function() {
    return this.gender
}
// Իսկ ին՞չ, եթե անփույթ ծրագրավորողը User կլասի վրա գրել է այնպիսի մեթոդ, որը սխալմամբ վերադարձնում է user-ի password-ը ու դուք արդեն շատ օբյեկտներ եք ստեղծել այդ կլասի միջոցով, ինչպես լուծել այս խնդիրը։

// TODO Սա էլ նույ վերևի խնդրի տրամաբանությամբ
delete User.prototype.getPassword

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

function Cars(brand, speed) { // հոգնակի պետք չի Car ուղակի
    this.brand = brand,
    this.speed = speed,

    this.accelerate = function(amount) {
         	this.speed += amount;
     };
         	this.brake = function(amount) {
        this.speed -= amount;
        };
         this.status= function() {
         	return this.brand + " running at " + this.speed + " km/h";
        	}
        }

// TODO Ճիշտ է


// Ex5

// ա) Բացատրել getter/setter-ների ու սովորական մեթոդների տարբերությունները։

// 1. getter/setter մեթոդներ են նախատեսված արժեքներ ստանալու և սահմանալու համար:

// TODO  ամենաարևորը պետք էր գրել թէ ինչով են տարբերվում սովորական մեթոդներից


 




