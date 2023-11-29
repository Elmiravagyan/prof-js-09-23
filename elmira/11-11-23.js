
function global() {
    let count = 0;

    function add() {
        return ++count;
    }
    function sub() {
        return --count;
    }
    return { add, sub };
}


let { add, sub } = global();


function counterGenerator() {
    let count = 0;
    function global() {
        return () => ++count;
    }
    return global;
}

const createCounterTeam1 = counterGenerator();
const createCounterTeam2 = counterGenerator();

const conter1T1 =  createCounterTeam1();
const conter2T1 =  createCounterTeam1();


const conter1T2 =  createCounterTeam2();
const conter2T2 =  createCounterTeam2();


let users = [{name: 'Ani', team: 'A'}, {name: 'Sona', team: 'A'},{name: 'Gevorg', team: 'B'}, {name: 'Davit', team: 'B'}, {name: 'Stepan', team: 'C'}, {name: 'Aren', team: 'C'},{name: 'Rafayel', team: 'D'}, {name: 'Gohar', team: 'D'}];
users.reduce((teams, user) => {
    if(teams[user.team]) {
        teams[user.team].push(user);
    } else {
        teams[user.team] = [user];
    }
    return teams;
}, {})


const response  = {
    schema: [{columnName: 'Name', type: 'string'},{columnName: 'Age', type: 'number'}],
    data: [['Sam',25],['Ani',22]];
}

// Output => users = [{ name: 'Sam', age: 25}, { name: 'Ani', age: 22 }]
