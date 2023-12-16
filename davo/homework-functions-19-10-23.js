//----1----
function revers(number) {
    let reversString=number.toString();
    reversString=reversString.split("");
    reversString=reversString.reverse();
    reversString=reversString.join("");
    return reversString
    
}