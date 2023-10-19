let i = 0;
function counter(){
     return i++
}

function calc(a, sign) {
      
    if(sign === '-'){
        return function callback(number){
            return a - number
        }
    }

    if (sign === '+'){
     return function callback(number) {
            return a + number
   }
       
   
   }
}

let sum = calc(1, '+');