//task 1 done
// let num = 123456;
function reverseNum(num) {
    let arr = String(num).split("");
    let reversedStr = arr.reverse().join("");
    let reversedNum = Number(reversedStr);
    //console.log(reversedNum);
    return reversedNum;
   
}

// reverseNum(num)

//task 2
/*
let str = "star"
function strCombs(str) {
    let arr = str.split("");
    let result = [];
    //console.log(arr)
    arr.forEach((item) => {
        result.push(item);
        for(let i = 0; i <= arr.length - 1; i++) {
           if(item !== arr[i]) {
            result.push(item + arr[i]);
           }
        }
    })
    console.log(result)
}
*/

//strCombs(str)

//task3

/*function includesStr(str, sub) {
    let arrMain = str.split("");
    let arrSub = sub.split("");
    let semple = [];
    arrSub.filter((item) => {
        return item ===
    })

}

['h', 'e', 'l', 'l', 'o']
['e', 'l']*/

//task 4 done
function firstLetterUp(str) {
    let arr = str.split(" ").map((item) => {
     item = item.split("");
     item[0] = item[0].toUpperCase();
    return item = item.join("");
    })
    //console.log (arr.join(" "));
    return (arr.join(" "));
}

//firstLetterUp('luke skywalker')

//task 5 done
function longestWordStr (str) {
    let arr = str.split(" ");
    let longest = '';
    arr.forEach((item) => {
        if(item.length > longest.length) {
            longest = item;
        }
    });
    //console.log(longest)
    return longest;
}

//longestWordStr('Web Developement Tutorial')

//task 6 done
function sum(a, b) {
    let sum = +a + +b;
    if(isNaN(sum)) {
        return "Not a number";
    }
   return sum; 
}