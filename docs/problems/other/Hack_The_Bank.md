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
