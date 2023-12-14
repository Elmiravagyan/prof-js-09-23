 
 let container = document.getElementById("container");
 let input = document.getElementById("input");
 let searchBtn = document.getElementById("search");
 let itemCont = document.getElementById("item-container");
 let loadBtn = document.getElementById("load")
 
  function createItem(obj, imageArr){
     let item = document.createElement("div");
     let image = document.createElement("img");
     let title = document.createElement("div");
     let copyright = document.createElement("div");
     let division = document.createElement("div");
     let id = document.createElement("div");
     let top = document.createElement("div");
     let bottom = document.createElement("div");
       
       item.setAttribute("id", "item");
       
       image.setAttribute("src",`${imageArr}`);
       image.setAttribute("alt","Harvard art museums foto");
       image.setAttribute("id", "art");

       title.innerHTML = `${obj.title}`;
       copyright.innerHTML =`${obj.copyright}`? `${obj.copyright}`: `${"-----"}`;
       division.innerHTML = `${obj.division}`;
       id.innerHTML = `${obj.id}`;

       bottom.append(id, title, division, copyright)
       bottom.setAttribute("id", "bottom");

       top.appendChild(image);
       top.setAttribute("id", "top");

       item.append(top, bottom);
       itemCont.append(item)
       return item;
  }
    function loadMore(number){ 
     return number += 30;
    }
    let numberOfItems = 30;
  fetch(`https://harvardartmuseums.org/browse?load_amount=${numberOfItems}&offset=12`)
   .then(response => response.json())
   .then(data => {
     let objArr = data.records;
       return objArr.map((item,i,arr) =>{
        let imgUrl = item.images[0].baseimageurl;
              createItem(item, imgUrl)
       
          
              searchBtn.addEventListener("click",()=>{
                let value = input.value;
                
                if(value){
                itemCont.innerHTML = "";
              let filtered = arr.filter(item => item.division.toLowerCase() === value.toLowerCase())
                
               filtered.map(item =>{
               
                let imgUrl = item.images[0].baseimageurl;  
                createItem(item, imgUrl);
                
               })
            }else if(!value){
                
              itemCont.innerHTML = "";
              objArr.map(item =>{
                let imgUrl = item.images[0].baseimageurl; 
                 createItem(item, imgUrl)
              })
             }
         })
        
       })
 })
  loadBtn.addEventListener("click",()=>{
    itemCont.innerHTML = "";
    fetch(`https://harvardartmuseums.org/browse?load_amount=${loadMore(numberOfItems)}&offset=12`)
    .then(response => response.json())
    .then(data => {
        let objArr = data.records;
          return objArr.map((item,i,arr) =>{
           let imgUrl = item.images[0].baseimageurl;
                 createItem(item, imgUrl)
          
             
                 searchBtn.addEventListener("click",()=>{
                   let value = input.value;
                   
                   if(value){
                   itemCont.innerHTML = "";
                 let filtered = arr.filter(item => item.division.toLowerCase() === value.toLowerCase())
                   
                  filtered.map(item =>{
                  
                   let imgUrl = item.images[0].baseimageurl;  
                   createItem(item, imgUrl);
                   
                  })
               }else if(!value){
                   
                 itemCont.innerHTML = "";
                 objArr.map(item =>{
                   let imgUrl = item.images[0].baseimageurl; 
                    createItem(item, imgUrl)
                 })
                }
            })
           
          })
       
  })
})