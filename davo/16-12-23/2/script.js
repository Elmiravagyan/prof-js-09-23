let number1,number2,action,res;
let calcurator=document.getElementById("calcurator");
let result=document.getElementById("result");

calcurator.addEventListener("click",(event)=>{


    let curent=result.innerText
    curent+=event.target.innerText
    result.innerText=curent
    if(curent.startsWith("0")){
        curent=curent.substring(1)
    }
    result.innerText=curent;
    if(event.target.innerText==="+"||event.target.innerText==="-"||event.target.innerText==="*"||event.target.innerText==="/"){
        number1=+result.innerText.slice(0,length-1) ;
        action=result.innerText.slice(length-1);
        result.innerText="";
        //let curent2=event.target.innerText;
        //result.innerText=curent2;
    }
    if(event.target.innerText==="="){

        number2=+result.innerText.slice(0,length-1);
        switch (action) {
            case "+":
               res=number1+number2
                break;
            case "-":
                res=number1-number2
                break;
            case "*":
                res=number1*number2
                break;
            case "/":
                res=number1/number2
                break;

        }
        result.innerText=res;
    }

 if(event.target.innerText==="C") result.innerText="";
 if(event.target.innerText==="_")result.innerText=result.innerText.slice(0,length-2);
})