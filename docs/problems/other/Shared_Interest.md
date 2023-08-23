# Shared Interest

## Problem
Given a graph of friends who have different interests, determine which groups of friends have the most interests in common. Then use a little math to determine a value to return.

The graph will be represented as a series of nodes numbered consecutively from *1* to *friends_nodes*. Friendship have evolved based on interests which will be represented as weights in the graph. Any members who share the same interest are said to eb connected by that interest. Once the node pairs with with the maximum number of shared interests are determined, multiply the friends_nodes of the resulting node pairs and return the maximal product.

###
*friends_nodes = 4*
*friends_edges = 5*
*friends_from = [1,1,2,2,2]*
*friends_to = [2,2,3,3,4]*
*friends_weight = [2,3,1,3,4]*

```
From  To  Weight
1     2     2
1     2     3
2     3     1
2     3     3
2     4     4
```
