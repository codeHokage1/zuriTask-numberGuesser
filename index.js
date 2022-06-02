// Function to generate random numbers between 1 and given parameter
const randomInRange = x => {
  return Math.floor(Math.random() * x) + 1;
}

//collect user name and greet
let playerName = prompt('What is your name?: ');
console.log('Welcome to the Guesser game ' + playerName + '!\n');

// set values of the function parameter, level and the answer for first iteration
let i = 2, level = 1, points = 0, answer = randomInRange(i);

// collect user guess
let input = prompt(`Range is 1 to ${i}. Make a guess: `);

// loop to continuously run until user input is wrong
while(true){
  if(parseInt(input) !== answer){
    console.log(`Oops. You guessed wrong.\nYou finished at Level ${level} with ${points} point(s). See ya!`);
    break;
  }
  else{
    console.log('Amazing! On to the next.\n');
    i++;
    level++;
    points++;
    answer = randomInRange(i);
    input = prompt(`Range is 1 to ${i}. Make a guess: `);    
  }
}





