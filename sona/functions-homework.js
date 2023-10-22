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
    if(str.includes(sub) === true) {
        return true;
    }
    return false;
}

// includesStr('Hello', 'lo')


/*struggled to make a custom 'includes', 
came up with the following solutions 
but they don't work perfectly well */

function includesStr2(str, sub) {
    let arr = str.split("");
    let includes = false;
    arr.forEach((item,index) => {
        let arr2 = arr.slice();
        let spliced = arr2.splice(index);
        //console.log(`spliced ${spliced}`);
        if(spliced.join("") === sub) {
            includes = true;
        }
    });
    //console.log(includes)
    return includes;
}

//works for ('Hello', 'lo') 
//but not for ('Hello', 'ell')

function includesStr3(str, sub) {
    let arrMain = str.split("");
    let arrSub = sub.split("");
    let semple = [];
    for(let item of arrMain) {
        for(let elem of arrSub) {
            if(elem === item) {
                semple.push(elem);
                break;
            }
        }
    }
    semple = semple.join("");
    console.log(semple);
    if(semple === sub) {
        return true;
    } else {
        return false;
    }
}

// works for includesStr3('Hello', 'ell')
// doesn't work for ('Hello', 'lo') 
    

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

//extra 2