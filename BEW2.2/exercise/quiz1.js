//  Scenario: A teacher needs to automatically determine if a student has passed or failed a quiz based on their score.
// - Task: Write a script that checks a variable called score.
// - Rules:
//   - If the score is 50 or higher, print "Pass".
//   - If the score is less than 50, print "Fail".
// - Bonus Challenge: Add an extra condition. If the score is exactly 100, print "Perfect Score!" instead of just "Pass".

const score = 85;

if (score =>50) {
    console.log("Pass");
} else if (score < 50) {
    console.log("Fail");
};



// # Exercise 2: Counting Even Numbers (for loop + if)

// # Scenario: You need to list out numbers, but you only want to highlight the even ones.
// - Task: Write a for loop that counts from 1 up to 10 (inclusive).
// - Rules:
//   - Inside the loop, use an if statement and the remainder operator (%) to check if the current number is even.
//   - Print only the even numbers to the console (2, 4, 6, 8, 10).


for (i=1;i<=10;i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}
    
    




// # Exercise 3: Blast Off Countdown (while loop)

// # Scenario: Simulate a rocket launch countdown.
// - Task: Create a variable called counter and set it to 5.
// - Rules:
// 	- Use a while loop that runs as long as counter is greater than 0.
// 	- Inside the loop, print the current value of counter and then decrease it by 1.
// 	- After the loop finishes entirely, print "Blast off! 🚀".


let counter = 5;

while (counter > 0) {
    console.log(counter);
    counter--;
}

console.log("Blast off!");
