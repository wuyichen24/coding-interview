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
    queue.add(root) {
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

## When to use
- Pathfinding
   - Find the shortest path between nodes
- Enumeration
