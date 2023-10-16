# Get Mean Rank Count

## Problem
Academy recently organized a scholarship test on its platform.

There are *n* students with roll numbers *1,2,...,n* who appeared for the test, where the rank secured by the *i<sup>th</sup>* student is denoted by *rank[i]*. Thus, the array *rank* is a permutation of length *n*. Groups can only be formed with students having consecutive roll numbers, in other words, a subarray of the original array. For each value *x (1 <= x <= n)*, **find the number of groups that can be formed such that they have a mean rank equal to *x***.

More formally, given a permutation of length n, find the number of subarrays of the given array having a mean value equal to x, for each x in the range *[1, n]*.

### Notes
- The mean value of an array of k elements is defined as the sum of elements divided by k.
- A permutation of length n is a sequence where each number from 1 to n appears exactly once.
- A subarray of an array is a  contiguous section of the array.

### Example
The number of students, *n = 5*, and their ranks are *rank = [1, 2, 3, 4, 5]*

| x | Group(s) | Count |
|----|----|----|
| 1 | [1] | 1 |
| 2 | [1,2,3], [2] | 2 |
| 3 | [2,3,4], [3], [1,2,3,4,5] | 3 |
| 4 | [4], [3,4,5] | 2 |
| 5 | [5] | 1 |

Read the above as 'For the mean x = 1, the group [1] has mean value 1. There is 1 group' and so on. The full answer is [1,2,3,2,1].

### Function Description
Complete the function *getMeanRankCount* in the editor below.

*getMeanRankCount* has the following parameter:
- int rank[n]: the ranks of the students

### Returns
- int[n] the *i<sup>th</sup>* integer (where 1 <= i <= n) denotes the number of groups with a mean rank of i.

### Constraints
- 1 <= n <= 10<sup>3</sup>
- 1 <= rank[i] <= n
- The array *rank* contains all distint elements, and thus, is a permutation of {1...n}.

## Examples
- Example 1
   - Input
     ```
     [4,3,2,1]
     ```
   - Output
     ```
     [1,2,2,1]
     ```
   - Explanation
      - x = 1 -> [1]
      - x = 2 -> [3,2,1], [2]
      - x = 3 -> [3], [4,3,2]
      - x = 4 -> [4]
- Example 2
   - Input
     ```
     [4,7,3,6,5,2,1]
     ```
   - Output
     ```
     [1,1,1,4,4,1,1]
     ```
   - Explanation
      - x = 1 -> [1]
      - x = 2 -> [2]
      - x = 3 -> [3]
      - x = 4 -> [4], [3,6,5,2], [7,3,6,5,2,1], [4,7,3,6,5,2,1]
      - x = 5 -> [5], [7,3], [4,7,3,6], [4,7,3,6,5]
      - x = 6 -> [6]
      - x = 7 -> [7]

## Solutions
- Solution 1

  **Python**
  ```python
  import collections

  def getMeanRankCount(rank):
      def countKAverageSubarrays(k):
          res, curSum, dt = 0,0,collections.defaultdict(int)
          for i in range(n):
              curSum += rank[i] - k
              res += curSum == 0
              res += dt[curSum]
              dt[curSum] += 1
          return res
      n = len(rank)
      return [countKAverageSubarrays(i) for i in range(1, n + 1)]

  rank = [4,3,2,1] #out = [1,2,2,1]
  print(getMeanRankCount(rank))
  rank = [4,7,3,6,5,2,1] #out = [1,1,1,4,4,1,1]
  print(getMeanRankCount(rank))
  rank = [1, 2, 3, 4, 5] #out = [1,2,3,2,1]
  print(getMeanRankCount(rank))
  ```

  **Java (ChatGPT converted)**
  ```java
  public class RankMeanCount {
      public static void main(String[] args) {
          int[] rank1 = {4, 3, 2, 1}; // Expected output: [1, 2, 2, 1]
          int[] rank2 = {4, 7, 3, 6, 5, 2, 1}; // Expected output: [1, 1, 1, 4, 4, 1, 1]
          int[] rank3 = {1, 2, 3, 4, 5}; // Expected output: [1, 2, 3, 2, 1]

          List<Integer> result1 = getMeanRankCount(rank1);
          List<Integer> result2 = getMeanRankCount(rank2);
          List<Integer> result3 = getMeanRankCount(rank3);

          System.out.println(result1);
          System.out.println(result2);
          System.out.println(result3);
      }

      public static List<Integer> getMeanRankCount(int[] rank) {
          int n = rank.length;
          List<Integer> result = new ArrayList<>();

          for (int i = 1; i <= n; i++) {
              result.add(countKAverageSubarrays(rank, i));
          }

          return result;
      }

      private static int countKAverageSubarrays(int[] rank, int k) {
          int res = 0;
          int curSum = 0;
          Map<Integer, Integer> dt = new HashMap<>();

          for (int i = 0; i < rank.length; i++) {
              curSum += rank[i] - k;
              if (curSum == 0) {
                  res++;
              }
              if (dt.containsKey(curSum)) {
                  res += dt.get(curSum);
              }
              dt.put(curSum, dt.getOrDefault(curSum, 0) + 1);
          }

          return res;
      }
  }
  ```

![KklBRQN](https://github.com/wuyichen24/coding-interview/assets/8989447/c0ff9a3a-ab90-4099-853c-be31d1699b05)
![MJvpGrL](https://github.com/wuyichen24/coding-interview/assets/8989447/f514e8c0-6374-41ee-b435-4c82452b614e)
![MeZaAoN](https://github.com/wuyichen24/coding-interview/assets/8989447/67f98442-9c7e-4a01-9133-e54ee935e371)
![0k43CTg](https://github.com/wuyichen24/coding-interview/assets/8989447/0012b82c-e6e9-4059-baba-2c3f67e67df6)

