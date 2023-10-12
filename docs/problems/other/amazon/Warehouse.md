# Warehouse

## Problem
Amazon has multiple delivery centers and delivery warehouses all over the world! The world is represented by a number line from -10<sup>9</sup> to 10<sup>9</sup>. There are `n` delivery centers, the i<sup>th</sup> one at location center[i]. A location `x` is called a suitable location for a warehouse if it is possible to bring all the products to that point by traveling a distance of no more than d. At any one time, products can be brought from one delivery center and placed at point x. Given the positions of n delivery centers, calculate the number of suitable locations in the world. That is, calculate the number of points x on the number line (-10<sup>9</sup> ≤ x ≤ 10<sup>9</sup>) where the travel distance required to bring all the products to that point is less than or equal to `d`.

**Note**
The distance between point x and center[i] is |x - center[i]|, their absolute difference.

**Example**
Given n = 3, center = [-2, 1, 0], d = 8

The various locations along with the distance traveled to bring all treasures at that point are
- Location the warehouse at x = -3: First bring products from center[0] = -2 covering a distance of |-3 - (-2)| = 1 to reach the center and |-3 - (-2)| = 1 to return. Similarly we bring products from centers 1 and 2 to point -3 for total distance of 1 + 1 + 4 + 4 + 3 + 3 = 16 which is > d. This is not a suitable solution. 

## Solutions
- Solution 1 Binary search (ChatGPT converted) 
  ```java
  public class Warehouse {
      public static void main(String[] args) {
          int[] centers = {-2, 1, 0};
          long distance = 8;
          long result = suitableLocations(centers, distance);
          System.out.println("Result: " + result);
      }

      public static long suitableLocations(int[] centers, long distance) {
          Arrays.sort(centers);
          long d = distance / 2;
          int n = centers.length;
          long temp = centers[n / 2];
          if (!cal(centers, temp, d)) {
              return 0;
          }

          long left = temp;
          long right = centers[n - 1] + d;
          while (left <= right) {
              long mid = (left + right) / 2;
              if (cal(centers, mid, d)) {
                  left = mid + 1;
              } else {
                  right = mid - 1;
              }
          }
          long s = left - 1;
          left = centers[0] - d;
          right = temp;
          while (left <= right) {
              long mid = (left + right) / 2;
              if (cal(centers, mid, d)) {
                  right = mid - 1;
              } else {
                  left = mid + 1;
              }
          }  
          return Math.max(s - right, 0);
      }

      public static boolean cal(int[] centers, long position, long limit) {
          long remainingLimit = limit;
          for (int center : centers) {
              remainingLimit -= Math.abs(position - center);
              if (remainingLimit < 0) {
                  return false;
              }
          }
          return true;
      }
  }
  ```
- Solution 2 Binary search (1point3acres) 
  ```java
  public class Warehouse2 {
      static int ans = 0;

      public static void main(String[] args) {
          int[] centers = {-2, 1, 0};
          int distance = 8;
          int result = getN(centers, distance);
          System.out.println("Result: " + result);
      }

      public static int getN(int[] centers, int d){
          int min = Integer.MAX_VALUE;
          int max = Integer.MIN_VALUE;
          for(int c:centers){
              if(min > c)
                  min = c;
              if(max < c)
                 max = c;
          }

          int l = min - d;
          int r = d + max;
          find(l, r, centers, d);
          return ans;
      }

      public static void find(int l, int r, int[] centers, int d){
          if(l<=r){
              int mid = l + (r-l)/2;
              int m = calculate(centers, mid);
              if(m <= d)
                  ans++;
              find(l,mid-1, centers, d);
              find(mid+1, r,centers, d);
          }
      }

      public static int calculate(int[] centers, int x) {
          int sum = 0;
          for (int center : centers) {
              sum = sum + Math.abs(x - center);
          }

          return sum * 2;
      }
  }
  ```

## References
- https://leetcode.com/discuss/interview-question/3949864/Amazon-OA
- https://www.1point3acres.com/bbs/thread-1017363-1-1.html
