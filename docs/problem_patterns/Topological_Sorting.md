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
      return L   (a topologically sorted order)
  ```
