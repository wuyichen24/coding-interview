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
- Use [Sweep line algorithm](../solution-patterns/Sweep_Line_Algorithm.md)

## Problems
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
