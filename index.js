function isPalindrome(word) {
  let j = word.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = word[i];
    let y = word[j - i];
    if (x != y) {

      return false;
    }
  }

    return true;
}

function palindrome(word) {
  let answer = isPalindrome(word);

  if (answer == true) {
    console.log("true");
  }
  else { console.log("false");

  }
}

let test = "racecar"
palindrome(test)

/* 
  Add your pseudocode here
  iterate over string forward and backward
  check if all characters forward and backward match
  if they do, return true, if they don't return false
  if true, it is a palindrome
*/

/*
  Add written explanation of your solution here
  the function should take in a string as a paremeter, use the split, reverse, and join methods to compare the characters in the string, then return true or false if the string is a palindrome or not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
