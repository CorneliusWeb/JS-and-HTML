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


