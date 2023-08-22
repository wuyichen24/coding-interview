# Stars and Bars

## Problem
Given a string *s* consisting of stars "*" and bars "|", an array of starting indices *startIndex*, and an array of ending indices *endIndex*, determine the number of starts between any two bars within the substring between the two indices, inclusive. Note that in this problem, indexing starts at *1*.
- A start is represented as an asterisk ('*' = ascii decimal 42).
- A bar is represented as a pipe ('|' = ascii decimal 124).

**Function**

Complete the *starsAndBars function in the editor below.

*starsAndBars* has three parameters:
- *string s*: a string to evaluate
- *int startindex[n]*: the starting indices
- *int endindex[n]*: the ending indices

**Return**

- *int[n]*: each *element[i]* answers the query of *startIndex[i]* to *endIndex[i]*

**Constraints**
- 1 <= n <= 10<sup>5</sup>
- 1 <= startIndex[i] <= endIndex[i] <= n
- Each character of *s* is either '*' or '|'

## Examples
- Example 1
   - Input
     ```
     s = '|**|*|*'
     startIndex = [1, 1]
     endIndex = [5, 6]
     ```
   - Output
     ```
     [2, 3]
     ```
   - Explanation
      - For the first pair of indices, *(1,5)*, the substring is '|**|*'. There are 2 stars between a pair of bars.
      - For the second pair of indices, *(1,6)*, the substring is '|**|*|' and there are *2 + 1 = 3* stars between a bars.
      - Both of the answers are returned in an array, *[2, 3]*.
- Example 2
   - Input
     ```
     s = '*|*|'
     startIndex = [1]
     endIndex = [3]
     ```
   - Output
     ```
     [0]
     ```
   - Explanation
      - The substring from *index = 1* to *index = 3* is '*|*'. There is no consecutiive pair of bars in this string.

## Solutions
