# Binary Search

- [**Concepts**](#concepts)
- [**Problems can use this pattern**](#problems-can-use-this-pattern)
- [**Algorithm**](#algorithm)
- [**Process**](#process)
- [**Types**](#types)
   - [Find a number](#find-a-number)
   - [Find minimum `f(x)` which `f(x) >= target`](#find-minimum-fx-which-fx--target)
   - [Find maximum `f(x)` which `f(x) <= target`](#find-maximum-fx-which-fx--target)
- [**Strategies**](#strategies)
- [**Problems**](#problems)

## Concepts
- Binary search is a search algorithm that finds the position of a target value within a sorted array.

## Problems can use this pattern
- Find a number
- Find the maximum/minimum value.
- Properties
   - `f(x)` must be a monotonic function, either increasing or decreasing.

## Algorithm
- **Idea**
   - Narrow down the search range by half each time.
- **Process**
   - Use upper bound and lower bound to define the search range.
   - Each time, compare the middle element in the search range with the target value.
      - If the target value = The middle element, its position in the array is returned. 
      - If the target value < The middle element, the search continues in the lower half of the search range. 
      - If the target value > The middle element, the search continues in the upper half of the search range.
- **Basic code**
  ```
  int binarySearch(int[] nums, int target) {
      int left = 0;
      int right = nums.length - 1;
      
      while (left <= right) {                            // left and right could point to the same element
          int mid = (left + right) / 2;
          if (target == nums[mid]) return mid;           // termination criteria
          if (target < nums[mid]) right = mid - 1;
          if (target > nums[mid]) left = mid + 1;
      }
      
      return -1;
  }
  ```
- **Details**
   - *Why while-loop is `while (left <= right)` rather than `while (left < right)`?*
      - If `left` and `right` are same, the search range is `[right, right]` (e.g., `[2, 2]`). But in this case, the seach range is not empty. If you terminate the while-loop under this situation, you will miss the search range `[right, right]` (e.g., `[2, 2]`).
   - *Why `left = mid + 1` rather than `left = mid` and `right = mid - 1` rather than `right = mid`?*
      - Because the search range is inclusive (e.g., `[left, right]`). Because `mid` has been searched, so the next search range could be either `[left, mid-1]` or `[mid+1, right]`.
- **Time complexity**
   - O(*log*n)

## Process
- **Step 1**: Classify `x`, `f(x)` and `target`.
   - `x`: The input value.
   - `f(x)`: The monotonic function.
      - Monotonic increasing function
         - `f(x)` is increasing while `x` is increasing.
         - Examples：
            - The elements of the array are sorted in ascending order.
      - Monotonic decreasing function
         - `f(x)` is decreasing while `x` is increasing.
         - Examples:
            - The elements of the array are sorted in descending order.
            - The relationship between speed and time (For a certain distance, more speed needs less time).
   - `target`: The target need to find or satisfy.
- **Step 2**: Classify the problem is to find a certain number or find a certain boundary.
   - Find a number
   - Find a boundary
      - Find `f(x) >= target`
      - Find `f(x) <= target`
  
## Types
### Find a number
- **Meaning**
   - find x which `f(x) = target`
- **Code**
  ```java
  int findNumber(int[] nums, int target) {
      int left = 0;
      int right = nums.length - 1;
      
      while (left <= right) {
          int mid = (left + right) / 2;
          if (target == nums[mid]) return mid;
          if (target < nums[mid]) right = mid - 1;
          if (target > nums[mid]) left = mid + 1;
      }
      
      return -1;
  }
  ```
### Find minimum `f(x)` which `f(x) >= target`
- **f(x) is monotonic increasing function**
   - *Meaning*
      - Find minimum `x`, which minimum `f(x) >= target`
      - Find left boundary.

        ![Min_X_Min_Fx drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/c7aefe54-c140-4788-89bf-e2b36e0e394a)

   - *Code*
     ```java
     int findMinNum(int[] nums, int target) {
         int left = 0, right = nums.length - 1;
         while (left <= right) {
             int mid = left + (right - left) / 2;
             if (nums[mid] >= target) {   // f(x) >= target
                 right = mid - 1;
             } else {
                 left = mid + 1;
             }
         }
         return left;
     }
     ```
- **f(x) is monotonic decreasing function**
   - *Meaning*
      - Find maximum `x`, which minimum `f(x) >= target`
      - Find right boundary.
    
        ![Min_X_Min_Fx drawio (1)](https://github.com/wuyichen24/coding-interview/assets/8989447/67d74dd1-1ec0-48ad-815e-562513e25e28)

   - **Code**
     ```java
     int findMinNum(int[] nums, int target) {
         int left = 0, right = nums.length - 1;
         while (left <= right) {
             int mid = left + (right - left) / 2;
             if (nums[mid] >= target) {   // f(x) >= target
                 left = mid + 1;          // reverse the statements in the if-else
             } else {
                 right = mid - 1;         // reverse the statements in the if-else
             }
         }
         return left;
     }
     ```

### Find maximum `f(x)` which `f(x) <= target`
- **f(x) is monotonic increasing function**
   - *Meaning*
      - Find maximum `x`, which maximum `f(x) <= target`
      - Find right boundary.
    
        ![Min_X_Min_Fx drawio (2)](https://github.com/wuyichen24/coding-interview/assets/8989447/04b73e60-1800-4ebc-9e5e-cc1bb72cf03f)

   - *Code*
     ```java
     int find(int[] nums, int target) {
         int left = 0, right = nums.length - 1;
 
         while (left <= right) {
             int mid = left + (right - left) / 2;
             if (nums[mid] <= target) {   // f(x) <= target
                 left = mid + 1;
             } else {
                 right = mid - 1;
             }
         }

         return right;
     }
     ```
- **f(x) is monotonic decreasing function**
   - *Meaning*
      - Find minimal `x`, which maximum `f(x) <= target`
      - Find left boundary.

        ![Min_X_Min_Fx drawio (5)](https://github.com/wuyichen24/coding-interview/assets/8989447/404708f2-11c1-4342-a229-e1ad98a58570)
        
   - *Code*
     ```java
     int find(int[] nums, int target) {
         int left = 0, right = nums.length - 1;
 
         while (left <= right) {
             int mid = left + (right - left) / 2;
             if (nums[mid] <= target) {   // f(x) <= target
                 right = mid - 1;         // reverse the statements in the if-else
             } else {
                 left = mid + 1;          // reverse the statements in the if-else
             }
         }

         return right;
     }
     ```
   - *Problem*
      - [Koko Eating Bananas](../problems/other/Koko_Eating_Bananas.md)
      - [Capacity To Ship Packages Within D Days](../problems/other/Capacity_To_Ship_Packages_Within_D_Days.md)

## Strategies
- If the input array for the question is sorted or "kind of sorted", consider use binary search.

## Problems
- [Divide Two Integers](../problems/math/Divide_Two_Integers.md)
- [Search in Rotated Sorted Array](../problems/array/Search_In_Rotated_Sorted_Array.md)
- [Koko Eating Bananas](../problems/other/Koko_Eating_Bananas.md)
- [Capacity To Ship Packages Within D Days](../problems/other/Capacity_To_Ship_Packages_Within_D_Days.md)
- [Find Local Minimum](../problems/array/Find_Local_MInimum.md)
