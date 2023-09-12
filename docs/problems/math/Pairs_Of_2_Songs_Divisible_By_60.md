# Pairs of 2 Songs Divisible By 60

## Alias
- Leetcode (1010): [Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)

## Problem
You are given a list of songs where the `ith` song has a duration of `time[i]` seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by `60`. Formally, we want the number of indices `i`, `j` such that `i < j` with `(time[i] + time[j]) % 60 == 0`.

## Examples
- Example 1
   - Input
     ```
     [30,20,150,100,40]
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - Three pairs have a total duration divisible by 60:
         - 30 and 150
         - 20 and 100
         - 20 and 40
- Example 2
   - Input
     ```
     [60,60,60]
     ```
   - Output
     ```
     3
     ```

## Solutions
- **Solution 1: Brute force**
   - Complexity
      - Time complexity: *O(n<sup>2</sup>)*

  ```java
  public int numPairsDivisibleBy60(int[] time) {
      int count = 0, n = time.length;
      for (int i = 0; i < n; i++) {
          for (int j = i + 1; j < n; j++) {
              if ((time[i] + time[j]) % 60 == 0) {
                  count++;
              }
          }
      }

      return count;
  }
  ```

- **Solution 2: Use an array to store frequencies**
   - Idea:
      - Use an array to store the frequency of each remainder when checking each number
      - If the sum of `A` and `B` can be divided by 60, they have to satisfy either condition:
         - `A % 60 = 0` and `B % 60 = 0`
         - `A % 60 + B % 60 = 0` (the sum of 2 remainders is 60)

  ```java
  public int numPairsDivisibleBy60(int[] time) {
      int remainders[] = new int[60];
      int count = 0;
      for (int t: time) {
          if (t % 60 == 0) {           // check if a%60==0 && b%60==0
              count += remainders[0];
          } else {                     // check if a%60+b%60==60
              count += remainders[60 - t % 60];
          }
          remainders[t % 60]++;        // remember to update the remainders
      }
      return count;
  }
  ```
