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
