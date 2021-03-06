/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.head = null;
  this.tail = null; // ***
  this.size = 0;
};

// constructor function -> which is nothing but class
var Node = function (value) {
  this.value = value;
  this.next = null;
};

MinStack.prototype.toString = function () {
  return `Current Head : ${this.head.value}, next head : ${this.head.next.value}`;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // !PUSH -> Adding the element @ the top of the stack
  // ! NOTE: Array.prototype.push() adds the element @ end of the array
  let newNode = new Node(x);

  if (!this.head) {
    // new list then head and tail points at this newly added node
    this.head = this.tail = newNode;
  } else {
    // linkedList => [2, 5, 3] i.e-  (this.head) 2 -> 5 -> 3 (this.tail)
    // want to push 6 => [6, 2, 5, 3] steps:
    let currentNode = this.head; // currentNode = 2 = this.head
    this.head = newNode; // (this.head) 6       (currentNode) 2 -> 5 -> 3 (this.tail)
    this.head.next = currentNode; // Now provide link/reference of newly added node to the list using:- next
    // (this.head) 6 -> 2 -> 5 -> 3 (this.tail)
  }

  this.size++;
};

/**
 * @return {void}
 */

MinStack.prototype.pop = function () {
  // !POP ->  Removing the element from the top of the stack
  // ! NOTE: Array.prototype.pop() -> removes the element form the last of array

  if (this.size === 1) {
    this.head = this.tail = null;
  } else {
    // list [6, 2, 5, 3], need to pop first element i.e: 6
    // (this.head) 6 -> 2 -> 5 -> 3 (this.tail)
    let nextReference = this.head.next; // nextReference = 2 (2nd Node)
    this.head = nextReference; // de-referencing the current head and re-referencing it to 2nd Node (next node)
    // 6 {Node got de-referenced}{lost in universe}      (this.head) 2 -> 5 -> 3 (this.tail)
  }
  this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.head.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let minValue = this.head.value; // let assume head value is min value
  let cloneHead = this.head;
  for (let i = 0; i < this.size - 1; i++) {
    cloneHead = cloneHead.next; // cloneHead -> Type: Node  and  cloneHead.next -> Type: Node
    if (cloneHead.value < minValue) {
      minValue = cloneHead.value;
    }
  }

  return minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// !NOTE: Push and Pop operations happens on the top/begining element only

let obj = new MinStack();
// [6, 2, 5, 3]
obj.push(3);
obj.push(5);
console.log(obj.toString());
obj.push(2);
console.log(obj.toString());
obj.push(6);
console.log(obj.toString());
console.log('min value', obj.getMin());

obj.pop();
console.log('After poping the value -> ', obj.toString());

console.log('top Value', obj.top());
