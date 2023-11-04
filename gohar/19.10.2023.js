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

// TODO reverseNum Ճիշտ է

// ex. 3;
let str = "Sunshine";

function findSubstring(str, el) {
  return str.includes(el);
}

let res = findSubstring(str, "shi");
console.log(res);

// TODO findSubstring Ճիշտ է

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

// TODO findSubstring Ճիշտ է, հնարաորինս կարճ փորձի գրես խնդիրները
//  օրինակը ներքևում տես, օրինակ էս դեպքի համար map մեթոդը ավելի հարմար ա օգտագործելը
let convert = (string) => { // TODO EXAMPLE
    return string.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
}

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

// TODO Ճիշտ է, սրա կարճ գրված օրինակն էլ եմ դնում ներքևում,
//  մեկ էլ փոփոխականների անուններին միքիչ ուշադրություն դարձրու էլի ավելի լավա գրես sentence,
//  որ շատ երկարա լինում բառը նոր կրճատի,
//  զանգվածի մեթոդները հետաքրքիր են ու շատ են օգնում խնդիրներ լուծելուց,
//  ես ներքևում sort մեթոդն եմ օգտագործել որը սորտաորումա զանգվածը ըստ մեր տված callback ֆունկցիայի
//  մեր տված callback -ը սորտաորումա երկարության նվազման կարգով ու
//  քանի որ գիտենք որ մեր ամենաերկար ելեմենտը սկզբումա լինելու միանգամից վերադարձնում ենք
//  սորտաորված զանգվածի [0] ինդեքսով էլեմենտը:

function getLongestWord(sent) { // TODO EXAMPLE
    return sent.split(' ').sort((word1, word2) => word1.length > word2.length ? -1 : 1)[0]
}

//ex. 6;
function getSumOfNums(a, b){
  return a + b;
}

let sum = getSumOfNums(42, 12);
console.log(sum);

// TODO Ճիշտ է,

