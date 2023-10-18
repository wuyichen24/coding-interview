# Max Number with Add And Remove

## Problem
The question was to find maximum number upto that index in an array where an array will be given of posiive and negative numbers , positive means that the number has been added and negative means number has been remove for eg

[6,1,8,-8,6,-6,-6] should output [6,6,8,6,6,6,1]
- index 0 : 6 is maximum number appearing once
- index 1 : still 6
- index 2 : 8
- index 3 : 6 because -8 means 8 has been removed from valid list
- index 4 : 6 now 6 added twice
- index 5 : 6 after -6 still one 6 is left
- index 6 : 1 after -6 both 6 are removed and 1 is left as max

## Solutions
```java
public class MaxNumberWithAddAndRemove {
    public static void main(String[] args) {
        int[] array = new int[]{6,1,8,-8,6,-6,-6};
        int[] result = findMaxNumber(array);
        for (int number : result) {
            System.out.println(number);
        }
    }

    static int[] findMaxNumber(int[] array) {
        TreeMap<Integer, Integer> treeMap = new TreeMap<>();

        int[] results = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            int current = array[i];

            // update treeMap
            if (current > 0) {
                treeMap.put(current, treeMap.getOrDefault(current, 0) + 1);
            } else if (treeMap.get(-current) != null) {
                treeMap.put(-current, treeMap.get(-current) - 1);
                if (treeMap.get(-current) == 0) {
                    treeMap.remove(-current);
                }
            }

            results[i] = treeMap.lastKey();
        }

        return results;
    }
}
```
