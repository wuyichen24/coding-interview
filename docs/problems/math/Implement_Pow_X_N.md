# Implement Pow(x,n)

## Alias
- Leetcode (50): [Pow(x, n)](https://leetcode.com/problems/powx-n/)

## Problem
- Implement pow(x, n), which calculates x<sup>n</sup>.
- x can be positive, negative and 0;
- n can be positive, negative and 0;

## Solution
- Solution 1: Recursion + Fast Power
   - If the n is even, so x<sup>n</sup> = x<sup>n/2</sup> * x<sup>n/2</sup>.
   - If the n is odd, so x<sup>n</sup> = x<sup>n/2</sup> * x<sup>n/2</sup> * x.

  ```java
  public double myPow(double x, int n) {
      long N = n;
        
      if (N < 0) {         // Correct the power (n) to a positive number
          x = 1 / x;
          N = -N;
      }

      return fastPow(x, N);
  }
    
  private double fastPow(double x, long n) {
      if (n == 0) {
          return 1.0;
      }
        
      double half = fastPow(x, n / 2);
        
      if (n % 2 == 0) {
          return half * half;
      } else {
          return half * half * x;
      }
  }
  ```
