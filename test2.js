function greetPerson(name) {
    let greetMessage = 'Goodmorning ' + name + ' How are you doing today?';
    console.log(greetMessage);
}
greetPerson('Cornelius,');
//the code above is a teaser... lets move!!

function userName(name) {
    let clientName = 'Hi ' + name + '! Welcome to JAMMY Enterprise'
    console.log(clientName);
}
userName('Kareen');

function displayMessage(name, state, country) {
    let message = 'Tada! ' + 'Good day mrs. ' + name + ' from ' + state + ', in ' + country;
    return message;
}
let userInfo = displayMessage('Grace', 'Enugu State', 'Nigeria.');

console.log(userInfo); //Wow! this was neat bro!
//So when console.log or any other action is used inside a function,
//the return keyword isn't necessarry.


function createChat(company) {   
    let chat = 'Welcome to ' + company + '. We help our clients actualize their dreams. Lets talk';
    return chat;
}
console.log(createChat('JAMMY Enterprise'));
 
//The same code, different methods or approach, the same result.

function createChat2(company) {   
    let chat = 'Welcome to ' + company + '. We help our clients actualize their dreams. Lets talk';
    console.log(chat);
}
createChat2('Kareen ltd.');




function userInput(username, password, safeWord) {
    let userInfo = 'Username:' + username + ' Password:' + password + ' Safe Word:' + safeWord;
    return userInfo;
}
let userData = userInput('jammy', 'Chidex2443', 'Man Know Self');
console.log(userData);
//Alternatively I could use;
//console.log(userInput('jammy', 'Chidex244', 'Man Know')); to log this function.

function gamePlay(p1, p2, p3) {
    let gameInput = p1 * p2 / p3;
    return gameInput;
}
let gameData = gamePlay(65, 1156.7, 120);
console.log(gameData);

//JS OBJECTS

const person = {firstName:'Chiamaka', lastName:'Nwokolo', age:19};
// To access the object(person) properties, use object.property or object:[property]
console.log(person.age + ' ' + person['lastName']);

//Using method: methods are functions stored in the property
const people = {
    firstName:'Vitus',
    lastName: 'Asogwa',
    age:28,
    fullName : function() {
        return this.firstName + ' ' + this.lastName + ' ' + this.age;
    }
};
console.log('Full Name:', people.fullName());
console.log('First Name:', people.firstName);

const school = {
    schoolName:'University of Nigeria',
    faculty:'Arts',
    department:'Theatre and Films',
    mySchool: function() {
        return this.schoolName + ', Faculty of ' + this.faculty + ', Department of ' + this.department + '.';
    }
};
console.log('My School is:', school.mySchool());

const number = {
    x : 25.41333,
    y : 10,
    z : 142,
    X : function() {
        return this.x * this.z;
    }
};
console.log(number.X());

//JS at() is used to access a particular character in a string.
let names = 'John Doe';
let posit = names.at(5); //alternatively, I could use charAt().
console.log(posit);

//Another way is using [].
{
    let names = 'Kareen Asogwa';
    let posit = names[11];
    console.log(posit);
}

//using negative indices with JS slice()
const alpha = 'Cornelius Asogwa.';
let slicedAlpha = alpha.slice(-7, -1); //Negatives starts count from the back. -1 is the first char, -2 is the second, etc.
let countAlpha = alpha.length; //In using .length to get the total length, .length - negative. start is inclusive,
console.log(slicedAlpha);      //end is exclusive.
console.log(countAlpha);

//positive indices with JS slice()
{
    const alpha = 'Kareen Asogwa';
    let slicedAlpha = alpha.slice(0, 6); //start is inclusive, end is exclusive.
    console.log(slicedAlpha);
}