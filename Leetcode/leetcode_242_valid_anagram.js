// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// solution 1: using map function
var isAnagram = function(s, t) {

    if(s.length != t.length) return false;

    const map  = new Map();

    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let char of t){
        if (!map.has(char)) return false;
        map.set(char, map.get(char) -1);
        if(map.get(char) < 0) return false;
    }
    return true;
};


// solution 2: using hashmap

var isAnagram = function(s, t) {

    if(s.length != t.length) return false;
    freq = {};
    for(let char of s){
        if(char in freq){
            freq[char]+=1;
        }else{
            freq[char] = 1
        }
    }
    for( let char of t){
        if(!(char in freq) || freq[char] === 0 ){
            return false;
        }
            freq[char]--
    }

    return true;
};