


function addTwoNumbers(number1, number2){
   return number1 + number2;
}

console.log(addTwoNumbers(4, 5));

function sayWhatsUp(){
    let usersMood = prompt("What is up with you?");
    while (usersMood.length === 0){
        alert("You didn't explain how you're doing.");
        usersMood = prompt("Please tell me how you're doing.");
    }
    console.log("This user's mood is: " + usersMood);
    document.write("Glad to know you are doing " + usersMood);
    return usersMood;

}

// let usersName = sayHi();

// console.log(usersMood);

alert("lorem ipsum");

// function enterName() {
//     let userName = prompt("What is your name?");
//     document.write("Hello" + userName);
//     return userName;
// }

// function math(){
//     let x = 80;
//     let y = 340;
//     let sum = x + y
//     document.write(sum + "blaze it");
//     return sum;

// }

// let myNum = math()

// function rateMyPage() {
//     let rating = prompt ("How many stars woudl you rate my page?");
//     for (let i = 0; i< rating; i++){
//         document.write("<img src='star.jpg' alt='shiny gold star' img class='rating-pic">)
//     }
// }