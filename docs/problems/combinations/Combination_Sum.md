# Combination Sum

## Alias
- Leetcode (39): [Subsets II](https://leetcode.com/problems/subsets-ii/)

## Problem
Given an array of **distinct** integers candidates and a target integer target, return a list of all **unique combinations** of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The **same** number may be chosen from candidates an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

## Examples
- Example 1
   - Input
     ```
     candidates = [2,3,6,7]
     target = 7
     ```
   - Output
     ```
     [[2,2,3],[7]]
     ```
- Example 2
   - Input
     ```
     candidates = [2,3,5]
     target = 8
     ```
   - Output
     ```
     [[2,2,2,2],[2,3,3],[3,5]]
     ```
- Example 3
   - Input
     ```
     candidates = [2]
     target = 1
     ```
   - Output
     ```
     []
     ```

## Solutions
- Solution 1: Backtracking

  ```java
  public List<List<Integer>> combinationSum(int[] candidates, int target) {
      List<List<Integer>> resultList = new ArrayList<>();
      Arrays.sort(candidates);
      backtrack(resultList, new ArrayList<>(), candidates, target, 0);
      return resultList;
  }

  private void backtrack(List<List<Integer>> resultList, List<Integer> tempList, int[] nums, int remain, int start){
      if(remain < 0) return;
      else if(remain == 0) resultList.add(new ArrayList<>(tempList));
      else { 
          for(int i = start; i < nums.length; i++){
              tempList.add(nums[i]);
              backtrack(resultList, tempList, nums, remain - nums[i], i); // not i + 1 because we can reuse same elements
              tempList.remove(tempList.size() - 1);
          }
      }
  }
  ```
