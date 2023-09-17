# Trap Rain Water

## Alias
- Leetcode (42): [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

## Problem
- Given non-negative integers representing an elevation map where the width of each bar is 1.
- Compute how much water it can trap after raining.

## Example
- Height: [0,1,0,2,1,0,1,3,2,1,2,1]
- Capacity: 6
- Explanation:

  ![rainwatertrap](https://user-images.githubusercontent.com/8989447/116346372-5a391700-a7a7-11eb-8490-628bb7247b80.png)

## Solutions
- **Solution 1: Brute force**
   - Idea
      - Use the basic relationship for calculating the water on each element.
      - For each element, Water = Min(LeftMaxBar, RightMaxBar) - Height.

  ![tw](https://user-images.githubusercontent.com/8989447/116347764-10056500-a7aa-11eb-95bb-5288f529382e.png)

  ```java
  public int trap(int[] height) {
      int water = 0;
      for (int i = 0; i < height.length; i++) {                    // Iterate the array from left to right
          int leftMax = 0;
          int rightMax = 0;
            
          for (int j = i; j >=0; j--) {                            // Find LeftMaxBar
              leftMax = Math.max(leftMax, height[j]);
          }
          for (int j = i; j < height.length; j++) {                // Find RightMaxBar
              rightMax = Math.max(rightMax, height[j]);
          }
            
          water = water + Math.min(leftMax, rightMax) - height[i]; // Calculate the water of the current element and add it to the final answer
      }
        
      return water;
  }
  ```
