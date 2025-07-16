/* 
Eligible to Vote
Check if a person is eligible to vote based on their age (age ≥ 18).
*/

function canVote(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}

console.log(canVote(21)); 
console.log(canVote(15)); 