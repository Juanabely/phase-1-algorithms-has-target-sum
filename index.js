function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const compliment = target - array[i]
    for (let j = i + 1 ; j < array.length; j++){
      if (array[j] === compliment) return true;
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2) = Runtime
  0(n) = Space
*/

/* 
  Add your pseudocode here
  1.Function that has an array as a parameter and a target number
  2.inside the function there is a loop to each number in the array
  3.Another array loop to find the other to check if it matches compliment
*/

/*
  Add written explanation of your solution here
  i've done a loop of the array and made a complement variable which will store the target minus the the number in the loop ,also made the other loop to get the other numbers which if that number is our compliment means two numbers in the array can add up to our target 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
