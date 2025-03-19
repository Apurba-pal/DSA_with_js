# 3370. Smallest Number With All Set Bits
# Easy
# Topics
# Companies
# Hint
# You are given a positive number n.

# Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

 

# Example 1:

# Input: n = 5

# Output: 7

# Explanation:

# The binary representation of 7 is "111".

# Example 2:

# Input: n = 10

# Output: 15

# Explanation:

# The binary representation of 15 is "1111".

# Example 3:

# Input: n = 3

# Output: 3

# Explanation:

# The binary representation of 3 is "11".



class Solution(object):
    def smallestNumber(self, n):
        # Calculate the number of bits required to represent n
        bit_length = n.bit_length()
        # Return the smallest number with all bits set
        return (1 << bit_length) - 1
        

s = Solution()
print(s.smallestNumber(5))