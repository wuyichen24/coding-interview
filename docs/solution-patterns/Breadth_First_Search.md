# Breadth-First Search

- [**Concept**](#concept)
- [**When to use**](#when-to-use)
- [**Pseudocode**](#pseudocode)
- [**Complexity**](#complexity)
- [**Code example**](#code-example)
   - [Graph](#graph)
   - [2D array](#2d-array)

## Concept
- Breadth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
- The algorithm starts at the root node and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

![Animated_BFS](https://github.com/wuyichen24/coding-interview/assets/8989447/011f31a9-5dcc-4a3e-bdaf-633dc901ae64)

## When to use
- Pathfinding
   - Find the shortest path between nodes.
- Enumeration (find all the possible solutions).
- Serialization/Deserialization of a binary tree vs serialization in sorted order, allows the tree to be re-constructed in an efficient manner.

## Pseudocode
```
func BFS(node) {
    create queue
    mark node as visited
    queue.add(root)
    when queue is not empty {
        v = queue.poll()
        for adj from all the adjacents of v {
            if adj is not visited {
                mark adj as visited
                queue.add(adj)
            }
        }
    }
}
```

## Complexity
- Time complexity: *O(V + E)*
- Space complexity: *O(V)*
- Notes:
   - V is the number of vertices and E the number of edges.
   - Weighted graphs and unweighted graphs have the same complexity (Weights having no direct impact on the complexity).

## Code example
### Graph
```java
public void bfs(int[][] edges, int n, int root) {
    // Build the graph
    // key is the "from" node, value is the list of "to" nodes
    Map<Integer, List<Integer>> map = new HashMap<>();
    for (int i = 0; i < edges.length; i++) {
        int from = edges[i][0];
        int to   = edges[i][1];
        map.putIfAbsent(from, new ArrayList<>());
        map.get(from).add(to);
    }

    Queue<Integer> queue = new LinkedList<>();
    boolean visited[] = new boolean[n];

    visited[root] = true;
    queue.add(root);

    while (!queue.isEmpty()) {
        int curNode = queue.poll();

        System.out.println(curNode);

        for (int nextNode : map.getOrDefault(curNode, new ArrayList<>())) {
            if (!visited[nextNode]) {
                visited[nextNode] = true;
                queue.add(nextNode);
            }
        }
    }
}
```  
### 2D array
```java
public class BFS2DArray {
    static int[] dx = {-1, 1, 0, 0}; // Directional changes in x-coordinate
    static int[] dy = {0, 0, -1, 1}; // Directional changes in y-coordinate

    static void bfs(int[][] grid, int startX, int startY) {
        int rows = grid.length;
        int cols = grid[0].length;

        Queue<int[]> queue = new LinkedList<>();
        boolean[][] visited = new boolean[rows][cols];

        visited[startX][startY] = true;
        queue.offer(new int[]{startX, startY});

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];

            System.out.println("Visiting cell: (" + x + ", " + y + ")");

            // Explore neighbors
            for (int k = 0; k < 4; k++) {
                int newX = x + dx[k];
                int newY = y + dy[k];

                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols
                        && !visited[newX][newY]) {
                    queue.offer(new int[]{newX, newY});
                    visited[newX][newY] = true;
                }
            }
        }
    }
}
```
