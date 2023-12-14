/*async function x() {
    let result = '11';
    await new Promise((res) =>{
       setTimeout(() => {
        
        result = 1000;
        res(result)
    }, 3000)
}).then(result => console.log(result))
    return result;
}

console.log(x());*/

 function go(){
   fetch("https://jsonplaceholder.typicode.com/comments")
   .then(response => console.log(response.json()))
   //.then(data =>console.log(data))
}
go()