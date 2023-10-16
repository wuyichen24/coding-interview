# Find Minimum Inefficiency Server Pairs

## Problem
Amazon Web Server has *n* servers, each of them either has high fault tolerance or high reliability. A system works better if all the servers have the same attributes. The ineffciency of a group of servers is defined as the number of adjacent pairs of servers that have different attributes. 

Consider, for example, a set of servers described as 1001001 where '0' means the server has high fault tolerance, '1' means the server has high reliability. The inefficiency of this group is 4 as described in the image below:

<img width="459" alt="Screenshot 2023-10-16 at 9 52 11 AM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/8e66bc7f-f4c9-4b9f-9bca-ddb12e024bae">

Given a string *serversType* of length *n* consisting of '0', '1' and '?', where '0' means the server has high fault tolerance, '1' means the server has high reliability, and '?' means you can install any type of server there, **find the minimum inefficiency you can get after installing a server at each '?'**.

### Example
*serverType = "??011??0"*

In the above example, the number of servers *n = 8*. One optimal way to install servers is to 
- Install a server having high fault tolerance (0) at the first and second positions
- Install a server having high reliability (1) at the sixth and the seventh positions

After making these changes, the server types are "00011110". the number of adjacent pairs having different server types is 2. It can be shown that the answer cannot be reduced from 2. Return 2.

Note that another possible way to achieve a minimum number of different adjacent pairs as would be 00011100 and 00011000.

### Function Description
Complete the function *findMinimumIneffciency* in the editor below.

*findMinimumIneffciency* has the following parameter:
- String serverType: the server types

### Return
- int: the minimum possible inefficiency

## Examples
- Example 1
   - Input
     ```
     00?10??1?1
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - One optimal way to install servers is to install high-reliability servers. The new server types are "0011011111" with 3adjacent dissimilar pairs.
- Example 2
   - Input
     ```
     ????
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - Only install one type of server so there are no dissimilar pairs.
