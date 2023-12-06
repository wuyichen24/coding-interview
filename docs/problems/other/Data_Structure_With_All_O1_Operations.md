# Data Structure with All Operations in O(1)

## Alias
- Leetcode (380): [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)

## Problem
- Implement a data structure and let the following operations under O(1) complexity:
    - `insert(int val)`: Inserts an value to the end of the data structure is not present.
    - `remove(int val)`: Removes the value if present.
    - `search(int val)`: Returns the index of the value if present. If not present, return `-1`.
    - `getRandom()`: Get random value from the data structure.
 
## Solutions
- **Solution 1: Hashmap + ArrayList**
   - Idea
      - Use Hashmap to store the mapping from the value to the index of that value in the ArrayList.
      - Use ArrayList to store the value too.
      - For `remove()`, swap the value needs to be removed with the last element at the end of ArrayList, and then remove the last element.

```java
class DataStructure {
    List<Integer>         list;
    Map<Integer, Integer> map;

    public RandomizedSet() {
        list = new ArrayList<>();
        map  = new HashMap<>();
    }
    
    public void insert(int val) {
        if (map.containsKey(val)) {
            return;
        }

        map.put(val, nums.size());
        list.add(val);
    }

    public void remove(int val) {
        if (!map.containsKey(val)) {
            return false;
        }

        int index = map.get(val);                       // get the index of the val
        map.put(list.get(list.size() - 1), index);      // update the index of the last element as the index of the value
        Collections.swap(list, index, list.size() - 1); // swap the value between the val and the last element
        list.remove(nums.size() - 1);                   // remove the last element from list
        map.remove(val);                         // remove the last element from map
    }

    public void search(int val) {
        if (!map.containsKey(val)) {
            return -1;
        }
        return map.get(val);
    }

    public int getRandom() {
        int randomIndex = (int) (Math.random() * nums.size());
        return list.get(randomIndex);
    }
}
```
  
