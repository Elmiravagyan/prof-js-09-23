//1

function Circle(radius){
    if(new.target){
        this.radius = radius
        this.area = 3.14 * (radius * radius)
        this.circumference = 2 * 3.14 * radius
    }else{
        return new Circle(radius)
    }
}
let circle1 = new Circle(5)
let circle2 = Circle(7)

//console.log(circle2.area)

//2

function Quadrilateral(width , length){
    this.area = function(){
        return width * length
    }
    this.perimeter = function(){
        return (width + length) * 2
    }
    
    this.typeOfQuadrilateral = function (){
        if(width === length){
            return 'square'
        }
        return rectangle
    } 
}

let square = new Quadrilateral(4 , 4)
//console.log(square.typeOfQuadrilateral())

//3

function User (birthdate , name , profession){   //birthdate format - '11/8/2023'
    this.name = name
    this.profession = profession
    this.birthdate = birthdate
}

User.prototype.getAge = function(birthdate){    //question - erb vor vorpes parametr birthdate chem talis inchi ira scopic verev chi nayum kanstruktori parametreric vercni birthdate y 
    let todaysDate = '11/8/2023'
    let Today = todaysDate.split('/')
    let DayMonthYear = birthdate.split('/')  //user's input
    let IsComplaitedInThisYear = false
    if(DayMonthYear[1] < Today[1]){          //cheking months 
        IsComplaitedInThisYear = true
    }else if(DayMonthYear[1] === Today[1]){  // cheking days
        if(DayMonthYear[0] <= Today[0]){
            IsComplaitedInThisYear = true
        }
    }
    
    if(IsComplaitedInThisYear){
        return Today[2] - DayMonthYear[2]
    }else{
        return Today[2] - DayMonthYear[2] - 1
    }
}

//եթե ծրագրավորողը մոռացել է ինչ-որ մեթոդ User ը սահամանելիս , կարող ենք User.prototype ի վրա ավեացնել մեթոդը 

//սխալմամբ գրել են մեթոդ որը վերադարձնում է user ի password ը ․․․․․․․․․
//delete User.prototype.getAge // getAge ը վերադարձնում էր password ը 

//4 

function Car(brand){
    this.brand = brand
    this.speed = 0
}

Car.prototype.accelerate = function (amount){
    this.speed += amount
} 

Car.prototype.break = function (amount){
    this.speed -= amount
}

Car.prototype.status = function (){
    return `${this.brand} running at ${this.speed} km/h`
}

let sedan = new Car('mercedes-benz')
sedan.accelerate(100)
sedan.break(43)

console.log(sedan.status())

//5

//մի քանի առավելություն ունեն որոնցից մեկը անվտանգություն ապահովելնա 