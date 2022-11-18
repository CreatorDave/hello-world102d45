


function addTwoNumbers(number1, number2){
   return number1 + number2;
}

console.log(addTwoNumbers(4, 5));

function sayHi(){
    let usersName = prompt("What is your name?");
    if (usersName == ""){
        alert("You didn't type your name");
        usersName = prompt("Please tell me your name.");
    }
    console.log("This user's name is: " + usersName);
    document.write("Hello and welcome to my page, " + usersName);
    return usersName;

}

let usersName = sayHi();

consloe.log(usersName);

alert("lorem ipsum");

function enterName() {
    let userName = prompt("What is your name?");
    document.write("Hello" + userName);
    return userName;
}

function math(){
    let x = 80;
    let y = 340;
    let sum = x + y
    document.write(sum + "blaze it");
    return sum;

}

let myNum = math()

function rateMyPage() {
    let rating = prompt ("How many stars woudl you rate my page?");
    for (let i = 0; i< rating; i++){
        document.write("<img src='star.jpg' alt='shiny gold star' img class='rating-pic">)
    }
}