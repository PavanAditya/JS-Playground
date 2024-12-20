# Coin Change (Amazon Gift Card Combinations)

Amazon is running a promotion where customers can use a combination of gift cards to make a purchase. You are given an array of gift card denominations (coins) and a target purchase amount (amount). You need to find the minimum number of gift cards required to reach the target amount. If it's not possible to make the exact amount using the given denominations, return -1.

**Smaple Input 1:** coins = [1, 2, 5], amount = 11
**Sample Output 1:** 3
**Explanation 1:** 5 + 5 + 1

**Smaple Input 2:** coins = [2], amount = 3
**Sample Output 2:** -1
**Explanation 2:** Cannot make 3 using only 2s

**Smaple Input 3:** coins = [1, 2, 5], amount = 0
**Sample Output 3:** 0
**Explanation 3:** No gift cards needed for a zero amount

**Smaple Input 4:** coins = [1, 5, 10, 25], amount = 30
**Sample Output 4:** 2
**Explanation 4:** 25 + 5