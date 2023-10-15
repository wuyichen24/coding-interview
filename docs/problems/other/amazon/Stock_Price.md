# Stock Price

## Problem
A team of analysts at Amazon needs to analyze the stock price of Amazon over a period of several months.

A group of consecutively chosen months is said to be *maximum profitable* if the price in its first or last month is the maximum for the group. More formally, a group of consecutive months *[l, r] (1 <= l <= r <= n)* is said to be maximum profitable if either:
- *stockPrice[l] = max(stockPrice[l], stockPrice[l+1], ... , stockPrice[r])*
- *stockPrice[r] = max(stockPrice[l], stockPrice[l+1], ... , stockPrice[r])*

Given prices over n consecutive months, find the number of maximum profitable groups which can be formed. Note that the months chosen must be consecutive. i.e., you must choose a subarray of the given array.

### Example
Consider there are n = 3 months of data, stockPrice = [2, 3, 2].

All possible groups are shown in the leftmost column.
| Group | Stock Price of first month | Stock Price of last month | Maximum stock price in group | Is Maximum Profitable? |
|----|----|----|----|----|
| [2] | 2 | 2 | 2 | Yes |
| [2,3] | 2 | 3 | 3 | Yes |
| [2,3,2] | 2 | 2 | 3 | No |
| [3] | 3 | 3 | 3 | Yes |
| [3,2] | 3 | 2 | 3 | Yes |
| [2] | 2 | 2 | 2 | Yes |

All 5 groups other than prices [2,3,2] are maximum profitable. In [2,3,2], the maximum value 3 is neither the first nor the last element. Return 5.

### Function Description
Complete the function *countMaximumProfitableGroups* function in the editor below.

*countMaximumProfitableGroups* has the following parameters:
- *int stockPrice[n]*: the stockPrices

### Returns
- *long_int*: the number of maximum profitable groups

## Examples
- Example 1
   - Input
     ```
     n = 4
     stockPrice = [3,1,3,5]
     ```
   - Output
     ```
     10
     ```
- Example 2
   - Input
     ```
     n = 3
     stockPrice = [1,5,2]
     ```
   - Output
     ```
     5
     ```

## Solutions
- **Solution 1: Monotonic stack**
  ```java
  int countMaximumProfitableGroups(int[] arr) {
      int n = stockPrice.length;
      Stack<Integer> stk = new Stack<>();
      int cnt = 0;
      for (int r = 0; r <= n; r++) {
          int cur = (r==n) ? Integer.MAX_VALUE : stockPrice[r];
          while (!stk.isEmpty() && stockPrice[stk.peek()] < cur) {
              int j = stk.pop();
              int l = stk.isEmpty() ? -1 : stk.peek();
              cnt += r - j+ j - l- 1;
          }
          stk.push(r);
      }
      return cnt;
  }
  ```
