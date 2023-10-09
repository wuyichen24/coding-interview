# Remove K Digits to Make Smallest Integer

## Alias
- Leetcode (402): [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)

## Problem
Given string num representing a non-negative integer `num`, and an integer `k`, return the **smallest possible integer** after removing `k` digits from `num`.

## Examples
- Example 1
   - Input
     ```
     num = "1432219"
     k = 3
     ```
   - Output
     ```
     "1219"
     ```
   - Explanation
      - Remove the three digits `4`, `3`, and `2` to form the new number `1219` which is the smallest.
- Example 2
   - Input
     ```
     num = "10200"
     k = 1
     ```
   - Output
     ```
     "200"
     ```
   - Explanation
      - Remove the leading `1` and the number is `200`. Note that the output must not contain leading zeroes.
- Example 3
   - Input
     ```
     num = "10"
     k = 2
     ```
   - Output
     ```
     "0"
     ```
   - Explanation
      - Remove all the digits from the number and it is left with nothing which is `0`.
    
## Solutions
- **Solution 1: Greedy with Stack**
   - Idea
      - The **leftmost distinct** digits that determine the superior of the two numbers.
      - Rule:
         - Given a sequence of digits `[D1,D2,D3, ... ,Dn]`, if the digit `D2` is less than its left neighbor `D1`, then we should remove the left neighbor (`D1`) in order to obtain the minimum result.

  ```java
  public String removeKdigits(String num, int k) {
      LinkedList<Character> stack = new LinkedList<Character>();
        
      // for each digit, if the digit is less than the top of the stack (left neighbor),
      // pop the stack (left neighbor) and push the digit to the stack.
      for(char digit : num.toCharArray()) {
          while(stack.size() > 0 && k > 0 && stack.peekLast() > digit) {
              stack.removeLast();
              k -= 1;
          }
          stack.addLast(digit);
      }
        
      // remove the remaining digits from the tail.
      for(int i=0; i<k; ++i) {
          stack.removeLast();
      }
        
      // build the final string, while removing the leading zeros.
      StringBuilder result = new StringBuilder();
      boolean leadingZero = true;
      for(char digit: stack) {
          if(leadingZero && digit == '0') continue;
          leadingZero = false;
          result.append(digit);
      }
        
      // return the final string
      if (result.length() == 0) return "0";
      return result.toString();
  }
  ```
