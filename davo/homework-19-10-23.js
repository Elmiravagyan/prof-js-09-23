//----1----
let imgeName = prompt('Enter the geometry name', 't for triangle, z for trapezoid, c for circle, s for square, r for rectangle');
function areaTriangle(basis,height) {
    return ((basis*height)/2);
}
function areaTrapezoid(basis1,basis2,height) {
    retur (((basis1+basis2)*height)/2);
}
function areaCircle(radius) {
    return Math.PI*Math.pow(radius,2);
}
function areaSquare(side) {
    return Math.pow(side,2);
}
function areaRectangle(length,width) {
    return length*width
}
switch(imgeName){
    case "t":
        let basis=+prompt("enter the base  of the triangle");
           while (isNaN(basis)) {
              basis=+prompt('enter the base  of the triangle')
            };
        let heigth=+prompt("enter the  height of the triangle");
        while (isNaN(heigth)) {
            heigth=+prompt("enter the base and height of the triangle")
            
        };
        alert(`the area of the triangle is equal  ${areaTriangle}`)
        break;
    case "z":
        let basis1=+prompt("Enter the first base of the triangle")
        while (isNaN(basis1)) {
            basis1=+prompt("Enter the first base of the triangle")
            
        }
        let basis2=+prompt("enter the second base of the triangle")
        while (isNaN(basis2)) {
            basis2=+prompt("enter the second base of the triangle")
            
        }
        let heigth1=+prompt("Enter the height")
        while (isNaN(heigth)) {
            heigth1=+prompt("Enter the height")
            
        }
        alert(`the area of the trapezoid is equal  ${areaTrapezoid(basis1,basis2,heigth1)}`)
        break;
    case "c":
        let radius=+prompt("Enter the radius of the circle")
        while (isNaN(radius)) {
            radius=+prompt("Enter the radius of the circle")
            
        }
        alert(`The area of the circle is equal  ${areaCircle(radius)}`)
        break;
    case "s":
        let side=+prompt("Enter the side of the square")
        while (isNaN(side)) {
            side=+prompt("Enter the side of the square")
            
        }
        alert(`The area of the square is equal  ${areaSquare(side)}`)
        break;
    case "s":
        let length=+prompt("Enter the rectangle length")
        while (isNaN(length)) {
            length=+prompt("Enter the rectangle length")
            
        }
        let width=+prompt("Enter the rectangle width")
        while (isNaN) {
            width=+prompt("Enter the rectangle width")
            
        }
        alert(`the area of the rectangle is equal ${areaRectangle(length,width)}`)
    default:
        alert("Invalid geometry name. Please select a valid option.");
                           
}


//----2----
while (true) {
    let number = +prompt("If you guess the number correctly, you will get a bonus", "Enter the number");
    if (number === 7) {
        alert("YOU WON 1000$");
        break;
    }
}


//----3----
let users = [
  {
    "_id": "6527b06f476f60fc89813fbb",
    "balance": 2928.37,
    "age": 19,
    "name": "Terrell Davis"
  },
  {
    "_id": "6527b06fffb90379f320b2e5",
    "balance": 3712.21,
    "age": 51,
    "name": "Lowe Hurst"
  },
  {
    "_id": "6527b06f5235d7b3b1768986",
    "balance": 1192.55,
    "age": 56,
    "name": "Thelma Livingston"
  },
  {
    "_id": "6527b06f24200f8f348dc022",
    "balance": 3207.32,
    "age": 43,
    "name": "Patsy Richardson"
  },
  {
    "_id": "6527b06fffc404f036c61d04",
    "balance": 1827.01,
    "age": 66,
    "name": "Phyllis Morin"
  },
  {
    "_id": "6527b06fbbd29ddfa45c9d52",
    "balance": 2658.85,
    "age": 68,
    "name": "Sweeney Travis"
  },
  {
    "_id": "6527b06f8b5786e80f944713",
    "balance": 3744.04,
    "age": 19,
    "name": "Velez Forbes"
  },
  {
    "_id": "6527b06fb41f548cda02945a",
    "balance": 1280.60,
    "age": 50,
    "name": "Diann Tillman"
  },
  {
    "_id": "6527b06f777dc88895e79f76",
    "balance": 2125.95,
    "age": 39,
    "name": "Morton Ayala"
  },
  {
    "_id": "6527b06f2df98c0c2738fd6d",
    "balance": 1499.62,
    "age": 29,
    "name": "Carrillo Rojas"
  },
  {
    "_id": "6527b06f396589e62e72b963",
    "balance": 3627.98,
    "age": 32,
    "name": "Annette Hill"
  },
  {
    "_id": "6527b06fdd6caf8bcb1aa281",
    "balance": 3817.86,
    "age": 52,
    "name": "Christa Vega"
  },
  {
    "_id": "6527b06fb7571674a29e3790",
    "balance": 3934.63,
    "age": 20,
    "name": "Lacy Schneider"
  },
  {
    "_id": "6527b06fca8e29329c7a3557",
    "balance": 3461.51,
    "age": 60,
    "name": "England Tran"
  },
  {
    "_id": "6527b06f52b831b38fc46155",
    "balance": 1811.19,
    "age": 53,
    "name": "Wright Ashley"
  }
]

//3.1 Will filter users whose balance is between 2000-3000

let filteredWithBalance = []

users.forEach((user) => {
  if(user["balance"] > 2000 && user["balance"] < 3000){
    filteredWithBalance.push(user)
  }
})
//3.2 Create a new array with given users and add a random color property to each user


function getRandomColor() {
  let colors = ['Green' ,'Red' ,  'Purple' ,'Orange' ,    'Blue' ,'Pink' , 'Brown','Yellow','white' ]
  let index = Math.floor(Math.random() * 9)
return colors[index]
  
}
filterBalance.forEach(element=>{
  element.color=getRandomColor()
})