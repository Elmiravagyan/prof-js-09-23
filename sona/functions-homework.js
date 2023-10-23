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
here's what i came up with after hours of struggling, 
but it is complicated and the continuation i had in mind was even more complicated
so i gave up, i will study the example chat GPT gave me, 
my version was the following
*/

/*

function strCombs(str) {
    let eachRound = factorial(str.length) / str.length;
    let realArr = str.split("");
    let workingArr = realArr.slice();
    let result = [];
    let n = 1;
    for(let i = eachRound; i > 0; i--) {
        let currentDigit = workingArr.splice(1,1);
        workingArr.splice(workingArr.at(-n),0,currentDigit);
        let currentComb = workingArr.join("");
        if(!result.includes(currentComb)) {
            result.push(currentComb)
        } else {
            n++;
            continue;
        }
    }
    console.log(result)
}


function factorial(num) {
    let result = 1;
    for(let i = num; i > 1; i--) {
        result *= i;
    };
    //console.log(result)
    return result;
}

*/


//task3 done

function includesStr(str, sub) {
    let arrMain = str.split("");
    let arrSub = sub.split("");
    while(true) {
        let firstChar = arrMain.findIndex((item) => {
            return item === arrSub[0];
        });
        //console.log(`firstChar ${firstChar}`);
        if(firstChar === -1) {
            return false;
        };
        let lastChar = firstChar + (sub.length-1);
        let current = arrMain.slice(firstChar, (lastChar+1));
        //console.log(current);
        if(current.join("") === sub) {
            return true;
        } else {
            arrMain.splice(firstChar,1);
            continue;
        }
    }
}

//console.log(includesStr('Ananas', 'nas'))
    

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

//extra 1 done
function calc(a,b,sign) {
    switch(sign) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "/":
            return a / b;
            break;
        case "*":
            return a * b;
            break;    
    }
}

//extra 2 done

//asbdasbabasafdyia -> safdyi

function longestInStr(str) {
    let arr = str.split("");
    let longest = "";
    arr.forEach((item, index) => {
        let current = [];
        let i = index;
        while(!current.includes(arr[i])) {
            current.push(arr[i]);
            i++;
        }
        longest = (current.length > longest.length) ? current.join("") : longest;
    })
    //console.log(longest);
    return longest;
}

//longestInStr('asbdasbabasafdyia')