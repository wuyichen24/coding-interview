# Is Valid Parentheses

## Alias
- Leetcode (20): [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## Problem
- Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.
- An input string is valid if:
   - Open brackets must be closed by the same type of brackets.
   - Open brackets must be closed in the correct order.

## Solutions
- **Solution 1: Stack**
   - Idea
       - Check the each char from left to right
           - If encounter a opened parenthese, push to stack.
           - If encounter a closed parenthese, check the top of the stack is the corresponding opened parenthese or not 
  ```java
  public boolean isValid(String s) {
      if (s.isEmpty()) {
          return true;
      } else if (s.length() == 1) {
          return false;
      } else {
          Stack<String> stack = new Stack<String>();
            
          for (int i = 0; i < s.length(); i++) {
              String str = s.substring(i, i+1);
                
              if (str.equals("(") || str.equals("{") || str.equals("[")) {
                  stack.push(str);
              } else if (str.equals(")") || str.equals("}") || str.equals("]")) {
                  if (stack.isEmpty()) {
                      return false;
                  } else {
                      String pop = stack.pop();
                        
                      if (str.equals(")") && pop.equals("(")) {
                          continue;
                      } else if (str.equals("}") && pop.equals("{")) {
                          continue;
                      } else if (str.equals("]") && pop.equals("[")) {
                          continue;
                      } else {
                          return false;
                      }
                  }
              }
          }
            
          return stack.isEmpty();
      }
  }
  ```
