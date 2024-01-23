# Arithmetic Expression

## Problem
Given a string representing an arithmetic expression with only addition and multiplication operators, return the result of the calculation. For example, for `"2*3+4"`, return `10`

## Solutions
- **Solution 1: Parse each character**.

  ```java
  public static int evaluate(String s) {
      int sum = 0;
      int mul = 1;
      int n = 0;    // the current number

      for (char c : s.toCharArray()) {
          if (Character.isDigit(c)) {
              n = n * 10 + Character.getNumericValue(c);
              continue;
          }

          // + or *
          mul *= n;
          n = 0;

          if (c == '+') {
              sum += mul;
              mul = 1;
          }
      }

      return sum + (mul * n);
  }
  ```

## Follow up
- How would you deal with additional operators (-, /)?
   - You can still achieve it without using a stack.
- How would you deal with parentheses?
   - Use a stack.
