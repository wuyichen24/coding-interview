# Array

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
- The problem is related to calculate the sum of sub-array, consider to use prefix sum array.

## Common topics
- Subarray (a contiguous non-empty sequence)
   - [Count Sub-array Sum Equals K](../../problems/array/Count_Sub_Array_Sum_Equals_K.md)
   - [Maximum Subarray](../../problems/array/Maximum_Subarray.md)
- Find missing
   - [Get Kth Missing Positive Number](../../problems/array/Get_Kth_Missing_Positive_Number.md)
   - [Find Missing Ranges from Array](../../problems/array/Find_Missing_Ranges_from_Array.md)
- Array math
   - [Product of Array Except Self](../../problems/array/Product_Of_Array_Except_Self.md)
   - [Calculate Dot Product of 2 Arrays](../../problems/array/Calculate_Dot_Product_Of_2_Arrays.md)
   - [Get Equilibrium Index from Array](../../problems/array/Get_Equilibrium_Index_From_Array.md)
- Frequency
   - [Get Top K Frequent Elements from Array](../../problems/array/Get_Top_K_Frequent_Elements_From_Array.md)
   - [Get Top K Frequent Words from Array](../../problems/array/Get_Top_K_Frequent_Words_From_Array.md)
- Inversion
   - [Inversions](../../problems/array/Inversions.md)
   - 1395 Count Number of Teams
- Combinations and permutations
   - Combinations
      - [Subsets (inputs are unique)](../../problems/array/combinations/Subsets.md)
      - [Subsets II (inputs may contain duplicates)](../../problems/array/combinations/Subsets_II.md)
   - Combination sum
      - [Combination Sum (element can be reused)](../../problems/array/combinations/Combination_Sum.md)
      - [Combination Sum II (element can only be used once)](../../problems/array/combinations/Combination_Sum_II.md)
   - Permutations
      - [Permutations (inputs are unique)](../../problems/array/permutations/Permutations.md)
      - [Permutations II (inputs may contain duplicates)](../../problems/array/permutations/Permutations_II.md)
- Manipulation
   - Merge
      - [Merge 2 Sorted Arrays](../../problems/array/Merge_2_Sorted_Arrays.md)
   - Split
      - [Optimizing Box Weights](../../problems/array/Optimizing_Box_Weights.md)
   - Remove
      - [Remove All Occurrences of Value from Array](problems/array/Remove_All_Occurrences_Of_Value_From_Array.md)
      - [Remove Duplicates from Sorted Array](problems/array/Remove_Duplicates_From_Sorted_Array.md)
- Jump game
   - [Jump Game](../../problems/array/jump_game/Jump_Game.md)
   - [Jump Game II](../../problems/array/jump_game/Jump_Game_II.md)
   - [Jump Game IV](../../problems/array/jump_game/Jump_Game_IV.md)
- Other
   
