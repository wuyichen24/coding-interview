# Java Coding

## Overview
This page is to document some coding standard operations.
- [Basic Types](#basic-types)
   - [String](#string)
   - [Character](#character)
   - [Integer](#integer)
- [Data Structures](#data-structure)
   - [Array](#array)
   - [List](#list)
   - [Map](#map)
   - [Stack](#stack)
   - [Queue](#queue)
   - [PriorityQueue](#priorityqueue)
   - [TreeMap](#treemap)
- [Util](#util)
   - [Arrays](#arrays)
   - [Collections](#collections)
   - [Math](#math)
- [Type Conversions](#type-conversions)
- [Arithmetic Operations](#arithmetic-operations)
   - [Division](#division)
   - [Modulo (get the remainder after division)](#modulo-get-the-remainder-after-division)
- [Custom Sorting](#custom-sorting)
- [Random Number](#random-number)

## Basic Types
### String
- **Traverse**
   - `substring()`
     ```java
     for (int i = 0; i < str.length(); i++) {
         str.substring(i, i+1);
     }
     ```
   - `charAt()`
     ```java
     for (int i = 0; i < str.length(); i++) {
         str.charAt(i);
     }
     ```
- **Delete**
   - General strategies
      - StringBuilder is more convenient to do deleting operation. 
   - Delete by char
     ```java
     int index = sb.lastIndexOf("x");   // delete the last occurrence of char
     sb.deleteCharAt(index);
     int index = sb.indexOf("x");       // delete the first occurrence of char
     sb.deleteCharAt(index);
     ```
- **Get prefix**
   - If you use substring to get prefix, make sure the criteria is `i <= str.length()` and the initialization is `int i = 1`.
  ```java
  for (int i = 1; i <= str.length(); i++) {
      String prefix = str.substring(0, i);
  }
  ```
  
### Character
- **Check a character is a letter or number**
  ```java
  Character.isDigit(string.charAt(index));
  Character.isLetter(string.charAt(index));
  Character.isAlphabetic(string.charAt(index));
  ```
  > NOTE: Letter doesn't contain '+' and '-'
  ```java
  Character.isLetter('+');   // return false
  Character.isLetter('-');   // return false
  ```

### Integer
- **MAX value and MIN value**
  The int type in Java can be used to represent any whole number from -2147483648 to 2147483647 (**NOT** symmetric).
  ```java
  Integer.MAX_VALUE = 2147483647
  Integer.MIN_VALUE = -2147483648
  ```

---

## Data Structures
### Array
- **1-D array**
   - Initialization
     ```java
     int[] array1 = new int[10];
     int[] array2 = new int[] {10,20,30,40,50,60};      // Intialize 1-D array with values
     ```
- **2-D array**
   - Initialization
     ```java
     int[][] array1 = new int[10][9];
     int[][] array2 = new int[10][];                    // OK
     int[][] array3 = {{1, 2, 3}, {4, 5, 6}};           // Intialize 1-D array with values
     ```
   - Traversal
     ```java
     int[][] array = new int[3][3]; 
     for (int i = 0; i < array.length; i++) { 
         for (int j = 0; j < array[i].length; j++) { 
             array[i][j] = i + j; 
         } 
     }
     ```
   - Assign by row
     ```java
     int[][] array = new int[3][3];
     for (int i = 0; i < array.length; i++) { 
         for (int j = 0; j < array[i].length; j++) { 
             array[i] = new int[] {10,20,30,40,50,60};
         } 
     }
     ```  
- **Arrays**
  ```java
  List<Integer> list = Arrays.asList(1,2,3,4);         // Initialize a list from array
  ```

### List
- **Initialization**
   - **Initialize a list from array**
     ```java
     Integer[] array = {1, 2, 3, 4, 5};
     List<Integer> list = Arrays.asList(array);
     ```
   - **Initialize a list of lists**
     ```java
     List<List<Integer>> list = new ArrayList<>();
     ```
   - **Initialize a linked list**
     ```java
     LinkedList<String> linkedList = new LinkedList<>();
     ```
- **Sorting**
   - **Sort a list in ascending order**
     ```java
     Collections.sort(list);
     ```
     > NOTE: This function will not return a sorted list. It will sort the `list` in-place.
   - **Sort a list in descending order**
     ```java
     Collections.sort(list);
     Collections.reverse(list);
     ```
- **Common functions for list**
  | Function | Description |
  | ---- | ---- |
  | `sublist(i,j)` | Get the sub-list `[i,j-1]` of the existing list. |
  | `disjoint(list1, list2)` | Return true if there is no common elements in both lists. | 
  
### Map
- **Initialize a map with keys and values**
  ```java
  Map<String, String> map = new HashMap<String, String>() {
      {
          put("2", "abc");
          put("3", "def");
          put("4", "ghi");
          put("5", "jkl");
      }
  };
  ```
- **Common functions for stack**
  | Function | Description |
  | ---- | ---- |
  | `get` | Get the value by key. |
  | `getOrDefault(key, defaultValue)` | Get the value by key. If key is not in the map, return the default the value. |
  | `put` | Add or update the key-value pair into map. |
  | `keySet` | Get all the keys. |
  | `values` | Get all the values. |
- **Convert all the values into a list**
  ```java
  Map<Integer, String> map = new HashMap<>();
  List<String> list = new ArrayList<>(map.values());
  ```

### Stack
- **Initialize a stack**
  ```java
  Stack<Integer> stack = new Stack<>();
  ```

- **Common functions for stack**

  | Function | Description |
  | ---- | ---- |
  | `push` | Push an element on the top of the stack. |
  | `pop` | Remove and return the top element of the stack. An `EmptyStackException` exception is thrown if we call `pop()` when the invoking stack is empty. |
  | `peek` | Return the element on the top of the stack, but does not remove it. |
  | `empty` | Return `true` if nothing is on the top of the stack. Else, returns `false`. |
  | `search` | It determines whether an object exists in the stack. If the element is found, it returns the position of the element from the top of the stack. Else, it returns -1. |

- **Use `pop()` with caution**
   - Before you call `pop()`, you need to check the stack is empty or not.

### Queue
- **Initialize a queue**
  ```java
  Queue<Integer> queue = new LinkedList<>();
  ```

- **Common functions for queue**

  | Functions | Description |
  | ---- | ---- |
  | `add` | Add element at the tail of queue. |
  | `isEmpty` | Check the queue is empty or not. |
  | `peek` | Return (but NOT remove) the element at the head element of queue. Return `null` if the queue is empty. |
  | `remove` | Remove and returns the head element of the queue. An `NoSuchElementException` exception is thrown if we call `remove()` when the invoking queue is empty. |
  | `poll` | Remove and returns the head element of the queue. Return `null` if the queue is empty. |

- **No `empty()` function for queue**
   - Use `peek()` to check the queue is empty or not.

### PriorityQueue
- Concept
   - Sorted on ascending order automatically.

     ![Untitled (6)](https://user-images.githubusercontent.com/8989447/115980643-88bab600-a54b-11eb-9a2e-b9ab805da8e2.png)

- **Initialize a priority queue**
  ```java
  Queue<Integer> queue = new PriorityQueue<>();
  ```
- **Initialize a max priority queue**
  ```java
  Queue<Integer> queue = new PriorityQueue<>(10, Collections.reverseOrder());
  ```
- **Common functions for priority queue**
  | Functions | Description |
  | ---- | ---- |
  | `add` | Add one element. |
  | `contains` | Returns true if this queue contains the specified element. |
  | `isEmpty` | Check the queue is empty or not. |
  | `peek` | Return (but NOT remove) the head (smallest) element. Return `null` if the queue is empty. |
  | `poll` | Removes and returns the head (smallest) element. Return `null` if the queue is empty. |

- **No `empty()` function for priority queue**
   - Use `peek()` to check the priority queue is empty or not.

### TreeMap
- Concept
   - Sorted by key in ascending order automatically.
- **Initialize a tree map**
  ```java
  TreeMap<Integer, Integer> sortedMap = new TreeMap<>();
  ```
- **Common functions for tree map**

  | Functions | Description |
  | ---- | ---- |
  | `put` | Add one key-value pair. |
  | `firstKey` | Get the key of the first entry (smallest in key) from tree map. |
  | `firstEntry` | Get the first entry (smallest in key) from tree map. |
  | `lastKey` | Get the key of the last entry (greatest in key) from tree map. |
  | `lastEntry` | Get the last entry (greatest in key) from tree map. |

## Util
### Arrays
  | Function | Description |
  | ---- | ---- |
  | `sort(array)` | Sort the elements in ascending order. |
  | `sort(array, Collections.reverseOrder())` | Sort the elements in descending order. |
  | `copyOfRange(array, i, j)` | Get the sub-array [i, j-1]. |
  | `fill(array, value)` | Fill all the elements in the array by that value. |

- `Arrays.sort` (`String[] arr`)
  ```java
  Arrays.sort(arr, (a, b)->a.length() - b.length());
  Arrays.sort(arr, (a, b)->{ return a.length() - b.length(); });
  ```
- Time complexity: *O(nlogn)*
  
### Collections
  | Function | Description |
  | ---- | ---- |
  | `sort()` | Sort the elements in the collection (Default is ascending order). |
  | `max()` | Get the maximum element in the collection. |
  | `min()` | Get the minimum element in the collection. |
  | `reverse()` | Reverse the order of the elements (Use this function to get the descending order). |

- `Collections.sort` (`List<int[]> list`)
  ```java
  Collections.sort(list, (a, b) -> {
      int cmp = Integer.compare(a[0], b[0]);
      if (cmp != 0) {
          return cmp;
      }
      return Integer.compare(a[1], b[1]);
  });
  ```

### Math
  | Function | Description |
  |----|----|
  | `max()` | Get the max value among 2 values. |
  | `min()` | Get the min value among 2 values. |
  
---

## Type Conversions
- **`String` to `char` array**
  ```java
  String str = "abcdefg";
  char[] chars = str.toCharArray();
  ```

- **`char` array to `String`**
  ```java
  char[] chars = {'a', 'b', 'c', 'd'}
  String str1 = new String(chars);          // solution 1
  String str2 = String.valueOf(chars);      // solution 2
  String str3 = String.copyValueOf(chars);  // solution 3
  ```

- **`int` to `char` array**
  ```java
  int i = 1234;
  char[] chars = ("" + i).toCharArray();
  ```

- **`char` to `int`**
  ```java
  char c = '1';
  int i = Character.getNumericValue(c);
  ```

- **`int` to `double`**
  ```java
  int i = 1234;
  double d1 = Double.valueOf(i);   // solution 1
  double d2 = new Double(i);       // solution 2
  ```

- **`int` to `String`**
  ```java
  int i = 1234;
  String str1 = String.valueOf(i);         // solution 1
  String str2 = new Integer(i).toString(); // solution 2
  ```

- **`String` to `int`**
  ```java
  String str = "1234";
  int i = Integer.parseInt(str);
  ```
> NOTE: When converting a string to int, need to consider overflow.
  ```java
  int i = 0;
  String str = "999999999999999999999999999999999999999999";
  try {
     i = Integer.parseInt(str);
  } catch (Exception e) {
      /* some special handling */
  }
  ```

- **array to `List`**
  ```java
  int[] ints = new int[] {1, 2, 3, 4};
  List<Integer> intList = Arrays.asList(ints);
  ```

- **`List` to array**
  ```java
  Integer[] array = new Integer[list.size()];
  list.toArray(array);
  ```

---

## Arithmetic Operations
### Division
- The same divisor in different types causes different results.
  ```
  3 / 2 = 1
  3 / 2.0 = 1.5
  3 / 4 = 0
  ```

### Modulo (get the remainder after division)
- Clear the difference between division and modulo.
  ```
  999 / 100 = 9
  999 / 1000 = 0
  999 % 1000 = 999
  999 % 100 = 99
  ```

--- 

## Custom Sorting
- Class
  ```java
  public class Student implements Comparable<Student> {
      public int score;
    
      public int compareTo(Student s) {
          return this.score.compareTo(s.score);        // Order by ascending order of score
          return this.score - s.score;                 // Order by ascending order of score
          
          return -this.score.compareTo(s.score);       // Order by descending order of score
          return s.score - this.score;                 // Order by descending order of score
      }
  }
  ```
- Sort
  ```
  List<Student> students;
  Collections.sort(students);
  ```

---

## Random Number
- Get a random integer between [0, max]
  ```java
  Random ran = new Random();
  int randomInt = ran.nextInt(max + 1);
  ```
- Get a random integer between [min, max]
  ```java
  Random ran = new Random();
  int randomInt = min + ran.nextInt(max - min + 1);
  ```
- Get a random double between `[0,1)`
  ```java
  double randomDouble = Math.random();
  ```
- Get a random double between `[0,max)`
  ```java
  double randomDouble = max * Math.random();
  ```
