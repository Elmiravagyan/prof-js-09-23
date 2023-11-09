//ex.1create constructor circle with following properties;
 
//1a
{
function Circle (area, circumference, radius){
     this.area = area,
     this.circumference = circumference,
     this.radius = radius
     
 };

 const circle1 = new Circle(250, 10, 5);
}
//1b
 {
function Circle(radius){
    
    this.circleArea = function(){
        return (Math.PI* Math.pow(radius, 2));
    },
    this.circleCircumference = function(){
         return (2 * Math.PI* radius);
    }
 }
  const buble1 = new Circle(5);
  const buble2 = new Circle(7);
  console.log(buble1.circleCircumference());
 }
//ex.3 
//3a Ստեղծել User կլաս որը կպարունակի տվյալներ ծննդյան ամսաթվի, անունի ու մասնագիտության մասին։ ՈՒնենալ մեթոդ որը կվերադարձնի տարիքը։
 {
function User(name, birthdate, profession){
     this.name =name,
     this.birthdate = birthdate,
     this.profession = profession,
     this.age =function(){
      let today = new Date();
      let year = today.getFullYear();
      let yearOfUser = this.birthdate.split("").slice(6).join("");
       return (year - Number(yearOfUser));
     }
 };
  
  const person = new User("Anna", "13.01.1993", "teacher");
}
  //console.log(person.age());
//3b Դիցուք ունեք Ani և Aram արդեն ստեղծված User-ներ
//Առաջացրեք այնպիսի իրավիճակ որ Ani.getName() ֆունկցիան վերադարձնի Aram չնայած որ ստեղծելիս name-ը սահմանել եք Ani

 {
 let user1 = {
    name: 'Ani',
    get getName(){
        return this.name;
    }

 };

  let user2 = {
    name: "Aram"
  };
  user2.__proto__ = user1;
  console.log(user2.getName);
} 
 // uzum ei getter u setterov anei, bayc cher stacvum 
 {
 let user1 = {
    name: 'Ani',
    get getName(){
        return this.name;
    }
     set getName(value){
      return this.name = value;

    }
 };

  let user2 = {
    name: "Aram"
  };
   user1.getName = user2.name;
   console.log(user2.getName);
}

/*Ենթադրենք թե ծրագրավորողը մոռացել է ինչ-որ մեթոդ User տիպը սահմանելիս ու այն այլևս չեք կարող փոխել, սակայն ունեք user1-ը ստեղծված User ֆունկցիայի միջոցով, ինչ տարբերակ կառաջարկեք մեթոդն ավելացնելու համար։
Իսկ ին՞չ, եթե անփույթ ծրագրավորողը User կլասի վրա գրել է այնպիսի մեթոդ, որը սխալմամբ վերադարձնում է user-ի password-ը ու դուք արդեն շատ օբյեկտներ եք ստեղծել այդ կլասի միջոցով, ինչպես լուծել այս խնդիրը։
*/
 function User(name, age, password){
     this.name =name,
     this.age =age,
     this.password = password,
     this.getPassword = function(){
        return this.password; 
     }
 };
 User.prototype.greet = function(){
    return `Hello ${this.name}`;
 }
const user1 = new User("Mane", 25, "151484PH");
User.prototype.fullInfo = function(){
     return `${this.name} ${this.age}`
}
 User.prototype.getPassword = null;
const user2 = new User('Ann', 32, "151446")
//password functionic chstacvec azatvem

console.log(user1.getPassword()) 

//ex.4 create a constructor for this type of objects                                   
{
function Cars(brand, speed){
    this.brand = brand,
    this.speed = speed,
    this.accelerate = function(amount){
        return this.speed += amount;
    },
    this.brake = function(amount){
        return this.speed -= amount;
    },
    this.status =function() {
        return this.brand + " running at " + this.speed + " km/h";
        }
    
 };

let BMW = new Cars("bmw", 200);
console.log(BMW.status())
}

// ex.5 explain diference between getters and setters:getters access properties and setters modify them
 {
let person ={
    firstName: "John",
    lastName: "Benson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        let arr = value.split(" ");
        this.firstName = arr[0];
        this.lastName = arr[1];
        return `${this.firstName} ${this.lastName}`;
    }
 };
   person.fullName = "Ann Thomas";
 console.log(person.fullName);
 }

