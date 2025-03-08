class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class Doubly_linked_list {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined; // Edge case: empty list

    let poppedNode = this.tail; // Store the tail to return later

    if (this.length === 1) {
      // If there's only one node, reset the list
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev; // Move tail pointer back
      this.tail.next = null; // Remove reference to the removed node
      poppedNode.prev = null; // Cut link for garbage collection
    }

    this.length--; // Decrease length
    return poppedNode; // Optional: return the removed node
  }
  unshift(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }

    this.head.prev = newnode;
    newnode.next = this.head;
    this.head = newnode;
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    
    this.length--;
    return temp;
  }
}

let DoubllyLinkedList = new Doubly_linked_list(0);
DoubllyLinkedList.push(1);
DoubllyLinkedList.push(2);
DoubllyLinkedList.push(3);
DoubllyLinkedList.push(4);
DoubllyLinkedList.pop();      // removes 4
DoubllyLinkedList.unshift(100); // adds 100 at the beginning
console.log("Before shift:", DoubllyLinkedList); // to verify initial head
DoubllyLinkedList.shift();    // should remove 100
console.log("After shift:", DoubllyLinkedList);  // to verify new head
console.log(DoubllyLinkedList);
