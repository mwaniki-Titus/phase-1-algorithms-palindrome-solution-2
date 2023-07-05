function isPalindrome(word) {
  // Write your algorithm here
   const leng = word.length;
    //loop thru half of the string
    for (let x = 0; x < leng / 2; x++) {
        if (word[x] !== word[leng - 1 - x]) {
            return false;
        } else {
            return true;
        }

    }
    word = prompt('Enter a word:')
        //call the function
    console.log(isPalindrome(robot));

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
