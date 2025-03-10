class Stack{
    constructor(){
        this.data = []
        this.maxSize = 5
    }
    push(value){
        if(this.data.length >= this.maxSize){
            console.log(`Stack overflow ${value}`)
            return
        }
        this.data[this.data.length] = value
    }
    pop(){
        if (this.data.length === 0) return "stack is empty"
        let lastElement = this.data[this.data.length-1]
        this.data.length--
        return lastElement
    }
}


s = new Stack()
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.push(60)
s.push(70)
s.push(80)
s.push(90)

console.log(s.pop())
console.log(s.data)