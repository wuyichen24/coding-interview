# Graph Clone

## Solutions
- Solution 1

```java
public class Vertex {
    Collection<Vertex> directedEdges = new ArrayList<>();
    Object data;

    public Vertex(Object data) {
        this.data = data;
    }
}

public class Graph {
    Collection<Vertex> vertices = new ArrayList<>();
}

public static Graph cloneGraph(Graph originalGraph) {
    Map<Vertex, Vertex> oldToNew = new HashMap<>();

    Graph newGraph = new Graph();
    for (Vertex oldVertex : originalGraph.vertices) {
        Vertex newVertex = new Vertex(oldVertex.data);
        oldToNew.put(oldVertex, newVertex);
        newGraph.vertices.add(newVertex);
    } 

    for (Vertex oldVertex : originalGraph.vertices) {
        for (Vertex oldEdgeVertex : oldVertex.directedEdges) {
            oldToNew.get(oldVertex).directedEdges.add(oldToNew.get(oldEdgeVertex));
        }
    }

    return newGraph;
}
```
