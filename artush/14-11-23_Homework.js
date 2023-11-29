const response  = {
    schema: [{columnName: 'Name', type: 'string'},{columnName: 'Age', type: 'number'}],
    data: [['Sam',25],['Ani',22]]
}

let data = response.data

function UserObjectGenerator(userData){
    this.name = userData[0]
    this.age = userData[1]
}

let users = data.map((user) => new UserObjectGenerator(user))

console.log(users)

/////////////////////

