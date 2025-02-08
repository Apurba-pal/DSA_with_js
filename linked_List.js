// create the individual nodes
class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}

// create the Linked_list
class Linked_list{
    constructor(value){
        this.head = new Node(value) // pass the value to the node and point the head to the node 
        this.tail = this.head // assign the tail to head
        this.length = 1
    }
    // push method 
    // new node at the end of the linkedlist 

    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
}

const myLinkedList = new Linked_list()
myLinkedList.push(10)
console.log(myLinkedList)