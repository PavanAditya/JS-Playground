# Leasr Common Ancestor

> Given two nodes in the entire Binary tree, find the least common ancestoral node which the two nodes meet when backtraced.
> If one of the node (or both the nodes) are not present in the tree then return 'null'

## Logic

- Find the path from the root node to both the nodes and store them in an array(of objects).
- Re-iterate both the arrays simultaneously until both of the current nodes are same.
- Stop at the point where both the node values become different and print the node just before the current.