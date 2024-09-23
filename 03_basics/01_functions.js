function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// } //perameter
function addTwoNumber(number1, number2){
    
    // let result = number1 + number2
    // return result 
    return number1 + number2
    
} 


const result = addTwoNumber(3, 5) // argument
// console.log("result: ", result);

function loginUserMessage(username){
    if(username === undefined){
console.log("please enter a username");
return

    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage())