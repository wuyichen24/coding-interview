# Nested List Weight Sum

## Alias
- Leetcode (339): [Nested List Weight Sum](https://leetcode.com/problems/valid-word-abbreviation/)

## Problem
You are given a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may also be integers or other lists.

The **depth** of an integer is the number of lists that it is inside of. For example, the nested list `[1,[2,2],[[3],2],1]` has each integer's value set to its **depth**.

Return the sum of each integer in `nestedList` multiplied by its depth.

## Examples
- Example 1
   - Input
     ```
     nestedList = [[1,1],2,[1,1]]
     ```
   - Output
     ```
     10
     ```
   - Explanation
      - Four 1's at depth 2, one 2 at depth 1. `1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10`.

      ![nestedlistweightsumex1](https://github.com/wuyichen24/coding-interview/assets/8989447/34261f24-40c4-4fa3-a691-74c518858962)

- Example 2
   - Input
     ```
     nestedList = [1,[4,[6]]]
     ```
   - Output
     ```
     27
     ```
   - Explanation
      - One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3. `1*1 + 4*2 + 6*3 = 27`.

      ![nestedlistweightsumex2](https://github.com/wuyichen24/coding-interview/assets/8989447/232c0014-340b-42f0-8fc9-15554472c524)

## Solutions
- **Solution 1: BFS**
   - Idea
      - Add all the elements in the queue and execute BFS.
      - For each element, consider
         - If it is an integer, calculate the sum.
         - If it is a nested element, add to queue.

  ```java
  public int depthSum(List<NestedInteger> nestedList) {
      Queue<NestedInteger> queue = new LinkedList<>();
      queue.addAll(nestedList);

      int depth = 1;
      int total = 0;

      while (!queue.isEmpty()) {
          int size = queue.size();
          for (int i = 0; i < size; i++) {
              NestedInteger nested = queue.poll();
              if (nested.isInteger()) {
                  total += nested.getInteger() * depth;
              } else {
                  queue.addAll(nested.getList());
              }
          }
          depth++;
      }
      return total;
  }
  ```
