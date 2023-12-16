let ccontainer=document.getElementById("container");
let page=document.getElementById("page")
console.log("Davo")
function fetchData(offset=1){
fetch(`https://harvardartmuseums.org/browse?load_amount=21&offset=${offset}`)
.then(result=>result.json())
.then((json)=>{
  container.innerText=""
    console.log("Davo")
     json.records.forEach(element => {

        let divelEment=document.createElement("div")
        let textElement=document.createElement("div")
        let imegElement=document.createElement("img")
        let titlElement=document.createElement("div")
        let idElement=document.createElement("div")
            imegElement.src=element.primaryimageurl
            imegElement.setAttribute("class","image")
            divelEment.setAttribute("class","divElement")
            idElement.innerText=`${element.id}`
            textElement.append(idElement)
            titlElement.innerText=` ${element.title} `
            textElement.append(titlElement)
            divelEment.appendChild(imegElement)
        
        divelEment.appendChild( textElement)
        
        container.append(divelEment)
 
   });


})
.catch(error => console.error('Error fetching data:', error));
};
fetchData(0)
let with1=document.createElement("button");
let ahead=document.createElement("button");
let numbers=document.createElement("div")


with1.innerText="<"
ahead.innerText=">"
page.append(with1)
page.append(numbers)
page.append(ahead)

function updatePage(event) {
    if (event.target.tagName === "BUTTON") {
      const buttonValue = event.target.innerText;
      let currentPage = 1; 
      let offset ;
  
      if (buttonValue === "<") {
       
        currentPage = Math.max(1, currentPage - 1);
      } else if (buttonValue === ">") {
        
        currentPage = currentPage + 1;
      } 
  
     
      offset = (currentPage - 1) * 21;
  
    
      fetchData(offset);
    }
  }
 
  function updatePageButtons() {
    numbers.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      let pageNumberButton = document.createElement("button");
      pageNumberButton.innerText = i;
      numbers.append(pageNumberButton);
      pageNumberButton.addEventListener("click", ()=> {
        fetchData((i - 1) * 21); 
      });
    }
  }
   page.addEventListener("click" ,(event)=>updatePage(event))
   updatePageButtons()
