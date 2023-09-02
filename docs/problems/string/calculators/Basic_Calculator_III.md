# Basic Calculator III

## Alias
- Leetcode (772): [Basic Calculator III](https://leetcode.com/problems/permutations/)

## Problem
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, `'+'`, `'-'`, `'*'`, `'/'` operators, and open `'('` and closing parentheses `')'`. The integer division should **truncate toward zero**.

**Notes**
- You may assume that the given expression is always valid.
- You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

## Examples
- Example 1
   - Input
     ```
     "1+1"
     ```
   - Output
     ```
     2
     ```
- Example 2
   - Input
     ```
     "6-4/2"
     ```
   - Output
     ```
     4
     ```
- Example 3
   - Input
     ```
     "2*(5+5*2)/3+(6/2+8)"
     ```
   - Output
     ```
     21
     ```

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Check each char from left to right and discuss different situations
      - Use `l1` and `o1` to denote the partial result and the operator for level one operations
         - `o1 == 1` means `+`; `o1 == -1` means `-`;
         - `o2 == 1` means `*`; `o2 == -1` means `/`.
   - Steps
      - Check each char from left to right:
         - If the current char is a digit:
            - We have an operand of type number, so find its value "num".
            - Evaluate at level two: `l2 = (o2 == 1 ? l2 * num : l2 / num)`.
         - If the current char is a `(`:
            - We have an operand of type subexpression, so find its string representation.
            - Recursively call the "calculate" function to find its value "num";
            - Evaluate at level two: `l2 = (o2 == 1 ? l2 * num : l2 / num)`;
         - If the current char is a `*` or `/` (level 2 operator):
            - Update `o2`: `o2 = (c == '*' ? 1 : -1)` (based on operator type).
         - If the current char is a `+` or `-` (level 1 operator):
            - Demotion happens here: `l1 = l1 + o1 * l2`.
            - Update `o1`: `o1 = (c == '+' ? 1 : -1)` (based on operator type).
            - `l2`, `o2` need to be reset: `l2 = 1, o2 = 1`.
   - Time complexity
      - *O(n<sup>2</sup>)*

  ```java
  public int calculate(String s) {
      int l1 = 0, o1 = 1;
      int l2 = 1, o2 = 1;
        
      for (int i = 0; i < s.length(); i++) {
          char c = s.charAt(i);
            
          if (Character.isDigit(c)) {
              int num = c - '0';
                
              while (i + 1 < s.length() && Character.isDigit(s.charAt(i + 1))) {
                  num = num * 10 + (s.charAt(++i) - '0');
              }
            
              l2 = (o2 == 1 ? l2 * num : l2 / num);
          } else if (c == '(') {
              int j = i;
                
              for (int cnt = 0; i < s.length(); i++) {
                  if (s.charAt(i) == '(') cnt++;
                  if (s.charAt(i) == ')') cnt--;
                  if (cnt == 0) break;
              }
            
              int num = calculate(s.substring(j + 1, i));
            
              l2 = (o2 == 1 ? l2 * num : l2 / num);
          } else if (c == '*' || c == '/') {
              o2 = (c == '*' ? 1 : -1);    
          } else if (c == '+' || c == '-') {
              l1 = l1 + o1 * l2;
              o1 = (c == '+' ? 1 : -1);

              l2 = 1; o2 = 1;
          }
      }
      return (l1 + o1 * l2);
  }
  ```
- Solution 2: Stack
   - Idea
      - Similar to solution 1, but use stack rather than calling recursion function.

  ```java
  public int calculate(String s) {
      int l1 = 0, o1 = 1;
      int l2 = 1, o2 = 1;

      Deque<Integer> stack = new ArrayDeque<>(); // stack to simulate recursion
  
      for (int i = 0; i < s.length(); i++) {
          char c = s.charAt(i);
            
          if (Character.isDigit(c)) {
              int num = c - '0';
                
              while (i + 1 < s.length() && Character.isDigit(s.charAt(i + 1))) {
                  num = num * 10 + (s.charAt(++i) - '0');
              }
            
              l2 = (o2 == 1 ? l2 * num : l2 / num);
          } else if (c == '(') {
              // First preserve current calculation status
              stack.offerFirst(l1); stack.offerFirst(o1);
              stack.offerFirst(l2); stack.offerFirst(o2);
            
              // Then reset it for next calculation
              l1 = 0; o1 = 1;
              l2 = 1; o2 = 1;
          } else if (c == ')') {
              // First preserve the result of current calculation
              int num = l1 + o1 * l2;

              // Then restore previous calculation status
              o2 = stack.poll(); l2 = stack.poll();
              o1 = stack.poll(); l1 = stack.poll();
            
              // Previous calculation status is now in effect
              l2 = (o2 == 1 ? l2 * num : l2 / num);
          } else if (c == '*' || c == '/') {
              o2 = (c == '*' ? 1 : -1);    
          } else if (c == '+' || c == '-') {
              l1 = l1 + o1 * l2;
              o1 = (c == '+' ? 1 : -1);

              l2 = 1; o2 = 1;
          }
      }
      return (l1 + o1 * l2);
  }
  ```
