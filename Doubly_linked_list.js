class Node {
    constructor(value){
        this.data= value
        this.next = null
        this.prev = null
    }
}

class Doubly_linked_list{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return this
    }

    pop(){
        let temp = this.head
        while (temp.next!=null) temp = temp.next
        
    }
}

let DoubllyLinkedList = new Doubly_linked_list(0)
DoubllyLinkedList.push(1)
console.log(DoubllyLinkedList)