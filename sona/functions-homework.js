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

// TODO task 1) Ճիշտ է

//task 2
/*
երկար չարչարվել եմ, բայց չկարողացա լուծել էս մեկը,
ներքևում դրել եմ՝ թե ինչ էի փորձում անել, բայց եթե վերջնական աշխատող տրամաբանություն էլ գտնեի,
շատ երկար ու խճճված էր լինելու, թողեցի կիսատ

chatGPT-ն recursive ֆունկցիաներով լուծում առաջարկեց,
էդքան էլ հասկանալի չէր իմ համար, բայց կուսումնասիրեմ
*/

/*
թե ինչ էի ես փորձել

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

// TODO task3 Ճիշտ է
    

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

// TODO task4 Ճիշտ է

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

// TODO task5 Ճիշտ է

//task 6 done
function sum(a, b) {
    let sum = +a + +b;
    if(isNaN(sum)) {
        return "Not a number";
    }
   return sum; 
}

// TODO task6 Ճիշտ է

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

// TODO extra 1 Ճիշտ է

//extra 2 done

//asbdasbabasafdyia -> safdyi  TODO բա b-ն

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

// longestInStr('asbdasbabasafdyia')

// TODO extra 2 Ճիշտ է

function longestInStr(str) {
    let arr = str.split("");
    return arr.reduce((uniqueItems, item, index) => uniqueItems.includes(item) ? uniqueItems : uniqueItems + item, '');
}
