// create the individual nodes
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// create the Linked_list
class Linked_list {
  constructor(value) {
    this.head = new Node(value); // pass the value to the node and point the head to the node
    this.tail = this.head; // assign the tail to head
    this.length = 1;
  }


  // push method
  // new node at the end of the linkedlist

  push(value) {
    let newNode = new Node(value); // create a new node
    if (!this.head) {
      // if there is no node to assign the head, then
      this.head = newNode; // assign the head to the new node
      this.tail = newNode; // assign the tail to the new node
    }
    this.tail.next = newNode; // tail's next will be the new node
    this.tail = newNode; // tail's will be shifted to the new node
    this.length++; // increment the length of the LL
  }


  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head; // we take 2 vairiables and assign both to the head
    let prev = this.head;
    while (temp.next) {
      // while the next of temp exixts ,
      prev = temp; // we assign the previous to the curent temp
      temp = prev.next; // we assign the temp to temp's next
    }
    this.tail = prev; // we assign the tail to previous
    this.tail.next = null; // set the next of tail to null
    this.length--; // decrement the length of the
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp; // returend the popped element
  }


  unshift(value) {
    let newNode = new Node(value); // create new node
    if (!this.head) {
      // if ll is null then assign head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head; // next of new node is assigned to head
    this.head = newNode; // head is assigned to  new node
    this.length++;
    return this;
  }


  shift() {
    if (!this.head) return undefined;
    let temp = this.head; // assign a new variable temp to head 
    this.head = this.head.next; // assign head to head next 
    temp.next = null; // assign the temp next to null ... to detach it from the ll
    this.length-- 
    if(this.length === 0) this.tail = null; 
  }


  getFirst(){
    return this.head;
  }


  getLast(){
    let temp = this.head;
    while(temp.next != null) temp = temp.next
    return temp;
  }


  getindex(index){
    let temp = this.head
    for(let i = 0 ; i < index; i++){
        temp = temp.next
    }
    return temp;
  }


  Update(value, index){ // complexity ?
    let temp = this.head;
    for(let i = 0 ; i < index; i++){
        temp = temp.next
    }
    temp.data = value
  }


  insert(value, index){
    if(index === 0) return this.unshift(value)
    if(index === this.length) return this.push(value)
    if(index > this.length) return undefined
    let newNode = new Node(value)
    let temp = this.head
    for(let i = 0 ; i < index-1; i++){
        temp = temp.next
    }
    newNode.next = temp.next
    temp.next = newNode
    this.length++
  }


  size(){
    return this.length
  }


  clear(){
    this.head.next = null
  }
  
}

const myLinkedList = new Linked_list(1);
myLinkedList.push(10);
myLinkedList.push(100);
myLinkedList.push(1000);
myLinkedList.pop();
myLinkedList.unshift(-1);
myLinkedList.shift(-1);
myLinkedList.Update(25, 2);
myLinkedList.insert(0,1)
console.log(myLinkedList);
// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getindex(2));
console.log(myLinkedList.size());