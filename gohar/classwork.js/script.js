 //let container = document.getElementById("container")
  
 
  function promise(url,key){
     return fetch([url]).then(response => response.json())
      .then(data => data.map(val => val[key]))
  }
  
/*
  function createMarkup(item){
     let item = document.creatElement("div");
     let img = document.createElement("img")
     let itemIntro = document.createElement("div")
    
     img.setAttribute("id", "avatar");
     item.setAttribute("id", "item-container");
     itemIntro.setAttribute("id", "intro");
     
     item.append(img,itemIntro);
     container.appendChild(item);
     return item;
  }
*/
  let promise1 =promise("https://jsonplaceholder.typicode.com/photos", "url")
  console.log(promise1)

  let promise2 = promise("https://jsonplaceholder.typicode.com/comments","body")

  /*fetch("https://jsonplaceholder.typicode.com/photos")
   .then(response => response.json())
   .then(data => data.map(val =>{
      console.log(val.url);
   }))*/