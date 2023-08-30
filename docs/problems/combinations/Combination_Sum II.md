# Combination Sum II

## Alias
- Leetcode (40): [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

## Problem
Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

## Examples
- Example 1
   - Input
     ```
     candidates = [10,1,2,7,6,1,5]
     target = 8
     ```
   - Output
     ```
     [[1,1,6],[1,2,5],[1,7],[2,6]]
     ```
- Example 2
   - Input
     ```
     candidates = [2,5,2,1,2]
     target = 5
     ```
   - Output
     ```
     [[1,2,2],[5]]
     ```

## Solutions
- Solution 1: Backtracking

  ```java
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
      List<List<Integer>> resultList = new ArrayList<>();
      Arrays.sort(candidates);
      backtrack(resultList, new ArrayList<>(), candidates, target, 0);
      return resultList;
  }

  private void backtrack(List<List<Integer>> resultList, List<Integer> tempList, int [] nums, int remain, int start){
      if(remain < 0) return;
      else if(remain == 0) resultList.add(new ArrayList<>(tempList));
      else {
          for(int i = start; i < nums.length; i++) {
              if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates
              tempList.add(nums[i]);
              backtrack(resultList, tempList, nums, remain - nums[i], i + 1);
              tempList.remove(tempList.size() - 1); 
          }
      }
  }
  ```
