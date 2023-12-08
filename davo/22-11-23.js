function User(name,surname,age,balance,gender,healthIssues) {
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.balance=balance;
    this.gender=gender;
    this. healthIssues=[{diseaseName:"parkinson",type:"A"}]
    this.healthCondition=() =>{
        if(this.healthIssues.length===0){return "Good";} else
            if(this.healthIssues.filter(item=>{
                item.type==="B"
            }).length>0)return "";else return "Medium"
    }}
let a =new User("Anna","C",56,1000, "female",{diseaseName:"parkinson",type:"A"})
console.log(a.healthCondition)

