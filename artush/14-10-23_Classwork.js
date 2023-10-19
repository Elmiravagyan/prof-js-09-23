// let a = 0

// function counter (){
//     return ++a
// }

// console.log(counter())
// console.log(counter())
// console.log(counter())

// function customGreet(name , message){
//     return function(){
//         return(`${message} ${name}`)
//     }
// }

// let hiAra = customGreet('Ara' , 'Hi')
// let helloSam = customGreet('Sam' , 'hello')

// let res = hiAra()
// let res1 = helloSam()

// console.log(res , res1)

// function calc(first , operator){
//     return function(second){
//         let result 
//         switch(operator){
//             case '+':
//                 result = first + second
//                 break
//             case '-': 
//                 result = first - second
//                 break
//             case '/':
//                 result = first / second
//                 break
//             case '*':
//                 result = first * second 
//         }
//         return result
//     }
// }

// console.log(calc(6 , '*')(4))

function calc(first){
    return function (operator){
        return function (second){
            switch(operator){
                case '+': return first + second 
                case '-': return first - second 
                case '*': return first * second 
                case '/': return first / second 
            }
        }
    }
}

console.log(calc(5)('*')(5))