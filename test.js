const car = {type:'BMW', model:'c500'};
car.owner = 'Cornelius';
car.model = 'c570';

console.log('Car owner is ' + car.owner + ', ' + 'And car make is ' + car.model);
//seems practice here is more prefferable, but i shouldn't rush growth.

const userNames = ['Asogwa', 'Odo', 'Onah', 'Agbo'];
userNames.push('Odo');
userNames[1] = 'Nwokolo';
const spacedUserNames = userNames.join(' '); //This is used to add space between array elements.

console.log(spacedUserNames)

let names = 'Asogwa';
names += ' Cornelius Chidera'; //the += can be used to add value to variable. (I just reassigned names)
console.log(names);

// JS LOGICAL OPERATORS
let a = true;
let b = false;
console.log(a && b);

{
    let a = false;
    let b = true;
    console.log(a || b);
}

{
    let a = true;
    let b = false;
    console.log(!a);
}

// JS LOGICAL ASSIGNMENT OPERATORS
{
    let a = true;
    a &&= true;
    console.log(a)
}

{
    let a = true;
    a ||= false;
    console.log(a)
}

{
    let a;
    let b = 65;
    a ??= false;
    console.log(a)
}

function getReadInfo() {
    let read = 'what\s up today!';
    return read;
    
}
