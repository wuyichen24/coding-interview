# Nth Digit

## Alias
- Leetcode (400): [Nth Digit](https://leetcode.com/problems/nth-digit/)

## Problem
Given an integer `n`, return the `nth` digit of the infinite integer sequence `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]`.

- Note: Consider the question like: get the `nth` element from sequence `[1, 2, 3, 4, 5, 6, 7, 8, 9, 1,0, 1,1, 1,2, 1,3, 1,4, ... ]`

## Examples
- Example 1
   - Input
     ```
     11
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - The 11th element is `0` (the `0` from `10`)
      - Consider the `[1, 2, 3, 4, 5, 6, 7, 8, 9, 1,0, 1,1, 1,2, 1,3, 1,4, ... ]`
    
## Solutions
- Solution 1
   - Pattern
      - `1 ~ 9` include `9` one digit number;
      - `10 ~ 99` include `90` two digits number;
      - `100 ~ 999` include `900` three digits number;
      - `1000` ~ `9999` include 9000 four digits number;
      - `len` is how many digits: `1 or 2 or 3 ...`, `range` is `9 or 90 or 900 ...`
   - Idea
      - Find the length of the number where the nth digit is from.
      - Find the actual number where the nth digit is from.
      - Find the nth digit and return.

  ```java
  public int findNthDigit(int n) {
      int len = 1;
	    long count = 9;
		  int start = 1;

	    while (n > len * count) {
	        n -= len * count;
		      len += 1;
		      count *= 10;
		      start *= 10;
		  }

	    start += (n - 1) / len;
	    String s = Integer.toString(start);
	    return Character.getNumericValue(s.charAt((n - 1) % len));
  }
  ```
