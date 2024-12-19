## Kth Smallest Node in a Binary Search Tree

Amazon uses a network of warehouses, each storing a specific range of products. The inventory distribution can be modelled as a Binary Search Tree (BST), where:

* Each node represents a warehouse with a product range (value in the BST).
* The left child represents a warehouse managing smaller product ranges.
* The right child represents a warehouse managing larger product ranges.

To optimize inventory balancing, the team wants to find the kth smallest product range in the BST. Your task is to write a program that efficiently finds the kth smallest element in a BST.

**Sample Input:**

```
      5
     / \
    3   8
   / \   \
  2   4   10

-> k = 3
```

**Sample Output:** 4

**Explanation:** The elements in sorted order are [2, 3, 4, 5, 8, 10]. The 3rd smallest element is 4.


**Sample Input:**

```
      10
     /  \
    5    15
   / \     \
  3   7     20

-> k = 5
```

**Sample Output:** 15

**Explanation:** The elements in sorted order are [3, 5, 7, 10, 15, 20]. The 5th smallest element is 15.

**Sample Input:**

```
      1
       \
        2
         \
          3

-> k = 2
```

**Sample Output:** 2

**Explanation:** The elements in sorted order are [1, 2, 3]. The 2nd smallest element is 2.
