// using in built functions
const RevStr = Str => {
    let new_str = Str.split('') // to split it int array
    console.log(new_str)
    new_str = new_str.reverse() // to reverse the array
    console.log(new_str)
    new_str = new_str.join('') // to reverse the array
    console.log(new_str)
}
RevStr('Hello') 

// one liner
// const RevStr = Str => console.log(Str.split('').reverse().join(''))




// alternative method to convert a string to array

// const str = "hello";
// const arr = [...str];
// console.log(arr); // ["h", "e", "l", "l", "o"]



// alternative method to convert a array to string 

// const arr = ["a","b","c","d"]
// const str = arr.join('')
// console.log(str) // "1234"