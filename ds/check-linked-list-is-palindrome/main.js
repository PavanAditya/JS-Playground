// ? Creating a Node to store both value and reference to next node.
function Node(value) {
    this.value = value;
    this.next = null;
}

// ? Checking the Linked List and returning the result.
const checkLinkedListIsPalindrome = (list) => {
    let linkedListStr = '';
    while (list) {
        linkedListStr += list.value;
        list = list.next;
    }
    return linkedListStr === linkedListStr.split('').reverse().join('');
}

const list = new Node('a');
list.next = new Node('b');
list.next.next = new Node('c');
list.next.next.next = new Node('d');
list.next.next.next.next = new Node('c');
list.next.next.next.next.next = new Node('b');
list.next.next.next.next.next.next = new Node('a');

console.log(`The given Linked list is ${checkLinkedListIsPalindrome(list) ? 'a' : 'not a'} Palindrome.`);