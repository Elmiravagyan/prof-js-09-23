//task 1
function calcArea() {
    let figure = prompt("Which geometric figure do you need to find the area of? Please, input t for a triangle, z for a trapezoid, c for a circle, s for a square or r for a rectangle.")
    switch (figure) {
        case "t":
            areaT();
            break;
        case "z":
            areaZ();
            break;
        case "c":
            areaC();
            break;
        case "s":
            areaS();
            break;
        case "r":
            areaR();
            break;
        default:
            error();
            break;
    }
}

function areaT() {
    let param = prompt("Input the base and the height of the triangle! (e.g. 2,4) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5, 4.2)");
    let b = param.split(",")[0];
    let h = param.split(",")[1];
    let result = b*h/2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given triangle equals to ${result}.`);
}

function error() {
    let solution = confirm("Something went wrong! Do you want to try again?")
            if(solution) {
                return calcArea();
            } else return alert("See you again!");
            
}

function areaZ() {
    let param = prompt("Input the bases and the height of the trapezoid! (e.g. 2,4,5) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5, 4.2, 5.6)");
    let a = param.split(",")[0];
    let b = param.split(",")[1];
    let h = param.split(",")[2];
    let result = (+a + +b)*h/2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given trapezoid equals to ${result}.`);
}

function areaC() {
    let r = prompt("Input the radius of the circle! (e.g. 2) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5)");
    let result = 3.14*r**2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given circle equals to ${result}.`);
}

function areaS() {
    let a = prompt("Input the side of the square! (e.g. 2) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5)");
    let result = a**2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given square equals to ${result}.`);
}

function areaR() {
    let param = prompt("Input the length and the width of the rectangle! (e.g. 2,4) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5, 4.2)");
    let l = param.split(",")[0];
    let w = param.split(",")[1];
    let result = l*w;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given rectangle equals to ${result}.`);
}

//task 2
let number;
do {
    number = +prompt("Input a number for a chance to win 1000$!");
} while (number !== 7)
alert("YOU WON 1000$");

//task 3
let users = 
[
  {
    "_id": "6527b06f476f60fc89813fbb",
    "balance": "$2,928.37",
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

//3.1
function balanceFilter(arr) {
    return arr.filter((item) => {
        let array = item["balance"].split("");
        let number = array.filter((elem) => {
            return elem !== "$" && elem !== ",";
            })
        number = number.join("");
        return 2000 <= number && number <= 3000  
        })
}

//3.2
function randColor(arr) {
    let colors = ["beige", "blue", "red", "black", "white", "gray", "green", "brown", "purple", "yellow", "orange", "pink"];
    return arr.map((item)=>{
        item.color = colors[Math.floor(Math.random()*(colors.length - 1))];
        return item;
    })
}

//3.3
function calcBalance(arr) {
  let result = 0;
  arr.forEach((item) => {
    let number = item["balance"].split("");
    number = number.filter((elem) => {
      return elem !== "$" && elem !== ",";
    })
    number = number.join("");
    result += +number;
  })
  return result;
}