# Perfect Set

## Problem
The set contains at least two bags of rice.

When the rice bags in the set perfect are sorted in increasing order by grain count, it satisfies the condition `perfect[i] * perfect[i]= perfect[i+1]` or all Here n is the size of the set and perfect[i] is the number of rice grains in bag.

Find the largest possible set perfect and return an integer, the size of that set. If no such set is possible, then return -1. It is guaranteed that all elements in riceBags are distinct.

**Example**

Let the bags of rice available on Amazon have grain counts [3, 9, 4, 2, 16]. The following are the perfect sets.

Set perfect = [3, 9]. The size of this set is 2.
Set perfect=[4,2]. The size of this set is 2.
Set perfect = [4, 16]. The size of this set is 2.
Set perfect = [4, 2, 16]. The size of this set is 3.

The size of the largest set is 3. The image below illustrates the correct ordering of the purchased rice bags by grains of rice.

**Function Description**

Complete the function maxSetSize in the editor below.

maxSetSize has the following parameter: int riceBags[n]: the list of bags of rice by rice grain count

## Solutions
- **Solution 1: Sort and count**

  ```java
  public int maxSetSize(int[] riceBags) {
      HashMap<Integer, Integer> map = new HashMap<>();
      Arrays.sort(riceBags);
      int max = 1;
      for(int bag : riceBags){
          int tmp = 0;
          map.put(bag*bag, tmp = map.getOrDefault(bag, 0)+1);
          max = Math.max(tmp, max);
      }
      return max;
  }
  ```

## Reference
- https://leetcode.com/discuss/interview-question/object-oriented-design/3694878/OA:-max-LENGTH-of-perfect-set
