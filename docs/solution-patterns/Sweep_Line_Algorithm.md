# Sweep Line Algorithm

## Concept
- We don't need to check any point, we only need to focus on the start and end of intervals

## Procedure
- Split the start point and end point of each intervals (also use additional information to identify start points and end points).
- Sort the points based on position and types of points (or store points into priority queue).
- Scan the points by order.

## Complexity

## Problems can use this pattern
- Find intersections of intervals

## Problems
- 1D
   - [Maximum Number of Overlapped Intervals](../problems/intervals/Maximum_Number_Of_Overlapped_Intervals.md)
   - [Merge Intervals](../problems/intervals/Merge_Intervals.md) (LC56)
   - 57 Insert Interval
   - Meeting Rooms
      - [Meeting Rooms](../problems/intervals/Meeting_Rooms.md) (LC252)
      - [Meeting Rooms II](../problems/intervals/Meeting_Rooms_II.md) (LC253)
   - 352 Data Stream as Disjoint Intervals
   - 370 Range Addition (medium)
   - [Non-overlapping Intervals](../problems/intervals/Non_Overlapping_Intervals.md) (LC435)
   - 452 Minimum Number of Arrows to Burst Balloons (medium)
   - 646 Maximum Length of Pair Chain
   - 731 My Calendar II (medium)
   - 732 My Calendar III (medium)
   - [Merge K Interval Lists And Find Gaps](..//problems/intervals/Merge_K_Interval_Lists_And_Find_Gaps.md) (LC759)
   - [Intersect 2 Interval Lists](../problems/intervals/Intersect_2_Interval_Lists.md) (LC986)
   - 1229 Meeting Scheduler
   - 1272 Remove Interval
   - 1288 Remove Covered Intervals
   - 1326 Minimum Number of Taps to Open to Water a Garden (hard)
   - 1353 Maximum Number of Events That Can Be Attended
   - 1589 Maximum Sum Obtained of Any Permutation (medium)
   - 1674 Minimum Moves to Make Array Complementary (medium)
   - 1851 Minimum Interval to Include Each Query (hard)
   - 1854 Maximum Population Year (easy)
   - 1893 Check if All the Integers in a Range Are Covered (easy)
   - 1943 Describe the Painting (medium)
   - 2158 Amount of New Area Painted Each Day (hard)
   - 2237 Count Positions on Street With Required Brightness (medium)
   - 2251 Number of Flowers in Full Bloom (hard)
   - 2848 Points That Intersect With Cars (easy)
- 2D
   - 218 The Skyline Problem
   - 391 Perfect Rectangle
   - 850 Rectangle Area II


## References
- [LeetCode Discussion | Line Sweep Algorithms](https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms)
- [labuladong 的算法笔记 | 贪心算法之区间调度问题](https://labuladong.github.io/algo/di-er-zhan-a01c6/tan-xin-le-9bedf/tan-xin-su-c41e8/)
- [labuladong 的算法笔记 | 扫描线技巧：安排会议室](https://labuladong.github.io/algo/di-er-zhan-a01c6/tan-xin-le-9bedf/sao-miao-x-2e810/)
- [Youtube | 扫描线 - 古城算法](https://www.youtube.com/watch?v=ihf8JjQdta0&ab_channel=%E5%8F%A4%E5%9F%8E%E7%AE%97%E6%B3%95)
