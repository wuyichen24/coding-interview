# Others

## Longest substring
第二题没见过，给一个string，和一个prohibited words的list，判断这个string里不包含prohibited words的substring的最大长度是多少‍‌‌‌‌‍‌‍‌‌‍‍‍‍‍‍‍‍‍‌‌。

## Book and chapters
### Version 1
很多书， 每本书有一些chapters， 第i本书 有book[i] 个chapter。 你每天可以读x个chapter， 但你每天只能读一本书。 问你给定一定天数， 最小的x值是多少。 无法读完则返回-1. 书必须按照book[0], book[1], book[2] 的顺序读。
- input: int  book[], int days
- return: int x

### Version 2
就是给个 书的页数 list， 一个最大的允许读完天数，让你求每天最少读几页，可以在最大天数内读完。
每一天， 你只能读一本书的某些页数，直至读完。 很简单，二分查找就好了，类似于https://leetcode.com/problems/cutting-ribbons/

## Price
### Version 1
两个一样size的array a,b, 用来计算商品价格， 你想要买m件商品。 每次购买第i种商品的花费是 a[i] + (j-1) * b[i]. j是当前购买的第几件 i 商品。 求买m件商品的最小花费。
- e.g a[1, 2, 3] b[3,2,1]
- 第一件买 index 0 需要花 1 + （1-1）*3 = 1
- 第二件再买 index 0 则需要花 1 + （2-1）*3 = 4
- 如果第二件买 index 1 ， 需要 2 + （1-1）* 2 = 2
- input: int ‍‌‌‌‌‍‌‍‌‌‍‍‍‍‍‍‍‍‍‌‌a[], int b[], int m
- return: int cost

### Version 2
每个 ith  item的花费是a[i] + (j-1)*b[i], a and b are 2 input arrays, j is purchased number of ith item.
- so if you 1个    0th item, the cost would be a[0], if you buy 2 个 0th item， cost would be a[0] + b[0]...以此类推。。
- 很简单， 用pq，构造一个 itemcost class存放 acost, bcost, count  ， pq的c‍‌‌‌‌‍‌‍‌‌‍‍‍‍‍‍‍‍‍‌‌ompator就是 按照itemcost 的 总cost和排序。
- 不知道为什么有个case 没过，因为是re turn long，应该是溢出问题（但是debug时没发现溢出） 所有输入最大值100000.很难溢出。。
