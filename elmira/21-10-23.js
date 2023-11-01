// Inheritance
// Example
let obj =  {
    name: 'Ann',
    surname: 'Smith',
    fullName: function () {
        return `${this.name} ${this.surname}` // obj.name + ' ' + obj.surname
    }
};

let obj2 = Object.assign({}, obj);

console.log(obj.fullName());
console.log(obj2.fullName());

//Setter, Getter
let user = {
    name: 'Hayk dkjfhkdf58',

    get name() {
        let realName = this.name.split(' ')[0];
        return realName;
    },

    set name(arg) {
        if(typeof arg === 'number') {
            throw Error('Can not set number');
        }
        this.name = arg.replace(arg[0], arg[0].toUpperCase());
    }
}

//Constructor function;
function User(fullname, age) {
    this.fullname = fullname;
    this.age = age;
}

let userA = new User('Sam Smith', 28); //1. this =  {};

let usersProto = {
    name: '',
    age: '',
};

let userWithProto = users.map(name => {
    let user = {};
    user.__proto__ = usersProto;
    user.name = name;
    return user;
})

usersProto.type = 'admin';

console.log('Log ::: userWithProto[0].type ===', userWithProto[0].type)

function User(fullname, age) {
    this.fullname = fullname;
    this.age = age;
}

let user = new User('Ani', 'Manukyan');
user.__proto__.greetUser = function () { return `Hello ${this.fullname}` };

let user1 = new User('Ben', 'Br');


//Exam questions
// function User(name, surname, age, balance) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//     this.balance = balance;
//     this.addBalance = function(newBalance) {
//         this.balance += newBalance;
//     }
// }

// function createUser(name, surname, age, balance) {
//     return ({
//         name, surname, age, balance, addBalance: function(newBalance) {
//             this.balance += newBalance;
//         }
//     })
// }
