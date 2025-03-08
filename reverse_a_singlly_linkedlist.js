//  1 -> 2 -> 3 -> 4 -> null
// hint 1: switch the head and tail

// hint 2: reverse the arrow
// null <- 1 <- 2 <- 3 <- 4


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

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current
        let prev = null;
        let next = null;
        for (let i = 0; i<this.length;i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }
}



const LL = new Linked_list(0);
LL.push(1); 
LL.push(2);
LL.push(3);
console.log("before reverse \n" , LL);
LL.reverse()
console.log("after reverse", LL)

// 2:45:35