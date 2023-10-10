# Array

- [**Concepts**](#concepts)
- [**Basic operations**](#basic-operations)
   - [Manipulation](#manipulation)
      - [Swap 2 elements](#swap-2-elements)
      - [Reverse sub-array](#reverse-sub-array)
- [**Strategies**](#strategies)
- [**Common topics**](#common-topics)

## Concepts
- **Subarray**
   - A subarray is a contiguous non-empty sequence of elements within an array.
- **Subsequence**
   - A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
- **Subset**
   - A subset of an array is a selection of elements (possibly none) of the array.
   - Subset is also known as "power set".
- **Permutation**
   - A specific arrangement or ordering of the elements of a set.

## Basic operations
### Manipulation
#### Swap 2 elements
```
void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
```
#### Reverse sub-array
```
void reverse(int[] nums, int i, int j) {
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}
```

## Strategies
- The problem is related to calculate the sum of subarray, consider to use prefix sum array.
- If you see any question has the word "sorted", consider using binary search.

## Common topics
[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)

- **Subarray (a contiguous non-empty sequence)**
   - [Count Sub-array Sum Equals K](../../problems/array/Count_Sub_Array_Sum_Equals_K.md)
   - [Maximum Sum Subarray](../../problems/array/Maximum_Sum_Subarray.md)
   - [Minimum Size Subarray Sum](../../problems/array/Minimum_Size_Subarray_Sum.md)
   - [Maximum Product Subarray](../../problems/array/Maximum_Product_Subarray.md)
- **Subsequence**
   - [Longest Increasing Subsequence](../../problems/string/Longest_Increasing_Subsequence.md)
- **Subset**
   - [Longest Consecutive Sequence](../../problems/array/Longest_Consecutive_Sequence.md)
- **Search**
   - *Find missing*
      - [Get Kth Missing Positive Number](../../problems/array/Get_Kth_Missing_Positive_Number.md)
      - [Find Missing Ranges from Array](../../problems/array/Find_Missing_Ranges_from_Array.md)
   - [Search in Rotated Sorted Array](../../problems/array/Search_In_Rotated_Sorted_Array.md)
- **Access**
   - [Kth Largest Element in an Array](../../problems/array/Kth_Largest_Element_In_Array.md)
- **Math**
   - *Product*
      - [Product of Array Except Self](../../problems/array/Product_Of_Array_Except_Self.md)
      - [Maximum Product Subarray](../../problems/array/Maximum_Product_Subarray.md)
      - [Calculate Dot Product of 2 Arrays](../../problems/array/Calculate_Dot_Product_Of_2_Arrays.md)
   - *Sum*
      - [Get Equilibrium Index from Array](../../problems/array/Get_Equilibrium_Index_From_Array.md)
      - [Calculate Range Sum in Array](../../problems/array/Calculate_Range_Sum_In_Array.md)
   - *Add*
      - 66 Plus One
      - 989 Add to Array-Form of Integer
- **Frequency**
   - [Get Top K Frequent Elements from Array](../../problems/array/Get_Top_K_Frequent_Elements_From_Array.md)
   - [Get Top K Frequent Words from Array](../../problems/array/Get_Top_K_Frequent_Words_From_Array.md)
   - Single number
      - [Find Element Only Appear Once](../../problems/array/single_number/Find_Element_Only_Appear_Once.md)
      - [Find Element Only Appear Once II](../../problems/array/single_number/Find_Element_Only_Appear_Once_II.md)
- **Inversion**
   - [Inversions](../../problems/array/Inversions.md)
   - 1395 Count Number of Teams
- **Combinations and permutations**
   - *Combinations*
      - [Subsets (inputs are unique)](../../problems/array/combinations/Subsets.md)
      - [Subsets II (inputs may contain duplicates)](../../problems/array/combinations/Subsets_II.md)
   - *Combination sum*
      - [Combination Sum (element can be reused)](../../problems/array/combinations/Combination_Sum.md)
      - [Combination Sum II (element can only be used once)](../../problems/array/combinations/Combination_Sum_II.md)
   - *Permutations*
      - [Permutations (inputs are unique)](../../problems/array/permutations/Permutations.md)
      - [Permutations II (inputs may contain duplicates)](../../problems/array/permutations/Permutations_II.md)
- **Manipulation**
   - *Merge*
      - [Merge 2 Sorted Arrays](../../problems/array/Merge_2_Sorted_Arrays.md)
   - *Move*
      - [Move Zeroes to End of Array](../../problems/array/Move_Zeroes_To_End_Of_Array.md)
   - *Split*
      - [Optimizing Box Weights](../../problems/array/Optimizing_Box_Weights.md)
   - *Remove*
      - [Remove All Occurrences of Value from Array](../../problems/array/Remove_All_Occurrences_Of_Value_From_Array.md)
      - [Remove Duplicates from Sorted Array](../../problems/array/Remove_Duplicates_From_Sorted_Array.md)
   - *Reverse*
      - [Reverse Char Array](../../problems/array/Reverse_Char_Array.md)
   - *Rotate*
      - 189 Rotate Array
- **nSum**
   - [Two Sum of Unsorted Array](../../problems/array/n_sum/Two_Sum_Of_Unsorted_Array.md)
   - [Two Sum of Sorted Array](../../problems/array/n_sum/Two_Sum_Of_Sorted_Array.md)
   - [3 Sum to 0](../../problems/array/n_sum/3_Sum_To_0.md)
- **Jump game**
   - [Jump Game](../../problems/array/jump_game/Jump_Game.md)
   - [Jump Game II](../../problems/array/jump_game/Jump_Game_II.md)
   - [Jump Game IV](../../problems/array/jump_game/Jump_Game_IV.md)
- **House Robber**
   - [House Robber](../../problems/array/house_robber/House_Robber.md)
   - [House Robber II](../../problems/array/house_robber/House_Robber_II.md)
- **Buy and sell stock**
   - [Best Time to Buy and Sell Stock In 1 Transaction](../../problems/array/stock/Best_Time_To_Buy_And_Sell_Stock_In_1_Transaction.md)
   - [Best Time to Buy and Sell Stock In Multiple Transactions](../../problems/array/stock/Best_Time_To_Buy_And_Sell_Stock_In_Multiple_Transactions.md)
   - 123 Best Time to Buy and Sell Stock III
   - 188 Best Time to Buy and Sell Stock IV
   - 309 Best Time to Buy and Sell Stock with Cooldown
   - 714 Best Time to Buy and Sell Stock with Transaction Fee
- **Other**
   
[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)
