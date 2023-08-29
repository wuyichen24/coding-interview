# Depth-First Search

- [**Concept**](#concept)
- [**When to use**](#when-to-use)
- [**Pseudocode**](#pseudocode)
   - Recursive implementation
   - Stack implementation
- [**Complexity**](#complexity)
- [**Code example**](#code-example)
   - [Graph](#graph)
      - Recursive implementation
      - Stack implementation
   - [2D array](#2d-array)
      - Recursive implementation
      - Stack implementation

## Concept
- Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
- The algorithm starts at the root node and explores as far as possible along each branch before backtracking.

![Depth-First-Search](https://github.com/wuyichen24/coding-interview/assets/8989447/01d7a646-92a7-4d6e-86e8-af0ee456bcc8)

## When to use
- Pathfinding
   - Solving maze with only one path.
   - May not find the shortest path between nodes (For finding shortest path, use BFS).
- Topological sorting
- Cycle detection
- Finding connected components

## Pseudocode
- Recursive implementation
  ```
  func DFS(root) {
      mark node as visited
      for adj from all the adjacents of root {
          if adj is not visited {
              DFS(adj)
          }
      }
  }
  ```
- Stack implementation
  ```
  func DFS(root) {
      create stack
      stack.push(root)
      while stack is not empty {
          v = stack.pop()
          if v is not visited {
              mark node as visited
              for adj from all the adjacents of v {
                  stack.push(adj) 
              }
          }
      }
  }
  ```
  
## Complexity
- Time complexity: O(V + E)
- Space complexity: O(V)
- Notes:
   - V is the number of vertices and E the number of edges.
   - Weighted graphs and unweighted graphs have the same complexity (Weights having no direct impact on the complexity).

## Code example
### Graph
- **Recursive implementation**  
  ```java
  public void dfsByRecursion(int[][] edges, int n, int root){
      // Build the graph
      // key is the "from" node, value is the list of "to" nodes
      Map<Integer, List<Integer>> map = new HashMap<>();
      for (int i = 0; i < edges.length; i++) {
          int from = edges[i][0];
          int to   = edges[i][1];

          map.putIfAbsent(from, new ArrayList<>());
          map.get(from).add(to);
      }

      boolean visited[] = new boolean[n];
      visited[root] = true;

      recursion(root, map, visited);
  }

  public void recursion(int node, Map<Integer, List<Integer>> map, boolean visited[]) {
      for (int nextNode : map.getOrDefault(node, new ArrayList<>())) {
          if (!visited[nextNode]) {
              System.out.println(nextNode);
              recursion(nextNode, map, visited);
          }
      }
  }
  ```
- **Stack implementation**
  ```java
  public void dfsByStack(int[][] edges, int n, int root){
      // Build the graph
      // key is the "from" node, value is the list of "to" nodes
      Map<Integer, List<Integer>> map = new HashMap<>();
      for (int i = 0; i < edges.length; i++) {
          int from = edges[i][0];
          int to   = edges[i][1];

          map.putIfAbsent(from, new ArrayList<>());
          map.get(from).add(to);
      }

      Stack<Integer> stack = new Stack<>();
      boolean visited[] = new boolean[n];

      stack.push(root);

      while (!stack.isEmpty()) {
          int curNode = stack.pop();
          if (!visited[curNode]) {
              System.out.println(curNode);
              visited[curNode] = true;
              for (int nextNode : map.getOrDefault(curNode, new ArrayList<>())) {
                  stack.push(nextNode);
              }
          }
      }
  }
  ```

### 2D array
- **Recursive implementation**
  ```java
  public class DFS2DArray {
      static int[] dx = {-1, 1, 0, 0}; // Directional changes in x-coordinate
      static int[] dy = {0, 0, -1, 1}; // Directional changes in y-coordinate

      static void dfsByRecursion(int[][] grid, int startX, int startY) {
          int rows = grid.length;
          int cols = grid[0].length;
          boolean[][] visited = new boolean[rows][cols];

          recursion(grid, startX, startY, visited);
      }

      static void recursion(int[][] grid, int x, int y, boolean[][] visited) {
          int rows = grid.length;
          int cols = grid[0].length;

          // Base case: Out of bounds or already visited
          if (x < 0 || x >= rows || y < 0 || y >= cols || visited[x][y]) {
              return;
          }

          // Process the current cell here
          System.out.println("Visiting cell: (" + x + ", " + y + ")");

          visited[x][y] = true;

          // Explore neighbors
          for (int k = 0; k < 4; k++) {
              int newX = x + dx[k];
              int newY = y + dy[k];

              recursion(grid, newX, newY, visited);
          }
      }
  }
  ```
- **Stack implementation**
  ```java
  public class DFS2DArray {
      static int[] dx = {-1, 1, 0, 0}; // Directional changes in x-coordinate
      static int[] dy = {0, 0, -1, 1}; // Directional changes in y-coordinate

      static void dfsByStack(int[][] grid, int startX, int startY) {
          int rows = grid.length;
          int cols = grid[0].length;

          Stack<int[]> stack = new Stack<>();
          boolean[][] visited = new boolean[rows][cols];

          stack.push(new int[]{startX, startY});

          while (!stack.isEmpty()) {
              int[] current = stack.pop();
              int x = current[0];
              int y = current[1];

              if (x < 0 || x >= rows || y < 0 || y >= cols || visited[x][y]) {
                  continue;
              }

              // Process the current cell here
              System.out.println("Visiting cell: (" + x + ", " + y + ")");

              visited[x][y] = true;

              // Explore neighbors
              for (int k = 0; k < 4; k++) {
                  int newX = x + dx[k];
                  int newY = y + dy[k];

                  stack.push(new int[]{newX, newY});
              }
          }
      }
  }
  ```
