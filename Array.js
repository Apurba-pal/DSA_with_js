class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    // custom push method 
    push(item){
        this.data[this.length++] = item
        // this.length++
        return this.length
    }

    // custom get method
    get(index){
        if(index < this.length){
            console.log(this.data[index])
        }else{
            return 'Index out of range'
        }
    }
    
    // custom pop method
    pop(){
        const LastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return LastItem
    }

    // custom shift method
    shift(){
        const firstItem = this.data[0]
        for(let i = 0 ; i<this.length-1 ; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
        return firstItem
    }
    unshift(value){
        this.length++
        for(var i=this.length-2; i>=0; i--){
            this.data[i+1] = this.data[i]
        }
        this.data[0] = value
    }
    
    insertByIndex(value, index){
        
    }

    // custom delete by index method
    DeleteByIndex(index){
        const indexItem = this.data[index]
        for(let i = index;i<this.length;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        return indexItem
    }
}


const NewArr = new MyArray()
NewArr.push('A')
NewArr.push('B')
NewArr.push('C')
NewArr.push('D')
NewArr.push('E')
console.log(NewArr)
// NewArr.get(2)
// console.log("pop - ",NewArr.pop())
// console.log(NewArr)
// console.log("shift - ",NewArr.shift())
console.log("unshift - ",NewArr.unshift("F"))
// console.log(NewArr)
// console.log("Delete by index - ",NewArr.DeleteByIndex(2))
console.log(NewArr)
