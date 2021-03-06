let util = require('util');
const { parse, stringify } = require('flatted/cjs');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // head = initializeNodesFromArray(head);

  // Think that complete list/array is already present inside nodes, above head is the first
  // node of that singly linked list.
  const initialHeadNode = head; // creating the copy of the head Node
  let listSize = 0;

  // * Don't touch your head -> Manipulate to the cloneHead
  while (head !== null) {
    head = head.next;
    listSize++;
  }
  console.log('listSize is -> ', listSize);

  head = initialHeadNode;

  // ! floor() -> round to  previous whole number
  // ! ceil() -> rounds to next largest whole number
  // ! round() -> round to nearest whole no
  for (let i = 0; i < Math.floor(listSize / 2); i++) {
    head = head.next;
  }

  return head;
};

// !2nd Approach
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

// Node Class, Class -> function in js
function ListNode(val) {
  this.val = val;
  this.next = null;

  // toString(){
  //   return `Current node value is ${this.val}, next node value is ${this.next.val}`;
  // }
}

// !creating function for constructor function class, since you can directly add fun as above
ListNode.prototype.toString = function () {
  return `Current node value is ${this.val}, next node value is ${this.next.val}`;
};

// !Above code is -> constructor function may be converted to a class declaration as below
/* 
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 */

function initializeNodesFromArray(arr) {
  // let currentNode;
  // let nextNode;

  this.currentNode = new ListNode(arr[0]); // current node value got initialize with first element of arr
  const initialHeadNode = this.currentNode;

  // nextNode = currentNode.next;
  // !instead of assigning to another variable, use same variable

  this.currentNode = this.currentNode.next;

  for (let i = 0; i < arr.length; i++) {
    this.currentNode = new ListNode(arr[i]);
    this.currentNode.next = this.currentNode; // creating the reference between two nodes
  }

  // reseting back the first node
  this.currentNode = initialHeadNode;

  for (let i = 0; i < arr.length; i++) {
    console.log(stringify(this.currentNode.next));
  }
  /*   console.log(
    'Reseting back -> ',
    this.currentNode,
    'Next Node: ',
    this.currentNode.next
  ); */

  return this.currentNode;
}

console.log(middleNode([1, 2, 3, 4, 5]));
