# Decode String

## Alias
- Leetcode (394): [Decode String](https://leetcode.com/problems/decode-string/)

## Problem
The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

## Examples
- Example 1
   - Input
     ```
     3[a]2[bc]
     ```
   - Output
     ```
     aaabcbc
     ```
- Example 2
   - Input
     ```
     3[a2[c]]
     ```
   - Output
     ```
     accaccacc
     ```
- Example 3
   - Input
     ```
     2[abc]3[cd]ef
     ```
   - Output
     ```
     abcabccdcdcdef
     ```

## Solutions
- Solution 1: Recusion
   - Idea
      - Check each character in the string from left to right:
         - If the current char is a `[`, solve the subproblem and get the subresult from `[` `]`.
         - If the current char is a `]`, it means the subproblem has been finished, return the subresult to upper caller.
         - If the current char is a letter, continue accumulating the subresult.
         - If the current char is a number, calculate the count.
   - Time complexity
      - *O(n)*
  ```java
  class Solution {
      int i = 0;

      public String decodeString(String s) {
          StringBuilder sb = new StringBuilder();
          int count = 0;
          String subResult = "";
    
          while (i < s.length()) {
              char c = s.charAt(i);
              i++;
        
              if (c == '[') {                         // if current char is a [, solve the subproblem
                  subResult = decodeString(s);  
                  for (int j = 0; j < count; j++) {
                      sb.append(subResult);
                  }
                  count = 0;                    
              } else if (c == ']') {                  // if current char is a ], return the subresult to upper caller
                  return sb.toString();
              } else if (Character.isAlphabetic(c)) { // if current char is a letter, continue accumulating the subresult
                  sb.append(c);
              } else {                                // if current char is a number, calculate the count
                  count = count * 10 + c - '0';
              }
          }
    
          return sb.toString();
      }
  }
  ```

- Solution 2: Stack
   - Idea
      - Create 2 stacks
         - One is for the substring inside of `[]`.
         - Another is for the count.
      - Check each character in the string from left to right:
         - If current char is a number, calculate the count until current char is not a number.
         - If current char is a `[`, push current result into the stack and reset the result.
         - If current char is a `]`,
            - Pull subresult from the string stack and the count from the integer stack.
            - Based on the count, repeat the subresult.
            - Set the result.
         - If current char is a letter, continue accumulating the subresult.
   - Time complexity
      - *O(n<sup>n</sup>)*
  ```java
  class Solution {
      public String decodeString(String s) {
          String result = "";
          Stack<Integer> countStack = new Stack<>(); // integer stack stores the count
          Stack<String>  resStack = new Stack<>();   // string stack stores subresult
          int i = 0;
          while (i < s.length()) {
              char c = s.charAt(i);
              if (Character.isDigit(c)) {            // if current char is a number, calculate the count until current char is not a number
                  int count = 0;
                  while (Character.isDigit(s.charAt(i))) {
                      count = 10 * count + (s.charAt(i) - '0');
                      i++;
                  }
                  countStack.push(count);
              } else if (c == '[') {                 // if current char is a [, push current result into the stack and reset the result
                  resStack.push(result);
                  result = "";
                  i++;
              } else if (c == ']') {                 // if current char is a ], build the subresult
                  StringBuilder temp = new StringBuilder (resStack.pop());
                  int repeatTimes = countStack.pop();
                  for (int j = 0; j < repeatTimes; j++) {
                      temp.append(result);
                  }
                  result = temp.toString();
                  i++;
              } else {                               // if current char is a letter, continue accumulating subresult
                  result += s.charAt(i++);
              }
          }
          return result;
      }
  }
  ```
