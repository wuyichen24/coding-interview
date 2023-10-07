# Topological Sorting

- [**Concepts**](#concepts)
- [**Examples**](#examples)
- [**Characters**](#characters)
- [**Solutions**](#solutions)
   - [Kahn's algorithm](#kahns-algorithm)
   - [DFS](#dfs)
- [**Problems**](#problems)
- [**References**](#references)

## Concepts
- A topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering.

## Examples
- In scheduling, a sequence of jobs or tasks based on their dependencies. Before processing task A, you must finish task B first.

## Characters
- If a directed graph has an cycle, it can **NOT** be topologically sorted.

## Solutions
### Kahn's algorithm
- **Idea**
   - *Algorithm*
      - Find all the "start nodes" which have no incoming edges, insert them into a set S.
      - Remove all the outcoming edges of the node in the set S there will be some new nodes which have no incoming edges, insert them into the set S.
      - Until there is no node.
   - *Difference with BFS*
      - Kahn's algorithm only pushes nodes with 0 in-degree into the queue.
      - BFS pushes all the neighboring nodes into the queue.
- **Pseudo code**
  ```
  // collections
  L ← Empty list that will contain the sorted elements
  S ← Set of all nodes with no incoming edge

  // build topological ordering
  while S is not empty do:
      remove a node n from S
      add n to L
      for each node m with an edge e from n to m do:
          remove edge e from the graph
          if m has no other incoming edges then:
              insert m into S

  // return the nodes in the topogical ordering
  if graph has edges then:
      return error   (graph has at least one cycle)
  else:
      return L       (a topologically sorted order)
  ```
- **Java**
  ```java
  public int[] kahnAlgorithm(int numOfNodes, int[][] edges) {
      Map<Integer, List<Integer>> graphMap = new HashMap<>();
      int[] inDegreeArray    = new int[numOfNodes];
      int[] topologicalOrder = new int[numOfNodes];

      // Build the graph by map and record in-degree of each node
      for (int i = 0; i < edges.length; i++) {
          int from = edges[i][0];
          int to   = edges[i][1];
          graphMap.putIfAbsent(from, new ArrayList<>());
          graphMap.get(from).add(to);

          // Record in-degree of each vertex
          inDegreeArray[to] += 1;
      }

      // Add all vertices with 0 in-degree to the queue
      Queue<Integer> queue = new LinkedList<Integer>();
      for (int i = 0; i < numOfNodes; i++) {
          if (inDegreeArray[i] == 0) {
              queue.add(i);
          }
      }

      int i = 0;
      // Process until the queue becomes empty
      while (!queue.isEmpty()) {
          int node = queue.remove();
          topologicalOrder[i++] = node;

          // Reduce the in-degree of each neighbor by 1
          if (graphMap.containsKey(node)) {
              for (Integer neighbor : graphMap.get(node)) {
                  inDegreeArray[neighbor]--;

                  // If in-degree of a neighbor becomes 0, add it to the Q
                  if (inDegreeArray[neighbor] == 0) {
                      queue.add(neighbor);
                  }
              }
          }
      }

      // Check to see if topological sort is possible or not.
      if (i == numOfNodes) {
          return topologicalOrder;
      } else {
          return new int[0];
      }
  }
  ```
### DFS
- **Idea**
   - The reversed ordering of post-order DFS traversal is the topological ordering.
      - Consider binary tree, if we process post-order traversal, after all the child nodes have been visited, the root node will be visited.
        
        ![2 (1)](https://github.com/wuyichen24/coding-interview/assets/8989447/ae709df2-a448-4047-934e-239c2f667f91)
        ![3 (1)](https://github.com/wuyichen24/coding-interview/assets/8989447/073ae58e-1439-41b5-acdc-c1cea896a028)

- **Java**
  ```java
  class Solution {
      List<Integer> postorder = new ArrayList<>();

      boolean hasCycle = false;
      boolean[] visited, onPath;

      public int[] getTopologicalOrdering(int numCourses, int[][] edges) {
          Map<Integer, List<Integer>> graphMap = new HashMap<>();

          // Build the graph by map and record in-degree of each node
          for (int i = 0; i < edges.length; i++) {
              int from = edges[i][0];
              int to   = edges[i][1];
              graphMap.putIfAbsent(from, new ArrayList<>());
              graphMap.get(from).add(to);
          }

          visited = new boolean[numCourses];
          onPath  = new boolean[numCourses];

          // Post-order traversal
          for (int i = 0; i < numCourses; i++) {
              postOrder(graphMap, i);
          }

          if (hasCycle) {
              return new int[]{};
          }
        
          // Reverse the order of post-order traversal
          Collections.reverse(postorder);
        
          int[] result = new int[numCourses];
          for (int i = 0; i < numCourses; i++) {
              result[i] = postorder.get(i);
          }
          return result;
      }

      void postOrder(Map<Integer, List<Integer>> graphMap, int s) {
          if (onPath[s]) {
              hasCycle = true;
          }
          if (visited[s] || hasCycle) {
              return;
          }
          onPath[s] = true;
          visited[s] = true;
          List<Integer> adjNodes = graphMap.get(s);
          if (adjNodes != null)
              for (Integer t : graphMap.get(s)) {
                  postOrder(graphMap, t);    // recursion
              }
          postorder.add(s);                  // post-order operation: add node to the list
          onPath[s] = false;
      }
  }
  ```

## Problems
- [Course Schedule II](../problems/graph/Course_Schedule_II.md)
- [Find All Possible Recipes from Given Supplies](../problems/graph/Find_All_Possible_Recipes_From_Given_Supplies.md)
- [Get Lexicographically Increasing Order from Words](../problems/string/Get_Lexicographically_Increasing_Order_From_Words.md)

## References
- [labuladong 的算法笔记 | 环检测及拓扑排序算法](https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-03a72/huan-jian--e36de/)
- [AlgoMonster | Topological Sort Introduction](https://algo.monster/problems/topo_intro)
- [Wikipedia | Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting)
