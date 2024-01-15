# Car Pooling

## Alias
- Leetcode (1094): [Car Pooling](https://leetcode.com/problems/car-pooling/)

## Problem
There is a car with `capacity` empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer `capacity` and an array `trips` where `trips[i] = [numPassengersi, fromi, toi]` indicates that the ith trip has `numPassengersi` passengers and the locations to pick them up and drop them off are `fromi` and `toi` respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return `true` if it is possible to pick up and drop off all passengers for all the given trips, or `false` otherwise.

## Examples
- Example 1
   - Input
     ```
     trips = [[2,1,5],[3,3,7]]
     capacity = 4
     ```
   - Output
     ```
     false
     ```
- Example 2
   - Input
     ```
     trips = [[2,1,5],[3,3,7]]
     capacity = 5
     ```
   - Output
     ```
     true
     ```

## Solutions
- **Solution 1: Difference array**
   - Idea
      - Use difference array to Reduce the complexity for modifying elements
      - To increase all the elements in the range `[i, j]` of the input array by `x`:
         - `diff[i]   = diff[i] + x`
         - `diff[j+1] = diff[j+1] - x`
      - Traverse the difference array to compare each stop's capacity with capacity limit.

  ```java
  public boolean carPooling(int[][] trips, int capacity) {
      int[] diff = new int[1001];

      for (int i = 0; i < trips.length; i++) {
          int start = trips[i][1];
          int end   = trips[i][2] - 1;
          int inc   = trips[i][0];
          diff[start] = diff[start] + inc;
          diff[end+1] = diff[end+1] - inc;  
      }

      int currentCapacity = diff[0];
      if (currentCapacity > capacity) {
          return false;
      }

      for (int i = 1; i < diff.length; i++) {
          currentCapacity = currentCapacity + diff[i];
          if (currentCapacity > capacity) {
              return false;
          }
      }
      return true;
  }
  ```
