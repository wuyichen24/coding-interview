# Corporate Flight Bookings

## Alias
- Leetcode (1109): [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)

## Problem
There are n flights that are labeled from `1` to `n`.

You are given an array of flight bookings `bookings`, where `bookings[i] = [firsti, lasti, seatsi]` represents a booking for flights `firsti` through `lasti` (**inclusive**) with `seatsi` seats reserved for **each flight** in the range.

Return an array ``answer`` of length `n`, where `answer[i]` is the total number of seats reserved for flight `i`.

## Examples
- Example 1
   - Input
     ```
     bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
     ```
   - Output
     ```
     [10,55,45,25,25]
     ```
   - Explanation
     ```
     Flight labels:        1   2   3   4   5
     Booking 1 reserved:  10  10
     Booking 2 reserved:      20  20
     Booking 3 reserved:      25  25  25  25
     Total seats:         10  55  45  25  25
     Hence, answer = [10,55,45,25,25]
     ```
- Example 2
   - Input
     ```
     bookings = [[1,2,10],[2,2,15]], n = 2
     ```
   - Output
     ```
     [10,25]
     ```
   - Explanation
     ```
     Flight labels:        1   2
     Booking 1 reserved:  10  10
     Booking 2 reserved:      15
     Total seats:         10  25
     Hence, answer = [10,25]
     ```

## Solutions
- **Solution 1: Difference array**
   - Idea
      - Use difference array to Reduce the complexity for modifying elements
      - To increase all the elements in the range `[i, j]` of the input array by `x`:
         - `diff[i]   = diff[i] + x`
         - `diff[j+1] = diff[j+1] - x`

  ```java
  public int[] corpFlightBookings(int[][] bookings, int n) {
      int[] diff = new int[n + 1];

      for (int i = 0; i < bookings.length; i++) {
          int start = bookings[i][0] - 1;    // flight index is 1-based, so need to reduce by 1
          int end   = bookings[i][1] - 1;    // flight index is 1-based, so need to reduce by 1
          int inc   = bookings[i][2];

          diff[start]   = diff[start] + inc;
          diff[end + 1] = diff[end + 1] - inc;
      }

      int[] answer = new int[n];
      answer[0] = diff[0];
      for (int i = 1; i < n; i++) {
          answer[i] = answer[i-1] + diff[i];
      }

      return answer;
  }
  ```
