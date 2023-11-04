// TASK 2
function sevenOrNo() {
  let userInput;
  while (true) {
    userInput = prompt("Enter a number:");

    if (userInput === "7") {
      alert("YOU WON 1000$");
      break;
    } else {
      alert("Try again. Your input was not '7'.");
    }
  }
}

// TODO Ճիշտ է

// TASK 3
let users = [
  {
    _id: "6527b06f476f60fc89813fbb",
    balance: "2,928.37$",
    age: 19,
    name: "Terrell Davis",
  },
  {
    _id: "6527b06fffb90379f320b2e5",
    balance: "$3,712.21",
    age: 51,
    name: "Lowe Hurst",
  },
  {
    _id: "6527b06f5235d7b3b1768986",
    balance: "$1,192.55",
    age: 56,
    name: "Thelma Livingston",
  },
  {
    _id: "6527b06f24200f8f348dc022",
    balance: "$3,207.32",
    age: 43,
    name: "Patsy Richardson",
  },
  {
    _id: "6527b06fffc404f036c61d04",
    balance: "$1,827.01",
    age: 66,
    name: "Phyllis Morin",
  },
  {
    _id: "6527b06fbbd29ddfa45c9d52",
    balance: "$2,658.85",
    age: 68,
    name: "Sweeney Travis",
  },
  {
    _id: "6527b06f8b5786e80f944713",
    balance: "$3,744.04",
    age: 19,
    name: "Velez Forbes",
  },
  {
    _id: "6527b06fb41f548cda02945a",
    balance: "$1,280.60",
    age: 50,
    name: "Diann Tillman",
  },
  {
    _id: "6527b06f777dc88895e79f76",
    balance: "$2,125.95",
    age: 39,
    name: "Morton Ayala",
  },
  {
    _id: "6527b06f2df98c0c2738fd6d",
    balance: "$1,499.62",
    age: 29,
    name: "Carrillo Rojas",
  },
  {
    _id: "6527b06f396589e62e72b963",
    balance: "$3,627.98",
    age: 32,
    name: "Annette Hill",
  },
  {
    _id: "6527b06fdd6caf8bcb1aa281",
    balance: "$3,817.86",
    age: 52,
    name: "Christa Vega",
  },
  {
    _id: "6527b06fb7571674a29e3790",
    balance: "$3,934.63",
    age: 20,
    name: "Lacy Schneider",
  },
  {
    _id: "6527b06fca8e29329c7a3557",
    balance: "$3,461.51",
    age: 60,
    name: "England Tran",
  },
  {
    _id: "6527b06f52b831b38fc46155",
    balance: "$1,811.19",
    age: 53,
    name: "Wright Ashley",
  },
];

// sub-task 1
const filteredUsers = users.filter((user) => {
  const balanceString = user.balance.split("$")[1];
  const balance = balanceString.split(",").join("");
  return balance >= "2000" && balance <= "3000";
});

// TODO Սխալ է:
/*
Քանի որ string տիպով է պահված բալանսը filter ֆւնցիայի կատարած համեմատությունը սխալ կաշխատի
իսկ ավելի ճիշտ ոչ թէ սխալ այլ ոչ էնպես ինչպես մենք ենք սպասում, խնդիրը նրանումա որ string-էրը այլ կերպ են համեմատվում
ամեն սիմվոլ ունի իր համապատասխան կոդը օրինակ a-97, Z-90 ու երբ երկու սիմվոլ համեմատում ենք իրար հետ, տակից համեմատվում են
իրենց ունեցած կոդերը  հետևաբար a > Z նույնն է թէ 97 > 90
Ճիշտ ես արել որ $-ի նշանը ու ստորակետները հանել նոր համեմատել ես թվերը, բայց պետք էր նաև դարձնել number տիպի նոր համեմատել
որ թվերը համեմատվեն որպես թվեր այսինքն համեմատությունը տեղի ունենար հանրահաշվի կոնտեքստում, իսկ երբ համեմատում ենք թվեր որոնք
ստրինգեր են կարող ենք անսպասելի արդյունք ստանալ օրինակ  '3' > '1000' -> true
Ստեղ հղղում եմ դնում կարաս կարդաս թէ ոնց են համեմատվում string տիպի արչեքները -> https://learn.javascript.ru/string  նախավերջին գլուխնա
*/

// sub-task 2
const usersColorRandom = users.map((user) => {
  return {
    ...user,
    color: "#" + ((Math.random() * 0xffffff) | 0).toString(16),
  };
});

// TODO Ճիշտ է

// sub-task 3
let totalBalance = 0;
for (let i = 0; i < users.length; i++) {
  const balanceString = users[i].balance;
  const totalSearch = Number(balanceString.slice(1, -1).split(",").join(""));
  totalBalance += totalSearch;
}

