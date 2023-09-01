# Bus Routes

## Alias
- Leetcode (815): [Bus Routes](https://leetcode.com/problems/bus-routes/)

## Problem
You are given an array `routes` representing bus routes where `routes[i]` is a bus route that the `ith` bus repeats forever.

- For example, if `routes[0] = [1, 5, 7]`, this means that the 0th bus travels in the sequence `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...` forever.

You will start at the bus stop `source` (You are not on any bus initially), and you want to go to the bus stop `target`. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from `source` to `target`. Return `-1` if it is not possible.

## Examples
- Example 1
   - Input
     ```
     routes = [[1,2,7],[3,6,7]]
     source = 1
     target = 6
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
- Example 2
   - Input
     ```
     routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]]
     source = 15
     target = 12
     ```
   - Output
     ```
     -1
     ```

## Solutions
- Solution 1: BFS
   - Steps
      - Build the map by looping on the routes and store the mapping of the stop and buses can reach the stop.
      - Use queue to store teh current stop and how many buses have been taken.

  ```java
  public int numBusesToDestination(int[][] routes, int source, int target) {
      // build the map:
      // - key: the stop.
      // - value: the set of buses can reach the stop.
      HashMap<Integer, HashSet<Integer>> map = new HashMap<>();
      for (int i = 0; i < routes.length; ++i) {
          for (int j : routes[i]) {
              map.putIfAbsent(j, new HashSet<>());
              map.get(j).add(i);
          }
      }

      Queue<int[]> queue = new ArrayDeque();                // int[a, b] = a is the stop, b is the number of buses you take
      queue.offer(new int[] {source, 0});

      HashSet<Integer> visitedStops = new HashSet<>();      // record all visited stops and we won't check a stop for twice
      visitedStops.add(source);

      boolean[] visitedBuses = new boolean[routes.length];  // record which bus has been taken.

      while (!queue.isEmpty()) {
          int[] current = queue.poll();
          int stop      = current[0];
          int busCount  = current[1];

          if (stop == target) return busCount;

          for (int i : map.get(stop)) {
              if (visitedBuses[i]) continue;

              for (int j : routes[i]) {
                  if (!visitedStops.contains(j)) {
                      visitedStops.add(j);
                      queue.offer(new int[] {j, busCount + 1});
                  }
              }
                
              visitedBuses[i] = true;
          }
      }
      return -1;
  }
  ```
