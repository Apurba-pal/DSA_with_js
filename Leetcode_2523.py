# 2523. Closest Prime Numbers in Range
# Medium
# Topics
# Companies
# Hint
# Given two positive integers left and right, find the two integers num1 and num2 such that:

# left <= num1 < num2 <= right .
# Both num1 and num2 are prime numbers.
# num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
# Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

 

# Example 1:

# Input: left = 10, right = 19
# Output: [11,13]
# Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
# The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
# Since 11 is smaller than 17, we return the first pair.
# Example 2:

# Input: left = 4, right = 6
# Output: [-1,-1]
# Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.




# def closestPrimes(left, right):
#     primes = []  
    
#     for num in range(left, right + 1):  
#         is_prime = True  
#         if num < 2:
#             is_prime = False
#         for i in range(2, num):  
#             if num % i == 0:  
#                 is_prime = False  
#                 break  
#         if is_prime:  
#             primes.append(num)  
    
#     if len(primes) < 2:
#         return [-1, -1]  

#     smallest_gap = float('inf')  
#     result = []  
    
#     for i in range(len(primes) - 1):  
#         if primes[i + 1] - primes[i] < smallest_gap:
#             smallest_gap = primes[i + 1] - primes[i]  
#             result = [primes[i], primes[i + 1]]  

#     return result  

# # Example
# print(closestPrimes(10, 19))  # Output: [11, 13]








class Solution:
    def closestPrimes(self, left, right):
        
        limit = right + 1  # We need to check up to `right`
        is_prime = [True] * limit
        is_prime[0] = is_prime[1] = False  # 0 and 1 are not prime

        for i in range(2, int(limit ** 0.5) + 1):  
            if is_prime[i]:
                for j in range(i * i, limit, i):
                    is_prime[j] = False  

        # Step 2: Collect primes in the range [left, right]
        primes = [num for num in range(left, right + 1) if is_prime[num]]

        # Step 3: Find the closest prime pair
        if len(primes) < 2:
            return [-1, -1]

        smallest_gap = float('inf')
        result = []

        for i in range(len(primes) - 1):
            if primes[i + 1] - primes[i] < smallest_gap:
                smallest_gap = primes[i + 1] - primes[i]
                result = [primes[i], primes[i + 1]]

        return result