// TODO Ճիշտ է

// sub-task 4
// . . . can not do this, got a question to ask(!!!)
// sub-task 5
const userPhyllisMorin = users.find((user) => user.name === "Phyllis Morin");
if (userPhyllisMorin) {
  console.log("User found:", userPhyllisMorin);
} else {
  console.log('User "Phyllis Morin" not found.');
}

// TODO Ճիշտ է


// TASK 1
function calcArea(shape) {
  switch (shape) {
    case "t":
      const width = parseFloat(prompt("Enter the base of the triangle:"));
      const height = parseFloat(prompt("Enter the height of the triangle:"));
      const triangleArea = 0.5 * width * height;
      console.log("The area of the triangle is:", triangleArea);
      break;
    case "z":
      const width1 = parseFloat(prompt("Enter the width of the trapezoid:"));
      const height1 = parseFloat(prompt("Enter the height of the trapezoid:"));
      const trapezoidHeight = parseFloat(
        prompt("Enter the height2 of the trapezoid:")
      );
      const trapezoidArea = 0.5 * (width1 + height1) * trapezoidHeight;
      console.log("The area of the trapezoid is:", trapezoidArea);
      break;
    case "c":
      const radius = parseFloat(prompt("Enter the radius of the circle:"));
    // can not do this, got a question to askx2 (!!!)
          // TODO You may ask all your questions in the middle of your code and I will answer while checking your homework
    case "s":
      const sideLength = parseFloat(
        prompt("Enter the side length of the square:")
      );
    // same problem here as above
    case "r":
      const length = parseFloat(prompt("Enter the length of the rectangle:"));
      const width2 = parseFloat(prompt("Enter the width of the rectangle:"));
      const rectangleArea = length * width2;
      console.log("The area of the rectangle is:", rectangleArea);
      break;
    default:
      console.log("Invalid code. Please enter a valid code (t, z, c, s, r).");
  }
}

// TODO Ճիշտ է

const shapeCode = prompt("Enter a code (t, z, c, s, r) to calculate the area:");
calculateArea(shapeCode);
// ADDITIONAL SUB-TASK 1

// TODO homework 14.10.2023

function reverseNumber(num) {
  const numStr = num.toString();
  const reversedStr = numStr.split("").reverse().join("");
  const reversedNum = parseInt(reversedStr);
  return reversedNum;
}

// TODO reverseNumber Ճիշտ է

// additional sub-task 2

function getAllStrCombinations(input) {
  const result = [];
  function generateCombinations(currentCombination, str) {
    if (str.length === 0) {
      result.push(currentCombination);
    } else {
      for (let i = 0; i < str.length; i++) {
        generateCombinations(
          currentCombination + str[i],
          str.slice(0, i) + str.slice(i + 1)
        );
      }
    }
  }
  generateCombinations("", input);
  return result;
}

// TODO getAllStrCombinations Ճիշտ է բայց ChatGpt պետք չի անել:

// additional sub-task 3
function includesSubstring(str, substr) {
  return str.includes(substr);
}

// TODO includesSubstring Ճիշտ է:

// additional sub-task 4
function findFirstLetterOfEachWord(inputString) { // TODO ֆունկցիայի անունը սխալ ա մի քիչ
  const words = inputString.split(" ");
  const foundWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  const result = foundWords.join(" ");
  return result;
}

// TODO findFirstLetterOfEachWord Ճիշտ է:


// additional sub-task 5
function findLongestWord(inputString) {
  const words = inputString.split(" ");
  let theLongestWord = "";
  let maxLength = 0;
  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      theLongestWord = word;
    }
  });

  return theLongestWord;
}

// TODO findLongestWord Ճիշտ է:

// additional sub-task 6
function numSum(num1, num2) {
  return num1 + num2;
}

// TODO numSum Ճիշտ է:

// EXTRA-EXERCISE 1
function calc(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero(0)";
      }
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

// TODO calc Ճիշտ է:

// EXTRA-EXERCISE 2
function findLongestWordWithDiffLett(inputString) {
  const words = inputString.split(" ");
  let theLongestWord = "";
  words.forEach((word) => {
    if (hasDifferentLetters(word) && word.length > longestWord.length) {
      theLongestWord = word;
    }
  });
  return theLongestWord;
}
function hasDiffLett(word) {
  const seen = {};
  for (let i = 0; i < word.length; i++) {
    if (seen[word[i]]) {
      return false;
    }
    seen[word[i]] = true;
  }
  return true;
}

// TODO calc Սխալ է ու սինտաքս error ունես խնդրի մեջ փորձի բրաուզերի կոնսոլում աշխատացնես գրածտ ֆունկցիաները
//  կամ հենց էտ ֆայլը run արա որ տենաս սխալներտ:
