// 1.    Write a program to calculate the area of geometrical figures like 
// circles, triangles, trapezoids, squares, and rectangles.
// The program should ask the user to enter the code for which the user wants to find the area. 


let user = prompt(`'t' for triangle,
'z' for trapezoid,
'c' for circle, 
's' for square, 
'r' for rectangle`)


function getArea(user = "") {

    let area = 0, base = 0, heigt = 0, bigBase = 0, radius = 0

    switch (user) {
        case 't':
            base = +prompt("Write a base of geometrical figure")
            heigt = +prompt("Write a heigth of geometrical figure")
            return area = 0.5 * base * heigt
        case 'z':
            base = +prompt("Write a base of geometrical figure")
            bigBase = +prompt("Write a big base of geometrical figure")
            heigt = +prompt("Write a heigth of geometrical figure")
            return area = (base + bigBase) / 2 * heigt
        case 'c':
            radius = +prompt("Write a radius of geometrical figure")
            return area = Math.PI * Math.pow(radius, 2)
        case 's':
            base = +prompt("Write a base of geometrical figure")
            return area = base * base
        case 'r':
            base = +prompt("Write a base of geometrical figure")
            bigBase = +prompt("Write a big base of geometrical figure")
            return area = base * bigBase
        default:
            return "Wrete corect data"

    }
}

alert(getArea(user))

// TODO Ճիստ է

// 2.   Write a program that will ask a user for input, if the input is “7” alert
// “YOU WON 1000$” If not ask the user the same question again.
// This process should happen until the user finally enters “7”. 

let winNumber = prompt("Enter a number")

function getWinnerNumber(winNumber = "") {
    let result = "YOU WON 1000$"

    while (winNumber != "7") {
        winNumber = prompt("Enter a number")
    }
    if (winNumber == "7") {
        return result
    }
}

alert(getWinnerNumber(winNumber))

// TODO Ճիշտ է բայց լավ պրակտիկա չի համարվում երբ ֆունկցիան ստացած արգումենտը փոփոխումա իր ներսում:

// 3. We have a users list, write a program that
//   3.1  Will filter users whose balance is between 2000-3000
//   3.2  Create a new array with given users and add a random color property to each user
//   3.3  Calculate the entire balance of all users
//   3.4  Add 1000$ to the balance of the user, whose name is Diann Tillman
//   3.5  Find a user whose name is Phyllis Morin

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

//  3.1
function getUsers(users = []) {

    let result = users.filter(item => item.balance > "$2,000.00" && item.balance < "$3,000.00")
    return result

}
console.log(getUsers(users))

// TODO Սխալ է:
/*
Քանի որ string տիպով է պահված բալանսը filter ֆւնցիայի կատարած համեմատությունը սխալ կաշխատի
իսկ ավելի ճիշտ ոչ թէ սխալ այլ ոչ էնպես ինչպես մենք ենք սպասում, խնդիրը նրանումա որ string-էրը այլ կերպ են համեմատվում
օրինակ էս համեմատությունը վերադարձնում ա true '$0,92.55' > '$2,000.00' && '$0,192.55' < "$3,000.00"
ամեն սիմվոլ ունի իր համապատասխան կոդը օրինակ a-97, Z-90 ու երբ երկու սիմվոլ համեմատում ենք իրար հետ, տակից համեմատվում են
իրենց ունեցած կոդերը  հետևաբար a > Z նույնն է թէ 97 > 90
Պետք էր $-ի նշանը ու ստորակետները հանել հետո դարձնել number նոր համեմատել թվերը
Ստեղ հղղում եմ դնում կարաս կարդաս թէ ոնց են համեմատվում string տիպի արժեքները -> https://learn.javascript.ru/string  նախավերջին գլուխնա
*/

//  3.2
function getRandomColors() {
    const colors = ['red', 'blue', 'pink', 'yellow', 'brown', 'purple', 'black', 'white', 'green', 'orange', 'gray']

    return colors[Math.floor(Math.random() * colors.length)]
}

function getNewProperty(users = []) {
    let newArr = users.map(item => { // /todo Կարող ես միանգամից վերադարձնել էս գործողության արդյունքը return users.map(ite....
        item["color"] = getRandomColors()
        return item
    })
    return newArr
}

console.log(getNewProperty(users))

// TODO Ճիշտ է

//  3.3
function getBalanceOfAllUsers(users = []) {
    let allBAlance = ""
    let sumThousand = 0
    let sumCent = 0

    users.forEach(user => {
        let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let balance = user.balance
        let current = ""
        allBAlance = user.balance[0]

        for (let i = 0; i < balance.length; i++) {
            if (numbers.includes(balance[i])) {
                current += balance[i]
            } else if (balance[i] === ".") {
                sumThousand += +current
                current = ""
            }
        }
        sumCent += +current
    })

    sumCent = sumCent.toString()

    if (sumCent.length > 2) {
        sumThousand += +sumCent.slice(0, sumCent.length - 2)
        sumCent = sumCent.slice(sumCent.length - 2)
    }

    sumThousand = sumThousand.toString()

    for (let j = 0; j < sumThousand.length; j++) {

        if (sumThousand.length - j === 3) {
            allBAlance += ","
        }
        allBAlance += sumThousand[j]
    }

    return allBAlance = allBAlance + '.' + sumCent
}

console.log(getBalanceOfAllUsers(users))

// TODO Ճիշտ էս գրել բայց սա հեշտ խնդիրա շատ երկար ես գրել, ներքևում տես կարճ լուծումը
const totalBalance = users.reduce((acc, { balance }) => {
    return acc + Number(balance.replace('$', '').replaceAll(',', ''));
}, 0)

//  3.4
function addBalance(users = [], sum = 0) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let newArr = users.map(user => {
        if (user.name === "Diann Tillman") {
            let current = ""
            let thousand = user.balance.slice(1, user.balance.length - 3)
            for (let i = 0; i < thousand.length; i++) {
                if (numbers.includes(thousand[i])) {
                    current += thousand[i]
                }
            }
            current = +current + sum
            current = user.balance.slice(0, 1) + current + user.balance.slice(user.balance.length - 3, user.balance.length)
            user.balance = ""

            for (let j = 0; j < current.length; j++) {
                if (current.length - j === 6) {
                    user.balance += ","
                }
                user.balance += current[j]
            }
        }
        return user
    }
    )
    return newArr
}

// TODO Ճիշտ է բայց էլի շատ երկար էս գրել, ստորակետները հանգիստ անտեսի թէ չէ որ ստորակետների հետևից ընկնենք
//  պատկերացնում ես մեծ թվերի հետ աշխատելուց ինչքան պետքա տանջվենք էտ ընդամենը ֆորմատինգի համարա:

const user1 = users.find(user => user.name === "Diann Tillman");
const currentBalance = user1.balance.replace('$', '').replaceAll(',', '')
user1.balance = `$${currentBalance + 1000}`

console.log(addBalance(users, 1000))

//  3.5

function findUser(users = [], str = "") {
    return users.find(user => user.name === str)
}
console.log(findUser(users, "Phyllis Morin"))

// TODO Ճիշտ է