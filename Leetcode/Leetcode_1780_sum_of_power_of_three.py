# 1780. Check if Number is a Sum of Powers of Three
# Medium
# Topics
# Companies
# Hint
# Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

# An integer y is a power of three if there exists an integer x such that y == 3x.

 

# Example 1:

# Input: n = 12
# Output: true
# Explanation: 12 = 31 + 32
# Example 2:

# Input: n = 91
# Output: true
# Explanation: 91 = 30 + 32 + 34
# Example 3:

# Input: n = 21
# Output: false




class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        p = [1]
        mx = 1
        
        # Generate all powers of 3 up to n
        while mx * 3 <= n:
            mx *= 3
            p.append(mx)
        
        while n > 0:
            idx = bisect.bisect_right(p, n) - 1
            if idx < 0:
                return False
            n -= p[idx]
            p[idx] = float('inf')  # Mark as used
        
        return n == 0