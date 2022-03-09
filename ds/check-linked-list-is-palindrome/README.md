# Check if the given Linked List is a Palindrome.

Given a Linked List of size N, the task is to check if the Linked List is a Palindrome or not.

> Sample Input 1

```
a->b->c->d->c->b->a
```

> Sample Output 1

```
The given Linked List is a Palindrome.
```

> Sample Input 2

```
a->b->c->b->a
```

> Sample Output 2

```
The given Linked List is not a Palindrome.
```

## Solution Logic

- Traverse through the Linked List and store the elements in a string.
- Check if the string is a Palindrome (reverse the string and compare) and return the result.