# Get Min Lag

## Problem
An AWS client has brought servers and databases from data centers in different parts of the world for their application. For simplicity, let's assume all the servers and data centers are located on a 1-dimensional line.
You have been given the task of optimizing the network connection. Each data center must be connected to a server. The positions of n data centers and n servers are given in the form of arrays. Any particular data center, center[i], can deliver to any particular server destination, destination//]. The lag is defined distance between a data center at location x and a server destination at location yis x - yl, i.e., the absolute difference between x and y. Determine the minimum lag to establish the entire network.

### Example
There are n = 3 connections, the positions of data centers, center = [1, 2, 2], and the positions of the server destinations, destination = [5, 2, 4].

The most efficient deliveries are:
- ﻿﻿The center at location 1 makes the first connection to the server at location 2.
﻿﻿- The center at location 2 makes the second connection to the server at location 4.
﻿- The center at location 2 makes the third connection to the server at location 5.

The minimum total lag is = abs(1 - 2) + abs(2 - 4) + abs(2 - 5) = 1 + 2 + 3 = 6.

### Function Description
Complete the function *getMinLag* in the editor below.

*getMinLag* has the following parameter(s):
- int center[n]: the positions of data centers int destination[nl: the positions of server destinations

## Solutions
- Solution 1:
   - Idea
      - Sort the servers and centers, then add up abs(servers[i] - centers[i]) for all i
