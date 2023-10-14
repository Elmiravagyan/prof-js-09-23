//----1----
function areaTriangle(base,height) {
     
  alert(`The area of the triangle is ${(base*height)/2}`);
}

function areaTrapezoid(base1,base2,heigth) {
alert(`The area of the trapezoid is ${(base1+base2)*heigth/2}`);
}

function areaCircle(radius) {
  alert(`The area of the circle is ${Math.PI * Math.pow(radius, 2)}`);
}

function areaSquare(side) {
  alert(`The area of the square is ${Math.pow(side, 2)}`);
}

function areaRectangle(length,width) {
  alert(`The area of the rectangle is ${length * width}`);
}

function calculateArea() {
let figure = prompt("Enter the code for the geometric figure"," (t for triangle, z for trapezoid, c for circle, s for square, r for rectangle):");

switch (figure) {
  case 't':
       let base =+prompt("Enter the base of the triangle:")
      let height =+prompt("Enter the height of the triangle:")
      if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
          alert("Invalid input. Both base and height must be positive numbers.");
      } else  areaTriangle(base,height)
      break;
  case 'z':
        let base1 =+prompt("Enter the length of the first base of the trapezoid:")
        let base2 =+prompt("Enter the length of the second base of the trapezoid:")
        let height1 =+prompt("Enter the height of the trapezoid:")
        if (isNaN(base1) || isNaN(base2) || isNaN(height1) || base1 <= 0 || base2 <= 0 || height <= 0) {
           alert("Invalid input. All values must be positive numbers.");
        } else areaTrapezoid(base1,base2,heigth1)
  
      break;
  case 'c':
      let radius =+prompt("Enter the radius of the circle:");
      if (isNaN(radius) || radius <= 0) {
         alert("Invalid input. Radius must be a positive number.");
      } else areaCircle(radius)
      break;
  case 's':
      let side =+prompt("Enter the side length of the square:");
      if (isNaN(side) || side <= 0) {
         alert("Invalid input. Side length must be a positive number.");
      } else areaSquare(side) 
      break;
  case 'r':
        let length =+prompt("Enter the length of the rectangle:")
        let width =+prompt("Enter the width of the rectangle:")
        if(isNaN(length) || isNaN(width) || length<=0 || width<=0){
          alert("Invalid input. Both length and width must be positive numbers.")
        } else areaRectangle(length,width) 
      break;
  default:
      alert("Invalid input. Please enter a valid code (t, z, c, s, or r).");
     calculateArea();
}
}
calculateArea()


//----2----
while (true) {
    let number = +prompt("If you guess the number correctly, you will get a bonus", "Enter the number");
    if (number === 7) {
        alert("YOU WON 1000$");
        break;
    }
}


//----3----
let users = 
[
  {
    "_id": "6527b06f476f60fc89813fbb",
    "balance": "2,928.37$",
    "age": 19,
    "name": "Terrell Davis"
  },
  {
    "_id": "6527b06fffb90379f320b2e5",
    "balance": "$3,712.21",
    "age": 51,
    "name": "Lowe Hurst"
  },
  {
    "_id": "6527b06f5235d7b3b1768986",
    "balance": "$1,192.55",
    "age": 56,
    "name": "Thelma Livingston"
  },
  {
    "_id": "6527b06f24200f8f348dc022",
    "balance": "$3,207.32",
    "age": 43,
    "name": "Patsy Richardson"
  },
  {
    "_id": "6527b06fffc404f036c61d04",
    "balance": "$1,827.01",
    "age": 66,
    "name": "Phyllis Morin"
  },
  {
    "_id": "6527b06fbbd29ddfa45c9d52",
    "balance": "$2,658.85",
    "age": 68,
    "name": "Sweeney Travis"
  },
  {
    "_id": "6527b06f8b5786e80f944713",
    "balance": "$3,744.04",
    "age": 19,
    "name": "Velez Forbes"
  },
  {
    "_id": "6527b06fb41f548cda02945a",
    "balance": "$1,280.60",
    "age": 50,
    "name": "Diann Tillman"
  },
  {
    "_id": "6527b06f777dc88895e79f76",
    "balance": "$2,125.95",
    "age": 39,
    "name": "Morton Ayala"
  },
  {
    "_id": "6527b06f2df98c0c2738fd6d",
    "balance": "$1,499.62",
    "age": 29,
    "name": "Carrillo Rojas"
  },
  {
    "_id": "6527b06f396589e62e72b963",
    "balance": "$3,627.98",
    "age": 32,
    "name": "Annette Hill"
  },
  {
    "_id": "6527b06fdd6caf8bcb1aa281",
    "balance": "$3,817.86",
    "age": 52,
    "name": "Christa Vega"
  },
  {
    "_id": "6527b06fb7571674a29e3790",
    "balance": "$3,934.63",
    "age": 20,
    "name": "Lacy Schneider"
  },
  {
    "_id": "6527b06fca8e29329c7a3557",
    "balance": "$3,461.51",
    "age": 60,
    "name": "England Tran"
  },
  {
    "_id": "6527b06f52b831b38fc46155",
    "balance": "$1,811.19",
    "age": 53,
    "name": "Wright Ashley"
  }
]

//----3.1----

function filterMarks(balance,sign1,sign2){
  let array=balance.split("");
  let number=array.filter(item=>item !== sign1 && item !== sign2);
  return +number.join("")
  
}
function  filtreBalance(array) {
 return array.filter(item=>{
      let user=filterMarks(item.balance,"$",",");
      return user>=2000 && user<=3000;
  })
  
}

//----3.2----

function randomColor(arr){
  let colors =["Pink","Red","Blue","Orange","Green","Purple","brown", "yellow","beige"]
  
  let result=arr.map(item=>{
      let index=Math.floor(Math.random()*colors.length-1);
      item.color=colors[index]
      return item
  })
  return result
}

//----3.3----

function summBalance(array) {
  let sum=0
  array.forEach(item=>{
     sum+= filterMarks(item.balance,"$",",")
  })
  return sum
}

//----3.4----
function addBalance(array) {
  array.forEach(item=>{
      if(item.name==="Diann Tillman")
        item.balance= filterMarks(item.balance,"$",",")+1000 
  })
  return array
}

//----3.5----
let userPhyllisMorin=users.find(item=>item.name==="Phyllis Morin")
