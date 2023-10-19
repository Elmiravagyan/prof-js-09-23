//exsercise 1, option 1;
let number = 2357;
{
function reverseNum(num) {
  let str = "";
  num += str;
  for (let i = num.length - 1; i >= 0; i--) {
    str += num[i];
  }
  return parseInt(str);
}
let reversed = reverseNum(number)
console.log(reversed);
}
// exercise 1 , option 2;
function reverseNum(num) {
  let str = "";
    num += str;
    str = num.split("").reverse().join("");
    return parseInt(str);
}
let reversed = reverseNum(number)
console.log(reversed);

// ex. 3;
let str = "Sunshine";

function findSubstring(str, el) {
  return str.includes(el);
}

let res = findSubstring(str, "shi");
console.log(res);

//ex. 4;
 let sent = "i am coming home";
 let convert = (string) => {
  let arr = string.split(" ");
  let arr2 = [];
  arr.forEach(val => {
    let first = val[0].toUpperCase();
    let fullWord = first + val.slice(1);
    arr2.push(fullWord);
  })
  return arr2.join(" ");
};
console.log(convert(sent));


//ex. 5;
let sentence = "I would like to receive the invitetion";

function getLongestWord(sent) {
  let array = sent.split(" ");
  let compareArr = "";
  array.forEach(val => {
    if (val.length > compareArr.length) {
      compareArr = val;
    }
  })
  return compareArr
}
let word = getLongestWord(sentence);
console.log(word);

//ex. 6;
function getSumOfNums(a, b){
  return a + b;
}

let sum = getSumOfNums(42, 12);
console.log(sum);



