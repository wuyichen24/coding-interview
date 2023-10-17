# Get Priority After Execution

## Problem
Several processes are scheduled for execution on an AWS server. On one server, n processes are scheduled where the ith process is assigned a priority of priority[i]. the processes are placed sequentially in a queue and are numbered 1,2,...n. The server schedules the processes per the following algorithm.

- Step 1. If finds the maximum priority shared by at least 2 processes. Let that be denoted by p. If there is no such priority or p = 0, the algorithm is terminated
- Step 2. Otherwise, select the two of the processes with the lowest indexes and priority p, and call them process1 and process2.
- Step 3. The server executes process1 and removes it from the queue.
- Step 4. To avoid starvation, it reduces the priority of process2 to the floor(p/2).
- Step 5. Start again from step 1.

Given the initial priority of the processes, find the final priority of the processes which remain after the algorithm terminates.

**Note** that relative to the arrangements of the remaining processes in the queue remains the same, only their priorities change.

### Example

The number of processes n=6 and their priorities = [6,6,6,1,2,2]
The Scheduler works as follows::
- p=6 at indices 1,2 and 3. The indices used are process1 = 1, process2 = 2. Remove process1 and update the priority of process 2 to floor(6/2) = 3.
- p=2 and process1 = 4, process2 = 5. So, update the priority = floor(2/2) = 1 of process2 and remove process1. The current set of process priorities, priority = [3,6,1,1]
- p=1 and process1 =3, process2 = 4. So, update the priority =floor(1/2) = 0 of process1 and remove process1. The current set of process priorities, priority =[3,6,0].

There are no more matching process priorities, so the algorithm ends.
So, the priorities of the remaining processes are priority = [3,6,0] .

### Function description:

Complete the function getPrioritiesAfterExecution, 

it has the following parameters: int priority[n]: the initial priorities of processes function returns: int[]: the final priorities of the remaining processes.


## Solutions
```java
package book.file.amazon;

import java.util.ArrayList;
import java.util.List;

public class GetPriorityAfterExecution {
    public static List<Integer> getPrioritiesAfterExecution(List<Integer> priority) {
        int n = priority.size();
        List<Integer> result = new ArrayList<>();

        while (true) {
            // Find the maximum priority shared by at least 2 processes
            int maxPriority = getMaxPriority(priority);
            int countMaxPriority = countPriority(priority, maxPriority);

            // If there is no such priority or p = 0, terminate the algorithm
            if (countMaxPriority < 2 || maxPriority == 0) {
                break;
            }

            // Find the two processes with the lowest indexes and priority p
            int process1 = -1;
            int process2 = -1;

            for (int i = 0; i < n; i++) {
                if (priority.get(i) == maxPriority) {
                    if (process1 == -1) {
                        process1 = i;
                    } else if (process2 == -1) {
                        process2 = i;
                        break;
                    }
                }
            }

            // Execute process1 and remove it from the queue
            result.add(maxPriority);
            priority.set(process1, 0);

            // Reduce the priority of process2 to floor(p/2)
            priority.set(process2, maxPriority / 2);
        }

        // Remove the processes with priority 0
        for (int i = 0; i < n; i++) {
            if (priority.get(i) > 0) {
                result.add(priority.get(i));
            }
        }
        System.out.println(result);

        return result;
    }

    private static int getMaxPriority(List<Integer> priority) {
        int max = Integer.MIN_VALUE;
        for (int p : priority) {
            max = Math.max(max, p);
        }
        return max;
    }

    private static int countPriority(List<Integer> priority, int p) {
        int count = 0;
        for (int value : priority) {
            if (value == p) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        List<Integer> initialPriorities = new ArrayList<>();
        initialPriorities.add(6);
        initialPriorities.add(6);
        initialPriorities.add(6);
        initialPriorities.add(1);
        initialPriorities.add(2);
        initialPriorities.add(2);

        List<Integer> finalPriorities = getPrioritiesAfterExecution(initialPriorities);
    }
}
```

## References
- https://leetcode.com/discuss/interview-question/4147887/AMAZON-OA-oror-AWS
