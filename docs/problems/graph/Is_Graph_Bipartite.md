# Is Graph Bipartite

## Alias
- Leetcode (785): [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)

## Problem
There is an **undirected** graph with `n` nodes, where each node is numbered between `0` and `n - 1`. You are given a 2D array `graph`, where `graph[u]` is an array of nodes that node `u` is adjacent to. More formally, for each `v` in `graph[u]`, there is an undirected edge between node `u` and node `v`. The graph has the following properties:
- There are no self-edges (graph[u] does not contain u).
- There are no parallel edges (graph[u] does not contain duplicate values).
- If v is in graph[u], then u is in graph[v] (the graph is undirected).
- The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.

A graph is bipartite if the nodes can be partitioned into two independent sets `A` and `B` such that **every** edge in the graph connects a node in set `A` and a node in set `B`.

Return `true` if and only if it is **bipartite**.

## Examples
- Example 1
   - Input
     ```
     [[1,2,3],[0,2],[0,1,3],[0,2]]  ([1,2,3] means node 0 has edges to node 1, node 2 and node 3)
     ```
   - Output
     ```
     false
     ```
   - Explanation
      - There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
- Example 2
   - Input
     ```
     [[1,3],[0,2],[1,3],[0,2]]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - We can partition the nodes into two sets: `{0, 2}` and `{1, 3}`.

## Solutions
- Solution 1: DFS
   - Idea
      - Use two colors to color the graph and see if there are any adjacent nodes having the same color.
         - `0`: Didn't color yet.
         - `1`: Blue.
         - `-1`: Red
      - For each node:
         - If it has been colored, check if the current color is the same as the color which should be colored.
         - If it hasn't been colored, use a color to color it. Then use the other color to color all its adjacent nodes.

  ```java
  public boolean isBipartite(int[][] graph) {
      int n = graph.length;
      int[] colors = new int[n];		   // Store the color of each node	
				
      for (int i = 0; i < n; i++) { 
          if (colors[i] == 0 && !validColor(graph, colors, 1, i)) {
              return false;
          }
      }
      return true;
  }
    
  public boolean validColor(int[][] graph, int[] colors, int color, int node) {
      if (colors[node] != 0) {          // if it has been colored, check if the current color is the same as the color which should be colored
          return colors[node] == color;
      }       
      colors[node] = color;             // if it hasn't been colored, use a color to color it
      for (int next : graph[node]) {
          if (!validColor(graph, colors, -color, next)) { // then use the other color to color all its adjacent nodes
              return false;
          }
      }
      return true;
  }
  ```

- Solution 2: BFS
   - Idea
       - Similar to solution 1.

  ```java
  public boolean isBipartite(int[][] graph) {
      int len = graph.length;
      int[] colors = new int[len];
        
      for (int i = 0; i < len; i++) {
          if (colors[i] != 0) continue;
          Queue<Integer> queue = new LinkedList<>();
          queue.offer(i);
          colors[i] = 1;   // Blue: 1; Red: -1.
            
          while (!queue.isEmpty()) {
              int cur = queue.poll();
              for (int next : graph[cur]) {
                  if (colors[next] == 0) {                     // if the adjacent node is not colored, color it with a different color
                      colors[next] = -colors[cur];
                      queue.offer(next);
                  } else if (colors[next] != -colors[cur]) {   // if the adjacent node is colored, heck if the current color is the same as the color which should be colored
                      return false;
                  }
              }
          }
      }
        
      return true;
  }
  ```
