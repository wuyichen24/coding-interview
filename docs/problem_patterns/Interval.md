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
- **Check properties**
   - [Check Intervals Have Overlapping](../problems/intervals/Check_Intervals_Have_Overlapping.md) (LC252 Meeting Rooms)
   - [Maximum Number of Overlapping Intervals](../problems/intervals/Maximum_Number_Of_Overlapping_Intervals.md) (LC253 Meeting Rooms II)
- **Manipulation**
   - *Deoverlapping*
      - [Merge Overlapping Intervals](../problems/intervals/Merge_Overlapping_Intervals.md) (LC56)
      - [Remove Intervals for Non-overlapping](../problems/intervals/Remove_Intervals_Non_Overlapping.md) (LC435)
   - *Merge*
      - [Merge K Interval Lists And Find Gaps](..//problems/intervals/Merge_K_Interval_Lists_And_Find_Gaps.md) (LC759)
   - *Intersect*
      - [Intersect 2 Interval Lists](../problems/intervals/Intersect_2_Interval_Lists.md) (LC986) (Find all intersections)
      - [Intersect 2 Interval Lists to Find First Intersection](../problems/intervals/Intersect_2_Interval_Lists_To_Find_First_Intersection.md) (LC1229) (Find first intersection with duration limitation)
   - *Remove*
      - [Remove Covered Intervals](../problems/intervals/Remove_Covered_Intervals.md)
- **Other**
   - 57 Insert Interval
   - 352 Data Stream as Disjoint Intervals
   - 370 Range Addition (medium)
   - 452 Minimum Number of Arrows to Burst Balloons (medium)
   - 646 Maximum Length of Pair Chain
   - 731 My Calendar II (medium)
   - 732 My Calendar III (medium)
   - 1272 Remove Interval
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
