# 1358. Number of Substrings Containing All Three Characters
# Medium
# Topics
# Companies
# Hint
# Given a string s consisting only of characters a, b and c.

# Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

# Example 1:

# Input: s = "abcabc"
# Output: 10
# Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
# Example 2:

# Input: s = "aaacb"
# Output: 3
# Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
# Example 3:

# Input: s = "abc"
# Output: 1
 


class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        abc = [-1, -1, -1]
        count, right = 0, 0
        while right < len(s):
            abc[ord(s[right]) - ord('a')] = right
            minIndex = min(abc)
            count += (minIndex + 1)
            right += 1
        return count