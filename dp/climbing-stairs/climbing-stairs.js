// ? Solution 1
function climbStairs(n) {
    if (n <= 2) {
      return n;
    }
  
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
  
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    return dp[n];
  }
  
  // Test cases
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(1)); // Output: 1
console.log(climbStairs(5)); // Output: 8

// Time Complexity: O(n) - The loop iterates n-2 times.
// Space Complexity: O(n) - We use an array dp of size n+1. 

// ? Solution 2
function climbStairsOptimized(n) {
    if (n <= 2) {
        return n;
    }
    let oneStepBefore = 2;
    let twoStepsBefore = 1;
    for (let i = 3; i <= n; i++) {
        let current = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = current;
    }
    return oneStepBefore;
}
console.log(climbStairsOptimized(5)) //Output: 8

// Time Complexity: O(n) - The loop iterates n-2 times.
// Space Complexity: O(1) - We only store three variables.
