# Divide Two Integers

## Alias
- Leetcode (29): [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/)

## Problem
- Divide two integers and get the quotient without using multiplication, division, and mod operator.
- Given a positive numerator and a positve divisor, print the quotient and the reminder without division and mod operation.

## Examples
- Example 1
   - `31/5` 
   - Quotient = 6
   - Reminder = 1

## Solutions
- Solution 1: Substraction
  ```java
  public void printQuotientAndReminder(int numerator, int divisor) {
      int quotient = 0;

      while (numerator - divisor >= 0) {
          numerator = numerator - divisor;
          quotient++;
      }
      int reminder = numerator;
      System.out.println("quotient: " + quotient + ", reminder = " + reminder);
  }
  ```
- Solution 2: Binary search
   - The division operation can be defined as `numerator - i * divisor = reminder`
   - So the problem can be abstracted as searching `i`.
   - So we can use binary search to search `i`;
   - The upper bound of `i` can be the numerator (example: 31/1), the lower bound of `i` can be `0` (example: 3/5).
  ```java
  public static void printQuotientAndReminder2(int numerator, int divisor) {
      int low = 0;
      int high = numerator;

      while (low <= high) {
          int mid = (low + high) / 2;
          int reminder = numerator - mid * divisor;

          if (reminder < 0) {
              high = mid - 1;
          } else if (reminder < divisor) {
              System.out.println("quotient: " + mid + ", reminder = " + reminder);
          } else {
              low = mid + 1;
          }
      }
  }
  ```

   
