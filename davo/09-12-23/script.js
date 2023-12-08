let input=document.getElementById("search");
let btn=document.getElementById("btn");
let contenier=document.getElementById("contenier");

let users = [];
fetch("https://jsonplaceholder.typicode.com/posts")
.then(result=>result.json())
.then((json)=>{
    users = json;
    // contenier.classList.add("hide")
    json.forEach((element) => {
   //      let postElement=document.createElement("div")
   //
   //  let title = document.createElement('div');
   //  let body = document.createElement('div');
   //  postElement.setAttribute("class","post");
   // title.setAttribute("class","title");
   // body.setAttribute("class","body")
   //
   //  title.innerText=element.title;
   //  body.innerText=element.body;
   //  postElement.append(title,body)
    contenier.append(createUserItem(element))
    });
})

function createUserItem(element) {
    let postElement=document.createElement("div")

    let title = document.createElement('div');
    let body = document.createElement('div');
    postElement.setAttribute("class","post");
    title.setAttribute("class","title");
    body.setAttribute("class","body")

    title.innerText=element.title;
    body.innerText=element.body;
    postElement.append(title,body)

    return postElement;
}

function usersFilter() {
    const search = input.value
    if(search) {
        contenier.innerHTML = '';
    }
    const filteredUsers = search ? users.filter(user => user.title.includes(search)) : users;
    filteredUsers.forEach(user => contenier.appendChild(createUserItem(user)))
}

btn.addEventListener('click', usersFilter)

// btn.addEventListener("click",(event)=>{
//     console.log([...contenier.children]);
// [...contenier.children].forEach((item)=>{
//     if(!item.firstChild.innerText.includes(`${input.value.toLowerCase()}`)){
//     item.classList.add('hide');
// } else {
//     item.classList.remove('hide');}
// })
// })

// TODO user -ներին նկարելու պահը ստացվել էր, բայց ֆիլտրը մի քիչ սխալա նկատի ունեմ դու class ես ավելացնում որ
//  չերևան ֆիլտրին չհամապատասխանող էլեմենտները բայց դա ընդունված պրակտիկա չի, css -ը մեր էջին տեսք հաղորդելու համարա իրան ճիշտ չի
//  օգտագորել տրամաբանական կտորների լուծման համար
//  սկզբի համար կարող ենք user -ներին ստանալուց հետո
//  պահել  ինչ որ տեղ ես users անունով փոփոխական եմ ստեղծել ու վերագրում եմ անում user -ներին ստանալուց հետո,
//  մի  user -ին ստեղծելու կտորը դարձրել եմ առանձին ֆուկցիա որ որտեղ ցանկանանք օգտագործենք իսկ usersFilter -ը ֆիլտրի համաար եմ գրել
//  որը ստուգում ա եթե input-ը դատարկ չի դատարկում ա contenier -ը ու ֆիլտրած user -ներին նորից նկարումա, հակառակ դեպքում նկարումա բոլորին