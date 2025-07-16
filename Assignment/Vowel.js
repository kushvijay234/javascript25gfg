/* 
Check Vowel or Consonant
Check if a given character is a vowel or a consonant.
*/

function checkVowel(char) {
    char = char.toLowerCase();

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == "u") {
        return "Vowel"
    }
    else  {
        return "Consonant"
    }
}

let result = checkVowel('e');
console.log(result);