# Topological Sorting

## Concepts
- A topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering.

## Examples
- In scheduling, a sequence of jobs or tasks based on their dependencies. Before processing task A, you must finish task B first.

## Characters
- If a directed graph has an cycle, it can **NOT** be topologically sorted.

## Algorithm
### Kahn's algorithm
- **Idea**
   - Find all the "start nodes" which have no incoming edges, insert them into a set S.
   - Remove all the outcoming edges of the node in the set S there will be some new nodes which have no incoming edges, insert them into the set S.
   - Until there is no node.
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
- **Pseudo code**
  ```
  L ← Empty list that will contain the sorted nodes
  while exists nodes without a permanent mark do:
      select an unmarked node n
      visit(n)

  function visit(node n):
      if n has a permanent mark then
          return
      if n has a temporary mark then
          stop   (graph has at least one cycle)

      mark n with a temporary mark

      for each node m with an edge from n to m do
          visit(m)

      remove temporary mark from n
      mark n with a permanent mark
      add n to head of L
  ```
