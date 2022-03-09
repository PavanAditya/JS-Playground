# Sum of two Linked Lists.

Given are two linked lists with number contained as their node values.
Entire linked list nodes put together to form a number.
Add both the numbers and return the sum as another linked list.

```
Sample Input:

List 1:
9->9->9->9->8->8

List 2:
1->2

Sample Output:
1->0->0->0->0->0->0
```

## Solution

1. Reverse both the linked lists.
2. Sum up each node value along with a carry(maintain a carry variable) and store the result to a new node.
3. Repeat the loop until both the linked lists encounter null.