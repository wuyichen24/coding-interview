# Problems And Solutions Quick Table

- [Array](#array)
- [String](#string)
- [Linked List](#linked-list)
- [Binary Tree](#binary-tree)

## Array
| Problem Name | Pattern | Solutions | Edge Cases |
|----|----|----|----|
| Get Equilibrium Index from Array | | <li>Prefix sum array | <li>EI can be the first or the last element (sum=0) |
| Generate Random Index with Weight | | <li>Prefix sum array | |
| Count Sub-array Sum Equals K | | <li>Prefix sum array | |
| Merge Interval | | | <li>Left touch, right touch and full cover |
| Generate All Product of Array except Current Element | | | <li>Number of zero: 1 or multiple |
| Calculate Dot Product of 2 Arrays | | Use HashMap to store non-0 values only | |
| Check Sub-array Sum Is Multiple of K | | <li>Prefix sum array | |
| Generate Random Index of Target Number | | <li>Reservoir sampling | |

## String
| Problem Name | Pattern | Solutions | Edge Cases |
|----|----|----|----|
| Is Palindrome String | | <li>2 meet pointers | |
| Is Palindrome String by Removing One Char | | <li>2 meet pointers + Greedy (Until l != r, check both [l, r-1] and [l+1, r] are palindrome or not) | |
| Is Valid Parentheses | | <li>Stack | |
| Generate All Combinations of Parentheses | Cases: <li>(n-1)<li>1(n-1),2(n-2),...,(n-1)n | | |
| Remove Minimum Parentheses to Make Parentheses Valid | | <li>Two pass + StringBuilder (1st pass: Remove extra ) at the beginning, 2nd pass: Remove extra ( at the end) | |

## Linked List
| Problem Name | Pattern | Solutions | Edge Cases |
|----|----|----|----|
| Traverse in reversed order (Basic operations) | | <li>Recursion | |
| Get the Kth node from tail (Basic operations) | | <li>Recursion<li>2 pointers with K distance | <li>K can greater the size. |
| Get Middle Node from List | | <li>Fast slow pointers | | 
| Is Palindrome List | | <li>Fast slow pointers + Stack | |
| Remove Duplicates from List | | <li>2 brute force pointers | |
| Remove Duplicates from Sorted List | | <li>1 pointer | |
| Remove Node from List without Accessing Previous Node | | <li>Swap with next node and delete next node | |
| Remove Nodes from List by Value | | <li>1 pointer | |
| Reverse List | | <li>3 neighbor pointers | |
| Reverse Sub-list | | <li>Separate and reverse the sub-list, and then merge | |
| Rotate List Right | <li>Right rotate a linked list K positions, is same as appending the last K nodes from tail to the head. | <li>Separate and concatenate the last K nodes | <li>K can greater the size. |
  
## Binary Tree
| Problem Name | Pattern | Solutions | Edge Cases |
|----|----|----|----|
| Get Height from Binary Tree | | <li>Recursion<ul><ul><li>Max(leftH,rightH)+1</ul></ul> | |
| Get Longest Path Length from Binary Tree | | <li>Recursion<ul><ul><li>Path=Max(leftPath,rightPath)+1<li>Diameter=Max(diameter,leftPath+rightPath)</ul></ul> | |
| Get Lowest Common Ancestor from Binary Tree | | <li>Recursion<ul><ul><li>current is n1 or n2(up-down relationship), so current is LCA<li>n1,n2 in different sub-tree, so current is LCA<li>Both n1,n2 in left sub-tree, go to left<li>Both n1,n2 in right sub-tree, go to right</ul></ul> | |
| Get Num of Univalue Subtrees from Binary Tree | | <li>Recursion | |
| Is Binary Search Tree | <li>In-order traverse BST is ascending order.<li>Reversed in-order traverse BST is descending order. | <li>Recursion: In-order traverse and check it is ascending order or not.<li>Recursion: Valid range. | |
| Is Balanced Binary Tree | | <li>Recursion<ul><ul><li>Get Height<li>Use (-1) to indicate the sub-tree is not balanced.</ul></ul> | |
| Is Symmetric Binary Tree | | <li>isMirror(root.left,root.right) | |
| Is Is Same Binary Trees | | <li>Recursion<ul><ul><li>(t1.v==t2.v) && isSame(t1.l,t2.l) && isSame(t1.r,t2.r)</ul></ul> | |
| Is Mirror Binary Trees | | <li>Recursion<ul><ul><li>(t1.v==t2.v) && isMirror(t1.l,t2.r) && isMirror(t1.r,t2.l)</ul></ul> | |
| Is Sub Binary Trees | | <li>Recursion<ul><ul><li>s.v==t.v && isSameTree(s,t)<li>isSameTree(s.l,t) or isSameTree(s.r,t)</ul></ul> | |
| Balance Binary Search Tree | | <li>Convert tree into list and rebuild BST from list | |
| Convert Binary Search Tree to Sorted Doubly Linked List | | <li>In-order traverse<li>Record last visit node<li>last.right=curr,node.left = last | |
| [Get All Distance K Nodes from Target Node in Binary Tree](../problems/tree/Get_All_Distance_K_Nodes_From_Target_Node_In_Binary_Tree.md) | Distance K nodes in following cases<li>Child nodes<li>Parent node<li>Nodes in another branch | <li>Depth-first search (Recursion) | |
| [Get Right Side View of Binary Tree](../problems/tree/Get_Right_Side_View_Of_Binary_Tree.md) | | <li>Breadth-first search (Queue)<li>Use null to separate each level<li>If current node is null, so last node is right view |
