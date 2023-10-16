# Total Execution Time

## Problem
Amazon Web Service (AWS) has several processors for executing processes scheduled on its servers.

There are *n* processes to be executed, where the *i<sup>th</sup>* process takes *execution[i]* amount of time to execute. Two processes are cohesive if and only if their original execution times are equal. When a process with execution time *execution[i]* is executed, it takes *execution[i]* time to completed and simultaneously reduces the execution time of all its cohesive processes to *ceil(execution[i]/2)*.

Given the execution time of *n* processes, find the total amount of time the processor takes to executes all the processes if you execute the processes in the given order, i.e. from left to right.

### Notes
- The ceil() function returns the smallest integer that is bigger or equal to its argument. For example, *ceil(1.1) = 2, ceil(2.5) = 3, ceil(5) = 5, etc.*
- If the execution time of some process *i* is reduced and becomes equal to the execution time of any other process *j*, then the two process *i* and *j* are not considered *cohesive*.

### Example
The number of processes is *n = 6*, and their execution times are *execution = [5,5,3,5,3]*.

Their execution can be virsualized as follows where each set of cohesive processes is marked with a different color.

<img width="616" alt="Screenshot 2023-10-15 at 9 56 19 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/04b675f4-d429-4afd-ac6d-614e582773d0">

### Function Description
`long findTotalExecutionTime(List<Integer> execution)`

## Solutions
- Solution 1
   - Idea
      - Use a hashmap to remember cohesive sets
         - Key: Execution time
         - Value: A list of indexes which execution time are same.
       

  ```java
  public class TotalExecutionTime {

      public static void main(String[] args) {
          List<Integer> execution = new ArrayList<>();
          execution.add(5);
          execution.add(5);
          execution.add(3);
          execution.add(6);
          execution.add(5);
          execution.add(3);
          System.out.println(findTotalExecutionTime2(execution));
      }
    
      static long findTotalExecutionTime2(List<Integer> execution) {
          int[] exeArr = convertListToArray(execution);

          Map<Integer, List<Integer>> cohesives = new HashMap<>();
          for (int i = 0; i < exeArr.length; i++) {
              cohesives.putIfAbsent(exeArr[i], new ArrayList<>());
              cohesives.get(exeArr[i]).add(i);
          }

          long time = 0;
          for (int i = 0; i < exeArr.length; i++) {
              time = time + exeArr[i];
              int current = exeArr[i];
              int newValue = ceil((double)current/2.0);
              if (cohesives.get(execution.get(i)) != null) {                                        // use original value (not reduced value) to find the cohesive set
                  for (int index : cohesives.getOrDefault(execution.get(i), new ArrayList<>())) {   // reduce all the members in the cohesive set
                      exeArr[index] = newValue;
                  }
              }
          }
          return time;
      }

      static int[] convertListToArray(List<Integer> list) {
          int[] array = new int[list.size()];

          for (int i = 0; i < list.size(); i++) {
              array[i] = list.get(i);
          }

          return array;
      }

      static int ceil(int n) {
          if(n%2 == 0)
              return n/2;

          return n/2 + 1;
      }
  }
  ```
![174135h5fo35dg4i23c2n3](https://github.com/wuyichen24/coding-interview/assets/8989447/8bc787c8-d1d5-451e-9365-1fe146a92c32)
![image](https://github.com/wuyichen24/coding-interview/assets/8989447/a88531e1-465d-4851-b5c1-6574715b7a25)
![image (1)](https://github.com/wuyichen24/coding-interview/assets/8989447/8d4aa86d-8ab2-40cc-84a0-b6d61d451209)


