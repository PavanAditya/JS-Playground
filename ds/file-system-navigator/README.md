# File System Navigator

## Problem Statement

You are developing a file system navigator for a new operating system. The file system is represented as a binary tree, where each node is either a file or a directory. Your task is to implement a function that finds the path to a given file or directory within this system.

Implement a `FileSystemNode` class and a `findPath` function with the following specifications:

1. The `FileSystemNode` class should have these properties:
   - `name`: string (name of the file or directory)
   - `isDirectory`: boolean (true if it's a directory, false if it's a file)
   - `left`: FileSystemNode or null (left child)
   - `right`: FileSystemNode or null (right child)

2. The `findPath` function should:
   - Take two parameters: the root of the file system tree and a target file or directory name.
   - Return the full path to the target if found, or "File/Directory Not Found" if not found.
   - Represent the path as a string with directories separated by '/'.
   - If there are multiple paths to the same named file/directory, return any valid path.

## Function Signature

```javascript
function findPath(root: FileSystemNode, target: string): string
```

## Explanation

This problem tests your ability to traverse a binary tree (representing a file system) and construct a path string. You'll need to implement a recursive or iterative solution that explores the tree, keeping track of the current path as you go. When the target is found, you'll return the constructed path. If the entire tree is traversed without finding the target, you'll return the "not found" message.

Key points to consider:

* How to differentiate between files and directories
* How to build the path string as you traverse
* How to handle the case when the target isn't found
* Efficiency of your traversal method

## Sample Input/Output
Consider the following file system structure for these examples:

```
root (D)
|-- documents (D)
|   |-- report.txt (F)
|   `-- project (D)
|       `-- plan.pdf (F)
`-- pictures (D)
    |-- vacation (D)
    |   `-- beach.jpg (F)
    `-- profile.png (F)
```

## Use Case 1:

**Input:**
root: [root node of the above structure]
target: "report.txt"
Output: "/root/documents/report.txt"

## Use Case 2:

**Input:**

root: [root node of the above structure]
target: "vacation"
Output: "/root/pictures/vacation"

## Use Case 3:

**Input:**

root: [root node of the above structure]
target: "nonexistent.txt"
Output: "File/Directory Not Found"
