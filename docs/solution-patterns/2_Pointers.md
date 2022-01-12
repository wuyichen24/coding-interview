# 2 Pointers

- [**Concepts**](#concepts)
- [**Variations**](#variations)
   - [Fast slow pointers](#fast-slow-pointers)
   - [Brute force pointers](#brute-force-pointers)
   - [Meet pointers](#meet-pointers)
   - [Neighbor pointers](#neighbor-pointers)
   - [Constant distance pointer](#constant-distance-pointer)
- [**References**](#references)

## Concepts
- Use 2 pointers to access different elements for comparision and data manipulation.

## Variations
### Fast slow pointers
- Concepts
   - One pointer moves fast and another pointer moves slow.
- Variations
   - Variation 1: The fast pointer moves two steps while the slow pointer moves one step.
   - Variation 2: One pointer traverses and another pointer marks the end of a meaningful sequence.
- Problems can use this patterns
   | Problem | Variation |
   | ----- | -----|
   | <ul><li>Find the middle element of a linked list</ul> | Variation 1 |
   | <ul><li>[Remove Duplicates from Sorted Array](../problems/array/Remove_Duplicates_From_Sorted_Array.md)<li>[Remove All Occurrences of Value from Array](../problems/array/Remove_All_Occurrences_Of_Value_From_Array.md)</ul> | Variation 2 |

### Brute force pointers
- Concepts
   - One pointer moves one step each time while another pointer points to the element next to the first pointer and move to the end.

### Meet pointers
- Concepts
   - Each pointer start from each end and they move toward each other.

### Neighbor pointers
- Concepts
   - 2 pointers next to each other and move in the same pace from one end to another.

### Constant distance pointer
- Concepts
   - 2 pointers keep a constant distance and move in the same pace from one end to another.
- Problems can use this patterns
   - Get the Nth node from the tail of a linked list.

## References
- https://smootok.com/problem-solving-pattern-in-programming/
- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
- https://emre.me/coding-patterns/fast-slow-pointers/
