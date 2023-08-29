# Decode String

## Alias
- Leetcode (394): [Decode String](https://leetcode.com/problems/decode-string/)

## Problem
The encoding rule is: `k[encoded_string]`, where the encoded_string inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

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
         - If the current char is a letter, continue accumulate the subresult.
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
              } else if (Character.isAlphabetic(c)) { // if current char is a letter, continue accumulate the subresult
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
```java
public class Solution {
    public String decodeString(String s) {
        String res = "";
        Stack<Integer> countStack = new Stack<>();
        Stack<String> resStack = new Stack<>();
        int idx = 0;
        while (idx < s.length()) {
            if (Character.isDigit(s.charAt(idx))) {
                int count = 0;
                while (Character.isDigit(s.charAt(idx))) {
                    count = 10 * count + (s.charAt(idx) - '0');
                    idx++;
                }
                countStack.push(count);
            }
            else if (s.charAt(idx) == '[') {
                resStack.push(res);
                res = "";
                idx++;
            }
            else if (s.charAt(idx) == ']') {
                StringBuilder temp = new StringBuilder (resStack.pop());
                int repeatTimes = countStack.pop();
                for (int i = 0; i < repeatTimes; i++) {
                    temp.append(res);
                }
                res = temp.toString();
                idx++;
            }
            else {
                res += s.charAt(idx++);
            }
        }
        return res;
    }
}
```
