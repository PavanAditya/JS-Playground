# Find the Median of Two Sorted Arrays

## Problem Statement

* Find the Median of the array formed by merging and sorting two sorted arrays of Same Size. *

Sample Input:
Arr1 => [1,2,5,6,8,9]
Arr2 => [3,5,7,8,11,13]

Sample Output: 6

Explanation:
Array formed after merging and sorting both the given arrays is [1,2,3,5,5,6,7,8,8,9,11,13]
Median of the given array of numbers is calculated as: (m+n)/2 (rounded to floor) where m and n are the two middle elements
Here m = 6, n = 7 => (m+n)/2 = 6.5  --- Rounded to 6