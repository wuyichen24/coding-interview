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

## Solutions
- Solution 1
   - Idea
      - Ignore all the '?' and compare each 2 adjacent pairs
  ```java
  public class FindMinimumInefficiency {
      public static void main(String[] args) {
          String serverType = "????";
          System.out.println(findMinimumIneffciency(serverType));
      }

      static int findMinimumIneffciency(String serverType) {
          StringBuilder newServer = new StringBuilder();
          for (int i = 0; i < serverType.length(); i++) {
              char ch = serverType.charAt(i);
              if (ch != '?') {
                  newServer.append(ch);
              }
          }

          int inefficiency = 0;
          for (int i = 1; i < newServer.length(); i++) {
              if (newServer.charAt(i-1) != newServer.charAt(i)) {
                  inefficiency++;
              }
          }
          return inefficiency;
      }
  }
  ```

### Version 1
给一个string, char 由1, 0, '?' 组成。
将'?' 换成 1 or 0.
使的相邻pair不同的数目最小，并且返回最小值。
太儿戏的一道题目了，从第二个数开始便利，两个都不是'?' 看是否相同， 有一个是'?'就变成前面一个.

### Version 2
给定一个字符串只‍‌‌‌‌‍‌‍‌‌‍‍‍‍‍‍‍‍‍‌‌包含'0','1',?',在'?'上放上'0'或'1'使得相邻的'0'和'1'的对数最小，简单dp即可

![174329oitwt2ti3wy6ry6r](https://github.com/wuyichen24/coding-interview/assets/8989447/2a559a45-935b-4216-8c6f-fd98b8848f05)
![174349wazztth6th6s6wvt](https://github.com/wuyichen24/coding-interview/assets/8989447/acd964c0-f161-48ba-9eb6-9ff073ea7716)
![174409swukc92482pk4yc2](https://github.com/wuyichen24/coding-interview/assets/8989447/e7c44cd3-9c78-46ae-b258-53f3d1a34821)


