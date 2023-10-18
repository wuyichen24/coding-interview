# Peak Number

## Problem
A k-Spike is an element that satisfies both the following conditions:
- There are at least k elements from indices (0, i-1) that are less than prices[i].
- There are at least k elements from indices (i+1, n-1) that are less than prices[i].

Count the number of k-Spikes in the given array.

### Example

prices = [1, 2, 8, 5, 3, 4], k = 2

There are 2 k-Spikes:
- 8 at index 2 has (1, 2) to the left and (5, 3, 4) to the right that are less than 8.
- 5 at index 3 has (1, 2) to the left and (3, 4) to the right that are less than 5.

The answer is 2.

### Function Description

Complete the function **countkSpikes**

**countkSpikes** has the following parameters:
- int prices[n]:  stock prices over time
- int k: the required number of lesser elements left and right of an index to form a k-Spike
Returns

### Returns
int: the number of k-Spikes.

## Examples
- Example 1
   - Input
     ```
     prices = [1, 3, 2, 5, 4]
     k = 1
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The value 3 is a k-Spike based on 1 to the left and 2 to the right.
      - The value 5 is also a k-Spike based on (1, 3, 2) to the left and (4) to the right.
- Example 2
   - Input
     ```
     prices = [1, 2, 8, 3, 7, 5, 4]
     k = 2
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - 8 is a k-Spike, left = (1, 2), right = (3, 7, 5, 4).
      - 7 is a k-Spike, left = (1, 2, 3), right = ( 5, 4).
- Example 3
   - Input
     ```
     prices = [1, 2, 8, 3, 7, 4, 6, 5]
     k = 3
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - 7 is a k-Spike, left = [1, 2, 3] and right = [4, 6, 5]

## Solutions
- Solution 1: Priority queue

```java
public class PeakNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 8, 3, 7, 4, 6, 5};
        System.out.println(kBigIndices(arr, 3));
    }

    public static int kBigIndices(int[] nums, int k) {
        int n = nums.length;
        boolean[] prefix = new boolean[n];
        Queue<Integer> pq = new PriorityQueue(Collections.reverseOrder());
        for (int i = 0; i < n; ++i) {
            if (pq.size() == k && pq.peek() < nums[i]) prefix[i] = true;
            pq.add(nums[i]);
            if (pq.size() > k) pq.poll();
        }
        int ans = 0;
        pq.clear();
        for (int i = n-1; i >= 0; --i) {
            if (pq.size() == k && pq.peek() < nums[i] && prefix[i]) ++ans;
            pq.add(nums[i]);
            if (pq.size() > k) pq.poll();
        }
        return ans;
    }
}
```

- Solution 2: Bit operation
```
public class Main {
    private static int get(int[] v, int x) {
        int r = 0;
        for (; x > 0; r += v[x], x -= lowbit(x))
        ;
        return r;
    }
    
    private static void update(int[] v, int x, int y) {
        for (; x < v.length; v[x] += y, x += lowbit(x))
        ;
    }
    
    private static int lowbit(int x) {
        return x & (-x);
    }
    
    public static int countKSpikes(int[] prices, int k) {
        Set<Integer> all = new TreeSet<>();
        all.addAll(Arrays.stream(prices).boxed().toList());
        int m = 0;
        Map<Integer, Integer> map = new TreeMap<>();
        for (int x : all) {
            map.put(x, ++m);
        }
        int[] v = new int[m + 1];
        final int n = prices.length;
        boolean[] ok = new boolean[n];
        
        int r = 0;
        for (int i = 0; i < n; ++i) {
            int x = map.get(prices[i]);
            ok[i] = get(v, x - 1) >= k;
            update(v, x, 1);
        }
        
        v = new int[m + 1];
        for (int i = n - 1; i >= 0; --i) {
            int x = map.get(prices[i]);
            r += ok[i] && get(v, x - 1) >= k ? 1 : 0;
            update(v, x, 1);
        }
        return r;
    }
    
    public static void main(String[] args) {
        System.out.println(countKSpikes(new int[]{1, 2, 8, 5, 3, 4}, 2));
        System.out.println(countKSpikes(new int[]{1,3,2,5,4}, 1));
        System.out.println(countKSpikes(new int[]{1,2,8,3, 7, 5,4}, 2));
        System.out.println(countKSpikes(new int[]{1,2,8,3, 7, 4, 6, 5}, 3));
        System.out.println(countKSpikes(new int[]{1, 1, 2, 3, 0, 0, 0}, 3));
        System.out.println(countKSpikes(new int[]{1, 2, 1, 8, 8, 5, 3, 4}, 2));
    }
}
```
## Reference
- Same question: https://leetcode.com/problems/count-the-number-of-k-big-indices/
- https://leetcode.com/discuss/interview-question/3928710/Amazon-or-OA-2023-or-Count-k-spikes-of-stock-prices
- https://leetcode.com/discuss/interview-question/4061311/Spike-and-datacenters-OA-amazon
- https://leetcode.com/discuss/interview-question/3882632/Amazon-SDE-k-spikes-in-the-stock-price-array
