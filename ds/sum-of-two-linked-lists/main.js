function Node(value) {
    this.value = value;
    this.next = null;
}

// ? Function accepts single linked list as input and returns the string representation of it.
const displayList = (list) => {
    let resultListDisp = '';
    while (list) {
        resultListDisp += `${list.value}${list.next ? '->' : ''}`;
        list = list.next;
    }
    return resultListDisp;
}

// ? Function accepts single linked list as input and will return the reversed list.
const reverseList = (list) => {
    let prev = null;
    let next = null;
    let current = list;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return list = prev;
};

// ? Function accepts two linked lists as input and will return the sum of the two lists.
const sumTwoLinkedLists = (list1, list2) => {
    let sum = 0;
    let carry = 0;
    let result = new Node(0);
    let current = result;

    let revList1 = reverseList(list1);
    let revList2 = reverseList(list2);

    while (revList1 || revList2) {
        sum = carry;
        if (revList1) {
            sum += revList1.value;
            revList1 = revList1.next;
        }
        if (revList2) {
            sum += revList2.value;
            revList2 = revList2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10);
        current = current.next;
    }
    if (carry) {
        current.next = new Node(carry);
    }
    // ? sending next because first node is always zero which is added for the initial allocation and needed to be removed.
    return reverseList(result.next);
};

const list1 = new Node(9);
list1.next = new Node(9);
list1.next.next = new Node(9);
list1.next.next.next = new Node(9);
list1.next.next.next.next = new Node(8);
list1.next.next.next.next.next = new Node(8);

const list2 = new Node(1);
list2.next = new Node(2);

// ? Output
console.log(`List 1: ${displayList(list1)} + List 2: ${displayList(list2)} =`, displayList(sumTwoLinkedLists(list1, list2)));