# Permutations

## Alias
- Leetcode (46): [Permutations](https://leetcode.com/problems/permutations/)

## Problem
Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

## Examples
- Example 1
   - Input
     ```
     [1,2,3]
     ```
   - Output
     ```
     [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
     ```

## Solutions
- Solution 1: Backtracking

  ```java
  public List<List<Integer>> permute(int[] nums) {
      List<List<Integer>> list = new ArrayList<>();
      backtrack(list, new ArrayList<>(), nums);
      return list;
  }

  private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums){
      if(tempList.size() == nums.length){
          list.add(new ArrayList<>(tempList));
      } else{
          for(int i = 0; i < nums.length; i++){ 
              if(tempList.contains(nums[i])) continue;   // skip duplicates
              tempList.add(nums[i]);
              backtrack(list, tempList, nums);
              tempList.remove(tempList.size() - 1);
          }
      }
  }
  ```
