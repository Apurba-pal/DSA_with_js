// const capitalise = str =>{
// }
str = "hello world"
let new_str = str.split('')
console.log(new_str)
new_str[0] = new_str[0].toUpperCase()
for(let i = 1; i < new_str.length; i++){
    if(new_str[i] === ' ' && i + 1 < new_str.length){
        new_str[i + 1] = new_str[i + 1].toUpperCase()
    }
}
new_str = new_str.join('')
console.log(new_str)