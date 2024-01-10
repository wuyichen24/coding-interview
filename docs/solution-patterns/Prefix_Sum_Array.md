# Prefix Sum Array

- [**Concepts**](#concepts)
- [**Benefit**](#benefit)
- [**Construction**](#construction)
- [**How to use**](#how-to-use)
- [**Complexity**](#complexity)
- [**Problems can use this pattern**](#problems-can-use-this-pattern)
- [**Problems**](#problems)
- [**References**](#references)

## Concepts
- Each element in a prefix sum array is the sum of all the elements which is in and before the current element of the input array.
- `prefixSum[i] = num[0] + num[1] + ... + num[i] = prefixSum [i-1] + num[i]`

  ![Untitled (3)](https://user-images.githubusercontent.com/8989447/115646395-4b51f080-a2df-11eb-9fd4-21315870d887.png)

## Benefit
- Reduce the complexity of algorithm from O(n<sup>2</sup>) to O(n).

## Construction
```
void buildPrefixSumArray(int[] nums) {
    int[] prefixSum[] = new int[nums.length];
    prefixSum[0] = nums[0];
    for (int i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }
}
```

## How to use
- To calculate the sum of the  range `[i, j]` of the input array
   - `prefixSum[j] - prefixSum[i-1]`

## Complexity
- Time complexity
   - O(n)
- Space complexity
   - O(n)

## Problems can use this pattern
- Calculate the sum of a range/subarray of an array.
- Get a random candidate with different weight.

## Problems
- Calculat the sum of a range/subarray of an array
   - [Get Equilibrium Index from Array](../problems/array/Get_Equilibrium_Index_From_Array.md)
   - [Count Sub-array Sum Equals K](../problems/array/Count_Sub_Array_Sum_Equals_K.md)
   - [Check Sub-array Sum Is Multiple of K](../problems/array/Check_Sub_Array_Sum_Is_Multiple_Of_K.md)
   - [Calculate Range Sum in Array](../problems/array/Calculate_Range_Sum_In_Array.md)
   - [Calculate Range Sum in 2D Array](../problems/array/2d/array/Calculate_Range_Sum_In_2D_Array.md) (apply prefix sum array to 2D array)
   - [Get All Paths Whose Weight Sum Equal to Target Value](../problems/tree/path/Get_All_Paths_Whose_Weight_Sum_Equal_To_Target_Value.md) (apply prefix sum array to binary tree)
- Get a random candidate with different weight
   - [Generate Random Index with Weight](../problems/array/Generate_Random_Index_With_Weight.md)

## References
- https://en.wikipedia.org/wiki/Prefix_sum
- https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/
