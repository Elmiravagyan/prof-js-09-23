// Advanced JS: Constructors/Prototype

// Ex1

// Ստեղծել Կառուցիչ(constructor) շրջան(circle) որը կունենա մեթոդներ area, circumference և radius հատկությունը(property):

// Ստեղծել երկու շրջան, 5 և 7 շառավիղներով, հաշվել շրջանագծերի մակերեսները և երկարությունները։


function Calc(radius) {
    this.circumference = 2 * (Math.PI) * radius
    this.radius = radius
    this.area = (Math.PI) * (radius * radius)
}


// const circle1 = new Calc(5)
// const circle2 = new Calc(7)

// console.log(circle1)
// console.log(circle2)

// TODO Ճիշտ է

// Ex2

// Ստեղծել կառուցիչ քառանկյուն, որը կունենա մեթոդներ պարագիծը և մակերեսը հաշվելու համար։ Կառուցիչը կունենա նաև մեթոդ քառանկյան տիպը որոշելու համար (ուղղանկյուն, շեղանկյուն, քառակուսի կամ այլ)։
// Ստեղծել երկու այլ կառուցիչներ որոնք կժառանգվեն քառանկյուն կլասից՝ ուղղանկյուն և շեղանկյուն։


function Quadrilateral(h ,w) {
    if(w > h) {
        this.type = 'rectangle'
        this.perimeter = h + h + w + w
        this.area = h * w
    }else if(w == h) {
        this.type = 'Square'
        this.perimeter = h + h + w + w
        this.area = h * w
    }else{
        this.type = 'this is not Quadrilateral'
    }
}


const quadrilateral1 = new Quadrilateral(10, 10)

console.log(quadrilateral1)

// let user1 = function User1() {

// }

// let user2 = function User2() {
    
// }
// quadrilateral1.__proto__.user1  = quadrilateral1 // 

// quadrilateral1.__proto__.user2  = quadrilateral1 // ?


// TODO Էրիկ ջան պարագիծն ու  մակերեսը ճիշտ ես հաշվել պայց պետք էր ոչ թէ հաշվել այլ գրել մեթոդներ որոնք կհաշվեն ամեն անգամ,
//  նույնն էլ տիպի համար պետքա մեթոդ գրենք որը կվերադարձնի տիպը մեկ էլ ուղղանկյուն և շեղանկյուն կառուցիչները չես ստեքծել
//  որոնք պետքա ժառանգեին հիմնական Quadrilateral կառուցիչից ներքևում տես օրինակը

function Rectangle() {}
Rectangle.prototype = Quadrilateral.prototype

function Diagonal() {}
Diagonal.prototype = Quadrilateral.prototype



// Ex3

// Ստեղծել User կլաս որը կպարունակի տվյալներ ծննդյան ամսաթվի, անունի ու մասնագիտության մասին։ ՈՒնենալ մեթոդ որը կվերադարձնի տարիքը։

// Դիցուք ունեք Ani և Aram արդեն ստեղծված User-ներ
// Առաջացրեք այնպիսի իրավիճակ որ Ani.getName() ֆունկցիան վերադարձնի Aram չնայած որ ստեղծելիս name-ը սահմանել եք Ani

// Ենթադրենք թե ծրագրավորողը մոռացել է ինչ-որ մեթոդ User տիպը սահմանելիս ու այն այլևս չեք կարող փոխել, սակայն ունեք user1-ը ստեղծված User ֆունկցիայի միջոցով, ինչ տարբերակ կառաջարկեք մեթոդն ավելացնելու համար։
// Իսկ ին՞չ, եթե անփույթ ծրագրավորողը User կլասի վրա գրել է այնպիսի մեթոդ, որը սխալմամբ վերադարձնում է user-ի password-ը ու դուք արդեն շատ օբյեկտներ եք ստեղծել այդ կլասի միջոցով, ինչպես լուծել այս խնդիրը։



function User() {
    this.dataofbirth = dataofbirth
    this.name = name
    this.proffesion = proffesion
}

// TODO dataofbirth, proffesion էս փոփոխականները որտեղից ես վերձնում բա?

function Ani() {
    this.name = "Ani"
}

function Aram() {
    this.name = "Aram"
}

const user1 = new Ani(Aram) // ???

// TODO Սխալ է  Ani-ն ու Aram-ը պետքա լինեին մեր User կառուցիչի էկզեմպլյարները ներքևում տես օրինակը

const ani = new User();
const aram = new User();

// TODO հետո պետք էր getName մեթոդը ավելացնել ani վրա ...

// Ex4

// Ստեղծել կառուցիչ որը կստեղծի հետևյալ տիպի օբյեկտներ
let car = {
  // properties
  brand: "Ford",
  speed: 0,

	// methods:
	accelerate: function(amount) {
	this.speed += amount;
},
	brake: function(amount) {
this.speed -= amount;
},
status: function() {
	return this.brand + " running at " + this.speed + " km/h";
	}
}

// TODO Սա մենակ պահանջն էս գրել հա ?

// Ex5

// ա) Բացատրել getter/setter-ների ու սովորական մեթոդների տարբերությունները։

// getter da metod e vory stanum e objecti arjeqy

// setter da metod e vory veragrum e objecti arjeqy

// TODO  ամենաարևորը պետք էր գրել թէ ինչով են տարբերվում սովորական մեթոդներից

