# Get Minimum Cost

## Problem
In Amazon Go Store, there are *n* items, each associated with two positive values *a[i]* and *b[i]*. Thre are infinitely many items of each type numbered from 1 to infinity and the item numbered *j* of type *i* costs *a[i] + (j - 1) * b[i]* units.

Determine the minimum possible cost to purchase exactly *m* items.

### Example
Given *n = 3, a = [2,1,1], b = [1,2,3], m = 4*

The optimal types to buy are
- Choose *i = 1*. This is the first purchase of this type of item, so *j = 1*. The first item costs a[1] + (1 - 1) * b[1] = 1 + (1-1) * 2 = 1.
- Choose *i = 2*. Again, it is the first purchase of this type so *j = 1*. The second item costs = a[2] + (1 - 1) * b[2] = 1 + (1-1) * 3 = 1.
- Choose *i = 0* which costs 2 + (1 - 1) * 1 = 2.
- When a second unit of any type is purchased, *j = 2* for that transaction. The cost of a second unit of each item are:
   - a[0] costs a[0] + (2-1) * b[0] = 2 + 1 * 1 = 3
   - a[1] costs 1 + 1 * 2 = 3
   - a[2] costs 1 + 1 * 3 = 4
   - Choose either a[0] or a[1] since they cost less.
 
The total cost to purchase is 1 + 1 + 2 + 3 = 7.

### Function Description
Complete the function *getMinimumCost* in the editor below.

*getMinimumCost* has the following parameters:
- int a[n]: an array of integers
- int b[n]: an array of integers
- m: the number of items to purchase

### Return 
- long integer: the minimum cost

## Examples
- Example 1
   - Input
     ```
     n = 3
     a = [1,3,2]
     b = [2,1,3]
     m = 5
     ```
   - Output
     ```
     13
     ```
   - Explanation
      - It is optimal to buy
         - 2 units of type 0 with cost 1, 3 for a total cost of 4.
         - 2 units of type 1 with cost 3, 4 for a total cost of 7.
         - 1 unit of type 2 that cost 2.
      - 4 + 7 + 2 = 13. 

## Solutions
- Solution 1: Priority queue

  **Python**
  ```python
  from heapq import heappush, heappop, heapify

  def solve(a, b, m):
      h = [(e, i, 1) for i, e in enumerate(a)]
      heapify(h)
      res = 0
      while m:
          e, i, j = heappop(h)
          res += e
          heappush(h, (a[i]+j*b[i],i,j+1))
          m -= 1
      return res

  print(solve([1,3,2],[2,1,3],5))
  ```

- 很简单， 用pq，构造一个 itemcost class存放 acost, bcost, count  ， pq的c‍‌‌‌‌‍‌‍‌‌‍‍‍‍‍‍‍‍‍‌‌ompator就是 按照itemcost 的 总cost和排序。
- 不知道为什么有个case 没过，因为是re turn long，应该是溢出问题（但是debug时没发现溢出） 所有输入最大值100000.很难溢出

## Reference
- https://leetcode.com/discuss/interview-question/3816550/Amazon-or-OA-or-Find-minimum-cost-to-purchase-m-items

![114825jrkk3k1g7ni2ykyy](https://github.com/wuyichen24/coding-interview/assets/8989447/c544d6bf-6ec8-4911-a946-dd5aefc31557)
![114823nyi4bt92t24gnbd2](https://github.com/wuyichen24/coding-interview/assets/8989447/d13ccd6d-df0b-4585-85f0-345f0615216c)
![114821ydw0p07jssqo50zs](https://github.com/wuyichen24/coding-interview/assets/8989447/87b09b8c-1300-4dea-9842-a23188c999c4)


