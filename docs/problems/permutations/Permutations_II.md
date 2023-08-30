# Permutations II

## Alias
- Leetcode (47): [Permutations II](https://leetcode.com/problems/permutations-ii/)

## Problem
Given a collection of numbers, `nums`, that might contain duplicates, return all possible unique permutations in any order.

## Examples
- Example 1
   - Input
     ```
     [1,1,2]
     ```
   - Output
     ```
     [[1,1,2],[1,2,1],[2,1,1]]
     ```
- Example 2
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
  public List<List<Integer>> permuteUnique(int[] nums) {
      List<List<Integer>> resultList = new ArrayList<>();
      Arrays.sort(nums);
      boolean [] used = new boolean[nums.length]      // this array is to mark which element has been used
      backtrack(resultList, new ArrayList<>(), nums, used);
      return resultList;
  }

  private void backtrack(List<List<Integer>> resultList, List<Integer> tempList, int [] nums, boolean [] used){
      if(tempList.size() == nums.length){
          resultList.add(new ArrayList<>(tempList));
      } else{
          for(int i = 0; i < nums.length; i++){
              if(used[i] || i > 0 && nums[i] == nums[i-1] && !used[i - 1]) continue;
              used[i] = true; 
              tempList.add(nums[i]);
              backtrack(resultList, tempList, nums, used);
              used[i] = false; 
              tempList.remove(tempList.size() - 1);
          }
      }
  }
  ```
