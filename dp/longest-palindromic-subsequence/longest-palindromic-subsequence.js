function longestPalindromicSubsequence(s) {
    const n = s.length;
  
    // Create a table to store lengths of LPS of substrings
    const dp = Array(n).fill(null).map(() => Array(n).fill(0));
  
    // Strings of length 1 are palindromes of length 1
    for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
    }
  
    // Fill the table diagonally
    for (let cl = 2; cl <= n; cl++) { // cl is length of substring
      for (let i = 0; i <= n - cl; i++) {
        let j = i + cl - 1;
        if (s[i] === s[j] && cl === 2) {
          dp[i][j] = 2;
        } else if (s[i] === s[j]) {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
        }
      }
    }
  
    return dp[0][n - 1];
  }
  
  // Example usage:
  const string1 = "BBABCBCAB";
  console.log(`The length of the LPS of '${string1}' is ${longestPalindromicSubsequence(string1)}`); // Output: 7
  
  const string2 = "AGBCBA";
  console.log(`The length of the LPS of '${string2}' is ${longestPalindromicSubsequence(string2)}`); // Output: 6
  
  const string3 = "ABCB";
  console.log(`The length of the LPS of '${string3}' is ${longestPalindromicSubsequence(string3)}`); // Output: 3
  
  const string4 = "AAAA";
  console.log(`The length of the LPS of '${string4}' is ${longestPalindromicSubsequence(string4)}`); // Output: 4
  
  const string5 = "ABC";
  console.log(`The length of the LPS of '${string5}' is ${longestPalindromicSubsequence(string5)}`); // Output: 1

//   Time Complexity: O(n^2)
//   Space Complexity: O(n^2)