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

//ex 2 
function Quadrilateral(a, b, c, d, angle1, angle2, angle3, angle4) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.angles = [this.ang1 = angle1, this.ang2 = angle2, this.ang3 = angle3, this.ang4 = angle4];
    
    this.perimeter = () => {
        return (this.a+this.b+this.c+this.d);
    };

    this.type = () => {
        if(this.perimeter() / 4 === this.a && this.angles.includes(90)) {
            return "square";
        } else if (this.perimeter() / 4 === this.a && !this.angles.includes(90)) {
            return "rhombus";
        } else {
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
                return "rectangle";
            } else {
                return "unspecified quadrilateral";
            };
        };
    };
   
    this.area = (d1 = 1, d2 = 1) => {
        switch(this.type()) {
            case "square":
                return this.a**2;
            case "rhombus":
                this.d1 = d1;
                this.d2 = d2;
                return 1/2*this.d1*this.d2;
            case "rectangle":
                let sides = [this.a, this.b, this.c, this.d];
                return (sides[0]*sides.find(side => side !== sides[0]));
                /*մաթեմատիկական տեսանկյունից չգիտեմ վերջին քեյսը ճիշտ արդյունք կտա, թե չէ, 
                եթե օրինակ սեղան լինի պատկերը, բայց JS-ի տեսանկյունից աշխատում ա :D :D */
            case "unspecified quadrilateral":
                let area1 = 0.5*this.a*this.b*Math.sin(this.ang1*(Math.PI/180));
                let area2 = 0.5*this.c*this.d*Math.sin(this.ang3*(Math.PI/180));
                return area1+area2;
        };
    };
}

let figure1 = new Quadrilateral(4,4,5,5,90,90,90,90)
// console.log(figure1.area())
// console.log(figure1.perimeter())
// console.log(figure1.type())

function Rectangle(a,b,c,d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.angles = [this.ang1 = 90, this.ang2 = 90, this.ang3 = 90, this.ang4 = 90];
}

