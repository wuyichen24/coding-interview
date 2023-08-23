# Maximum Subarray

53

## Solutions
- Solution 1: Kadane's Algorithm
   - Idea:
      - Start traversing your array keep each element in the sum and every time keep the max of currSum and prevSum.
But the catch here is that if at any point sum becomes negative then no point keeping it because 0 is obviously greater than negative, so just make your sum 0.

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        int max = Integer.MIN_VALUE, sum = 0;
        
        for(int i=0;i<n;i++){
            sum += nums[i];
            max = Math.max(sum,max);
            
            if(sum<0) sum = 0;
        }
        
        return max;
    }
}
```

- Solution 2: My solution
```java
class Solution {
    public int maxSubArray(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        
        int maxSum = Integer.MIN_VALUE;
        int curSum = Integer.MIN_VALUE;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > curSum) {
                if (curSum < 0) {
                    curSum = nums[i];
                } else {
                    curSum = curSum + nums[i];
                }
            } else {
                curSum = curSum + nums[i];
            }
            
            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }
        
        return maxSum;
    }
}
```
