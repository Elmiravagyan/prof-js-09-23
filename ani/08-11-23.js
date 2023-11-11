// 1. Ստեղծել Կառուցիչ(constructor) շրջան(circle) որը կունենա մեթոդներ area, circumference և radius հատկությունը(property): 
// Ստեղծել երկու շրջան, 5 և 7 շառավիղներով, հաշվել շրջանագծերի մակերեսները և երկարությունները։

function Circle(radius){
    this.area = Math.PI * radius * radius
    this.circumference = Math.PI * 2 * radius
    // radius
}

let  circle1 = new Circle(5)
let  circle2 = new Circle(7)

// TODO Ճիշտ է


// 2. Ստեղծել կառուցիչ քառանկյուն, որը կունենա մեթոդներ պարագիծը և մակերեսը հաշվելու համար։ Կառուցիչը կունենա նաև մեթոդ քառանկյան տիպը որոշելու համար (ուղղանկյուն, շեղանկյուն, քառակուսի կամ այլ)։
//Ստեղծել երկու այլ կառուցիչներ որոնք կժառանգվեն քառանկյուն կլասից՝ ուղղանկյուն և շեղանկյուն։

function Quadrilateral(side1, side2, side3, side4, diaganal1, diaganal2, high, angle) {

    if (side1 === side2 && side2 === side3 && side3 === side4) {
                 this.areaOfSquare = side1 ** 2;
                 this.parimeterOfSquare = side1 * 4;
      } else if (high) {
                this.areaOfparallelogram = side1 * high;
                this.parimeterOfparallelogram = +side1 + +side2 + +side3 + +side4;
       
      } else if (angle && diaganal1 && diaganal2) {

        this.areaOfTable = 0,5 * diaganal1 * diaganal2 * Math.sin(angle);
        this.parimeterOfTable = +side1 + +side2 + +side3 + +side4;
        
    } else if (side1 === side3 && side2 === side4) {

        this.areaOfRectangle = side1 * side2;
        this.parimeterOfRectangle = +side1 + +side2 + +side3 + +side4;
    }

}

// TODO Ընդհանուր ճիշտ ա բայց պետք էր մեթոդներ գրել որոնք կհաշվեն մակերեսը, մյուս մեթոդն էլ տիպը վերադարձնելու համար
//  մեկ էլ երկրորդ մասը չես արել ոնց որ թէ սա նկատի ունեմ -> Ստեղծել երկու այլ կառուցիչներ որոնք կժառանգվեն քառանկյուն կլասից՝ ուղղանկյուն և շեղանկյուն։

// 3. Ստեղծել User կլաս որը կպարունակի տվյալներ ծննդյան ամսաթվի, անունի ու մասնագիտության մասին։ ՈՒնենալ մեթոդ որը կվերադարձնի տարիքը
   
function User(name, age, profession) {
    this.name = name,
    this.age = age,
    this.profession = profession,
    this.getAge = function () {
        return this.age
    }
    this.getName = function() {
        if(this.name === 'Ani') {
              return 'Aram'
        } else {
            return this.name
        }
    }
}

// TODO Ճիշտ է

// 4. Ենթադրենք թե ծրագրավորողը մոռացել է ինչ-որ մեթոդ User տիպը սահմանելիս ու այն այլևս չեք կարող փոխել, սակայն ունեք user1-ը ստեղծված User ֆունկցիայի միջոցով, ինչ տարբերակ կառաջարկեք մեթոդն ավելացնելու համար։

 // for example 
        
User.prototype.newCar = this.carName = 'BMW'


// TODO Ճիշտ է, բայց մեթոդ ֆունկցիա էլի




// 5. Իսկ ին՞չ, եթե անփույթ ծրագրավորողը User կլասի վրա գրել է այնպիսի մեթոդ, որը սխալմամբ վերադարձնում է user-ի password-ը ու դուք արդեն շատ օբյեկտներ եք ստեղծել այդ կլասի միջոցով, ինչպես լուծել այս խնդիրը։

User.prototype.removePassword = function () {
    this.password = 'unavailable'
}


// TODO Ճիշտ է



// 6. Ստեղծել կառուցիչ որը կստեղծի հետևյալ տիպի օբյեկտներ
// let car = {
//     // properties
//     brand: "Ford",
//     speed: 0,
  
//       // methods:
//       accelerate: function(amount) {
//       this.speed += amount;
//   },
//       brake: function(amount) {
//   this.speed -= amount;
//   },
//   status: function() {
//       return this.brand + " running at " + this.speed + " km/h";
//       }
//   }
  
function Car(brand, speed) {

    this.brand = brand,
    this.speed = speed,

    this.accelerate = function(amount) {
             this.speed += amount;
    },

   this.brake = function(amount) {
          this.speed += amount;
    },

  this.status = function() {
        return this.brand + " running at " + this.speed + " km/h";
     }
}


// TODO Ճիշտ է

// 7. ա) Բացատրել getter/setter-ների ու սովորական մեթոդների տարբերությունները։
 
 // getter
 // * օգտագործվում է օբյեկտի հատկության արժեքը ստանալու համար
 // * այն կանչվում է մեթոդից առաջ դնելով 'get' բառը նաեւ այն կանչվում է առանց ()

 // setter
 // * օգտագործվում է օբյեկտի հատկության արժեք հայտարարելու համար
 // * այն կանչվում է մեթոդից առաջ դնելով 'set' այն նույնպես կանչվում է առանց ()

 // * Js-ի հիմնական մեթոդները կարող են կատարել կամայական գործողություններ մինչդեռ getter/setter-ները թույլ են տալիս լրացուցիչ տրամաբանություն կատարել արժեքներ կարդալիս և գրելիս:

// TODO Ճիշտ է