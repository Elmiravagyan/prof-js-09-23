let input=document.getElementById("search");
let btn=document.getElementById("btn");
let contenier=document.getElementById("contenier");
fetch("https://jsonplaceholder.typicode.com/posts")
.then(result=>result.json())
.then((json)=>{
    // contenier.classList.add("hide")
    json.forEach((element) => {
        let postElement=document.createElement("div")
       
    let title = document.createElement('div');
    let body = document.createElement('div'); 
    postElement.setAttribute("class","post");
   title.setAttribute("class","title");
   body.setAttribute("class","body")
    
    title.innerText=element.title;
    body.innerText=element.body;
    postElement.append(title,body)
    contenier.append(postElement)
    });
})
btn.addEventListener("click",(event)=>{
    console.log([...contenier.children]);
[...contenier.children].forEach((item)=>{
    if(!item.firstChild.innerText.includes(`${input.value.toLowerCase()}`)){
    item.classList.add('hide');
} else {
    item.classList.remove('hide');}
})
})