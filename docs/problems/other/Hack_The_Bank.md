# Hack The Bank

## Problem
Tom is a cat and Jerry is a mouse. Tom wants to hack Jerry's bank with his knowledge.

Tom's bank account password is represented as a single integer `tomPassword`. Jerry's bank account password is represented as a single integer `jerryPassword`.

With Tom's cat knowledge, he thinks he can hack Jerry's account by **reordering** his password digits and **maximizing** his password value. However, to be undetected by the policy. Tom's reordered password value should be less or equal to Jerry's password value.

Return *a single string representing the maximum reordered password that is less or equal to Jerry's password value*. If there is no such reordering, return "-1"

- Example
   - Example 1
       - Sample Input For Custom Testing
         ```
         123
         322
         ```
       - Sample Output
         ```
         321
         ```
       - Explanation
          - By reordering the digits of "123", we can prove that "321" is the maximize value that is less or equal to "322".
   - Example 2
       - Sample Input For Custom Testing
         ```
         1230
         666
         ```
       - Sample Output
         ```
         -1
         ```
       - Explanation
          - We can prove that Tom's reordered password value is always greater than Jerry's password value. Since Tom's action is detected by policy, he will be caught, return "-1"

## Solution
- Solution 1: Backtracking
   - Basic ideas
      - Sort the Tom's password in ascending order.
      - Use 2 pointers to compare each digit from Jerry's password with Tom's possible numbers in descending order
   - Logic for original function:
      - Convert Tom's and Jerry's passwords from integer to char array.
      - Sort the Tom's char array in ascending order.
      - Create a `StringBuilder` to collect the final result.
      - Call the backtracking function
   -  Logic for backtracking function:
      - Stop condition 1:
         - If we already traverse all the digits in Jerry's, return the result.
         - If we already traverse all the digits in Jerry's but Tom's still remain some numbers (Tom's is longer than Jerry's), return `-1` as result
      - Iteration:
         - Compare the Jerry's current digit with Tom's possible numbers in descending order:
            - If the Tom's number is less than or equal to Jerry's current digit:
               - Check Tom's number is less or equal to Jerry's current digit
                  - If the curent Jerry digit comparison is not same, for the following Jerry's digits, no need to compare with Tom's possible numbers, just pick the largest Tom's possible number directly.
               - Append Tom's number to the result.
               - Remove Tom's number from the Tom's possible numbers list.
               - Call the backtracking function for checking the next Jerry's next digit
            - If the previous Jerry digit comparison is not same, pick the largest Tom's possible number directly:
               - Append Tom's number to the result.
               - Remove Tom's number from the Tom's possible numbers list.
               - Call the backtracking function for checking the next Jerry's next digit
      - Stop condition 2
         - If all the Tom's possible numbers are larger than the Jerry's digit and the previous digit comparison is same, it means that it is not possible to build Tom's password which is less than or equal to Jerry's, so return `-1` as result.
  ```java
  ```
              
   
