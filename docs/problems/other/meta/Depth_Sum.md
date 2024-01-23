# Depth Sum

## Problem
Imagine an array that contains both integers and nested arrays, such as the following: [8, 4, [5, [9], 3], 6]. The depth sum is described as the weighted sum of each integer, weighted by their respective depths. In the example, 8's depth is 1, while 9's is 3.

Given such an array, calculate its depth sum.

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
