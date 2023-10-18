# Sum of Unique Values In All Subarray

## Problem
- int[] arr = [1,2,3,2]
- Given an array and you need to find the number of unique elements in each subarray of the give array.

### Example
Here the subarrays are :
- [1] - > 1 unique value
- [1,2] -> 2 unique value
- [1,2,3] -> 3 unique values
- [1,2,3,2]-> 3 unique values
- [2] -> 1 unique value
- [2,3] -> 2 unique value
- [2,3,2] -> 2 unique value
- [3] -> 1 unique value
- [3,2] -> 2 unique value
- [2] -> 1 unique value

these are the subarrays and the total sum of all unique values is :18

### Examples
```java
public class SumOfUniqueValuesInAllPossibleSubarray {
    public static long approach1(int[] arr) {
        int n = arr.length;
        long ans = 0;
        for (int i = 0; i < n; i++) {
            HashSet<Integer> set = new HashSet<>();
            for (int j = i; j < n; j++) {
                set.add(arr[j]);
                ans += set.size();
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2};
        System.out.println(approach1(arr));
    }
}
```

```java
public class SumOfUniqueValuesInAllPossibleSubarray2 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2};
        System.out.println(calculateInversions(arr));
    }

    public static long calculateInversions(int[] arr) {
        int n = arr.length;
        HashMap<Integer, Node> positionMap = new HashMap<>();
        long inversionCount = 0;

        for (int i = 0; i < n; i++) {
            int lastPosition = positionMap.getOrDefault(arr[i], new Node()).lastPosition;
            inversionCount += (i - lastPosition) * (n - i);
            positionMap.put(arr[i], new Node(i));
        }

        return inversionCount;
    }
}

class Node {
    int lastPosition;

    public Node() {
        this.lastPosition = -1;
    }

    public Node(int lastPosition) {
        this.lastPosition = lastPosition;
    }
}
```

## References
- https://leetcode.com/discuss/interview-question/4012150/Amazon-Recent-Online-Assesment
