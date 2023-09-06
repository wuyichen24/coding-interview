# Interval

## Concept
- Use 2-element integers array to represent the start time and the end time.
   - `[start, end]`

## Common operations
- **Determine if there's an overlap between two intervals**
   - Given 2 intervals `[S1, E1]` and `[S2, E2]` (`S1 < S2`), the condition for having overlapping is:
      - `E1 > S2`
    
     ![Intervals_Check_Overlapping drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/08ca2643-c947-483b-af44-01d963c35e4b)

- **Finding the overlap**
   - Given 2 intervals `[S1, E1]` and `[S2, E2]`, the formula for calculating the overlapping range is:
      - `Given 2 intervals `[max(S1, S2), min(E1, E2)].`

     ![Interval_Calculate_Overlapping drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/e83eec45-4a1b-425f-9a99-f18c2153603c)

## Strategies
- Preprocessing
   - Consider to sort intervals by either start time or end time.
   - Consider to split intervals into an array of start time and an array of end time. Sort them repectively.
- After sorting the inverals, go through sorted intervals.

## Problem
- Meeting Rooms
   - [Meeting Rooms](../problems/intervals/Meeting_Rooms.md)
   - [Meeting Rooms II](../problems/intervals/Meeting_Rooms_II.md)
- [Merge Intervals](../problems/intervals/Merge_Intervals.md)
- [Non-overlapping Intervals](../problems/intervals/Non_Overlapping_Intervals.md)
- [Intersect 2 Interval Lists](../problems/intervals/Intersect_2_Interval_Lists.md)
- [Merge K Interval Lists And Find Gaps](../problems/intervals/Merge_K_Interval_Lists_And_Find_Gaps.md)
