# Graph

## Types

## Common algorithms

## Best practice
- **Build the graph before executing any algorithm**
   - Reason
      - Before we running any algorithm, it would be better to build the graph by map or any key-value pairs structures.
   - Examples
      - Unweighted graph
        ```java
        function(int[][] edges, int n, int root) {
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

            /* Continue */
        }
        ```
      - Weighted graph
     
