# 3208. Alternating Groups II
# Medium
# Topics
# Companies
# Hint
# There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. The color of tile i is represented by colors[i]:

# colors[i] == 0 means that tile i is red.
# colors[i] == 1 means that tile i is blue.
# An alternating group is every k contiguous tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its left and right tiles).

# Return the number of alternating groups.

# Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

 

# Example 1:

# Input: colors = [0,1,0,1,0], k = 3

# Output: 3



class Solution(object):
    def numberOfAlternatingGroups(self, colors, k):
        n = len(colors)
        extended_colors = colors * 2
        count = 0
        alternating_length = 1
        
        for i in range(1, len(extended_colors)):
            if extended_colors[i] != extended_colors[i - 1]:
                alternating_length += 1
            else:
                alternating_length = 1
            
            if alternating_length >= k and i >= n:
                count += 1
        
        return count
        