# Jump Game IV

## Alias
- Leetcode (1345): [Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

## Problem
Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index `i` to index:

- `i + 1` where: `i + 1 < arr`.length. (You can jump to the next index)
- `i - 1` where: `i - 1 >= 0`. (You can jump to the previous index)
- `j` where: `arr[i] == arr[j]` and `i != j`. (You can jump to any index which has the same value with the current index)
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

## Examples
- Example 1
   - Input
     ```
     [100,-23,-23,404,100,23,23,23,3,404]
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - You need three jumps from index `0 --> 4 --> 3 --> 9`. Note that index 9 is the last index of the array.
- Example 2
   - Input
     ```
     [7]
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - Start index is the last index. You do not need to jump.
- Example 3
   - Input
     ```
     [7,6,9,6,9,6,9,7]
     ```
   - Output
     ```
     7
     ```
   - Explanation
      - You can jump directly from index 0 to index 7 which is last index of the array.

## Solutions
- Solution 1: BFS
   - Idea
      - At the current index, consider 3 directions
         - Next index
         - Previous index
         - Indexes with same value

  ```java
  public int minJumps(int[] arr) {
      int n = arr.length;
      if (n <= 1) {
          return 0;
      }

      // build the graph, key is each unique value in the array, value is the list of indexes have the same value.
      Map<Integer, List<Integer>> graph = new HashMap<>();
      for (int i = 0; i < n; i++) {
          graph.computeIfAbsent(arr[i], v -> new LinkedList<>()).add(i);
      }

      List<Integer> curs = new LinkedList<>(); // store current layer
      curs.add(0);
      Set<Integer> visited = new HashSet<>();
      int step = 0;

      // when current layer exists
      while (!curs.isEmpty()) {
          List<Integer> nex = new LinkedList<>();

          // iterate the layer
          for (int node : curs) {
              // check if reached end
              if (node == n - 1) {
                  return step;
              }

              // check same value
              for (int child : graph.get(arr[node])) {
                  if (!visited.contains(child)) {
                      visited.add(child);
                      nex.add(child);
                  }
              }

              // clear the list to prevent redundant search
              graph.get(arr[node]).clear();

              // check neighbors
              if (node + 1 < n && !visited.contains(node + 1)) {
                  visited.add(node + 1);
                  nex.add(node + 1);
              }
              if (node - 1 >= 0 && !visited.contains(node - 1)) {
                  visited.add(node - 1);
                  nex.add(node - 1);
              }
          }

          curs = nex;
          step++;
      }

      return -1;
  }
  ```
