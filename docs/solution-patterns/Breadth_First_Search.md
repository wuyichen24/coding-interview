# Breadth-First Search

## Concept
- Breadth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
- The algorithm starts at the root node and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

![Animated_BFS](https://github.com/wuyichen24/coding-interview/assets/8989447/011f31a9-5dcc-4a3e-bdaf-633dc901ae64)

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
- Time complexity: O(V + E)
- Space complexity: O(V)
- Notes:
   - V is the number of vertices and E the number of edges.
   - Weighted graphs and unweighted graphs have the same complexity (Weights having no direct impact on the complexity).

## Code example
### Graph
```java
public static void bfs(int[][] edges, int n, int root) {
    // Build the graph
    // key is the "from" node, value is the list of "to" nodes
    Map<Integer, List<Integer>> map = new HashMap<>();
    for (int i = 0; i < edges.length; i++) {
        int from = edges[i][0];
        int to   = edges[i][1];
        if (map.get(from) == null) {
            List<Integer> nextNodes = new ArrayList<>();
            nextNodes.add(to);
            map.put(from, nextNodes);
        } else {
            map.get(from).add(to);
        }
    }

    Queue<Integer> queue = new LinkedList<>();
    boolean visited[] = new boolean[n];

    visited[root] = true;
    queue.add(root);

    while (!queue.isEmpty()) {
        int curNode = queue.poll();
        for (int nextNode : map.getOrDefault(curNode, new ArrayList<>())) {
            if (!visited[nextNode]) {
                System.out.println(nextNode);
                visited[nextNode] = true;
                queue.add(nextNode);
            }
        }
    }
}
```  
### 2D array

## When to use
- Pathfinding
   - Find the shortest path between nodes.
- Enumeration (find all the possible solutions).
- Serialization/Deserialization of a binary tree vs serialization in sorted order, allows the tree to be re-constructed in an efficient manner.
