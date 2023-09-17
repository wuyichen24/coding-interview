# Monotonic Stack

## Concepts
- Monotonic stack is a special stack which all the elements are either always increasing or decreasing.
- If the new element will violate the rule (either always increasing or decreasing) after pushing it into the monotonic stack, you need to pop the top element off the stack until pushing the new element no longer breaks the rule.

## Template
```java
public static void monoStack(List<Integer> insertEntries) {
    ArrayList<Integer> stack;
    for (int entry : insertEntries) {
        // The monotonic property can only break if and only if the container
        // is not empty and the last item, compared to the entry, breaks
        // the property. While that is true, we pop the top item.
        while (!stack.isEmpty() && entry > stack.peek()) {
            stack.pop();
            // Do something with the popped item here
        }
        stack.push(entry);
    }
}
```

## Strategies
- Use monotonic stack to store the index of the element instead of value. so we could calculate the distance between the current element and the element at top of the stack.

## Complexity
- Time complexity: *O(n)*

## Problems can use this pattern
- [Trap Rain Water](../problems/other/Trap_Rain_Water.md)
- 496 Next Greater Element I
- 503 Next Greater Element II
- 739 Daily Temperatures
