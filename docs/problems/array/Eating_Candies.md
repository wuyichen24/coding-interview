# Eating Candies

## Problem
There are n candies put from left to right on a table. The candies are numbered from left to right. The i-th candy has weight candies[i]. Alice and Bob eat candies.

Alice can eat any number of candies from the left (she can't skip candies, she eats them in a row).

Bob can eat any number of candies from the right (he can't skip candies, he eats them in a row).

Of course, if Alice ate a candy, Bob can't eat it (and vice versa).

They want to be fair. Their goal is to eat the same total weight of candies. What is the most number of candies they can eat in total?

## Examples
- Example 1
   - Input
     ```
     candies: [1000]
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - There is only candy, and it is not possible for Alice and Bob to eat the same total weight. 
- Example 2
   - Input
     ```
     candies:[1,2,1]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - Alice takes 1 candy from the left, and Bob takes 1 candy from the right. So the function should return 2

## Extra test cases
- Test case 1
   - Input
     ```
     candies: [2,1,4,2,4,1]
     ```
   - Output
     ```
     6
     ```
   - Explanation
      - Alice will eat the first 3 candies from the left (with total weight 7) and Bob will eat the first three candies from the right (with total weight 7). So the function should return 2.
- Test case 2
   - Input
     ```
     candies: [1,2,4,8,16]
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - There is no way Alice and Bob will eat the same non-zero weight so the answer is 0.
- Test case 3
   - Input
     ```
     candies: [7,3,20,5,15,1,11,8,10]
     ```
   - Output
     ```
     7
     ```
   - Explanation
      - Alice will eat candies with weights `[7,3,20]` and Bob will eat candies with weights `[10,8,11,1]`, they each eat 30 weight. There is no better partition so the answer is 7.

## Solutions
- Solution 1: 2 pointers
   - Idea
      - Create 2 pointers, one pointer (`i`) starts from left and another one (`j`) starts from right.
      - Create 2 boolean variables, indicate pointer `i` and pointer `j` needs to move or not in next round respectively.
      - When the pointer `i` is less than the pointer `j`:
         - If pointer `i` needs to be moved, move it to the next position on the right.
         - If pointer `j` needs to be moved, move it to the next position on the left.
         - Compare the sum of the left side with the sum of the right side:
            - If left sum = right sum, record the result, both pointer `i` and pointer `j` need to be moved.
            - If left sum > right sum, only pointer `j` needs to be moved.
            - If left sum < right sum, only pointer `i` needs to be moved.
  ```java
  ```
