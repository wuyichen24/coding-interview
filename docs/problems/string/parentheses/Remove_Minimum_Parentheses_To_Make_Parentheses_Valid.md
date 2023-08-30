# Remove Minimum Parentheses to Make Parentheses Valid

## Alias
- Leetcode (1249): [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

## Problem
- Remove the minimum number of parentheses so that the resulting parentheses string is valid.
- Return the valid parentheses string.

## Examples
- Example 1
   - Input
     ```
     lee(t(c)o)de)
     ```
   - Output
     ```
     lee(t(c)o)de
     ```
   - Explanation
      - "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
- Example 2
   - Input
     ```
     a)b(c)d
     ```
   - Output
     ```
     ab(c)d
     ```
   - Explanation
- Example 3
   - Input
     ```
     ))((
     ```
   - Output
     ```
     ```
   - Explanation
      - An empty string is also valid.

## Solutions
- **Solution 1: Stack**
   - Idea
      - Use stack to store indexes of any invalid parentheses.
      - 2 passes:
         - Find all the any invalid parentheses and store their indexes in a stack.
         - Build the result and don't include any char whose index is in the stack.
   - Steps
      - Create a stack to store the index of any invalid `(` or `)`.
      - Check each character from left to right:
          - If it is a letter, continue.
          - If it is a `(`, push the index to the stack.
          - If it is a `)`:
             - If stack has a corresponding `(`, so the current char is valid, remove `(` from stack.
             - If not, so the current char is invalid, add it to stack.
      - Covert the stack to a set.
      - Check each character from left to right:
          - If the index of the current character is not in the stack, add to the result.
          - Otherwise ignore it.
               
  ```java
  class Solution {
      public String minRemoveToMakeValid(String s) {
          Stack<Integer> stack = new Stack<>();
          for(int i=0;i<s.length();i++) {
              char ch = s.charAt(i);
              if(Character.isAlphabetic(ch))
                  continue;
              if(ch == '(')
                  stack.push(i);
              else {
                  if(!stack.isEmpty() && s.charAt(stack.peek()) == '(')
                      stack.pop();
                  else stack.push(i);
              }
          }
        
          StringBuilder result = new StringBuilder();
          HashSet<Integer> set = new HashSet<>(stack);
          for(int i=0;i<s.length();i++)
              if(!set.contains(i))               // if the index of the current character is not in the stack, add to the result.
                  result.append(s.charAt(i));
        
          return result.toString();
      }
  }
  ```

- **Solution 2: Two pass + StringBuilder**
   - Idea
      - Use a counter to count how many open parenthese.
      - 2 passes
         - Remove extra ) at the beginning
         - Remove Remove extra ( at the end
   - Steps
      - 1st pass: Check each character from left to right:
         - If the current char is `)`:
            - If the open parens count is 0, so this `)` is invalid, ignore it.
            - If the open parens count > 0, so this `)` is valid, add it to the result and reduce the open parens count by 1.
         - If the current char is `(`:
            - Add it to the result and increase the open parens count by 1.
         - If the current char is a letter:
            - Add it to the result.
      - 2nd pass: If the the open parens count > 0, it means that there are some extra ( at the end. Remove them.
         - while the open parens count > 0
            - Remove the last occurrence `(` (use Java `StringBuilder.lastIndexOf` function).
            - Reduce the open parens count by 1.
         
  ```java
  public String removeMinParenthesesToMakeValid(String s) {
      StringBuilder sb = new StringBuilder();
      int openParenthesesCount = 0;
        
      // remove extra ) at the beginning
      for (int i = 0; i < s.length(); i++) {
          String current = s.substring(i, i+1);
            
          if (current.equals(")")) {
              if (openParenthesesCount == 0) {   // If the current is ) and there is no open parenthese
                  continue;                      // Ignore the current )
              } else {
                  sb.append(current);
                  openParenthesesCount--;
              }
          } else if (current.equals("(")) {
              sb.append(current);
              openParenthesesCount++;
          } else {
              sb.append(current);
          }
      }
        
      // remove extra ( at the end
      if (openParenthesesCount > 0) {
          while (openParenthesesCount > 0) {
              int index = sb.lastIndexOf("(");
              sb.deleteCharAt(index);
              openParenthesesCount--;
          }
      }
        
      return sb.toString();
  }
  ```


