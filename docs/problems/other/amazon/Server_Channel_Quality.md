# Server Channel Quality

## Problem
Amazon's AWS provides fast and efficient server solutions. The developers want to stress-test the quality of the servers' channels. The must ensure the following:
- Each of the packets must be sent via a single channel.
- Each of the channel must transfer at least one packet.

The *quality* of the transfer for a channel is defined by the median of the sizes of all the data packets sent through that channel.

**Note**: The median of an array is the middle element if the array is sorted in non-decreasing order. If the number of elements in the array is even, the median is the average of the two middle elements.

Find the maximum possible sum of the qualities of all channels. If the answer is a floating-point value round it to the next higher integer.

## Examples
- Example 1
   - Input
     ```
     input = [1,2,3,4,5]
     channels = 2
     ```
   - Output
     ```
     8
     ```
   - Explanation
      - So answer is maximun Qulity achivable is '8' with configuration 1,2,3,4 on channel 1 and 5 on channel 2

     | Channel 1 | Channel 2 | Median |
     |---|---|---|
     | 1 | 2,3,4,5 | 1 + (3+4)/2 = 1 + 3.5 = 4.5 = 5 (rounded) |
     | 1,2 | 3,4,5 | (1+2)/2 + 4 =1.5+4 = 5.5 =6 |
     | 1,2,3 | 4,5 | 2 + (4+5)/2 = 6.5 = 7 |
     | **1,2,3,4** | **5** |(2+3)/2 + 5 =2.5 + 5 = 7.5 = **8** |
     
- Example 2
   - Input
     ```
     input = [1,2,3,4,5]
     channels = 3
     ```
   - Output
     ```
     11
     ```
   - Explanation
      - So maximum quality attainable is 11 with configuration 1,2,3 on channel1, 4 on channel 2 and 5 on channel 3.
 
     | Channel 1 | Channel 2 | Channel 3 | Median |
     |---|---|---|---|
     | 1 | 2 | 3,4,5 | 1+2+4 = 7 |
     | 1 | 2,3 | 4,5 | 1+2.5+4.5 = 8 |
     | 1 | 2,3,4 | 5 | 1+3+5 = 9 |
     | 1,2 | 3 | 4,5 | 1.5+ 3 + 4.5 = 9 |
     | 1,2 | 3,4 | 5 | 1.5 + 3.5 + 5 = 10 |
     | **1,2,3** | **4** | **5** | 2 + 4 + 5 = **11** |

## Solutions
- Solution 1: Sorting

  ```java
  public class ChannelQuality {
      public static void main(String[] args) {
          List<Integer> list = Arrays.asList(1,2,3,4,5);

          System.out.println(Math.round(highestQualityWithSorting(list, 3, 0, list.size()-1)));
      }

      public static double highestQualityWithSorting(List<Integer> list, int ch, int start, int end) {
          int length = end - start+1;

          Collections.sort(list);

          if(ch==1) {
              return calculateMediun(list, start, end);
          }

          // n-ch+1 (not adding 1 because index is zero based)
          int traverseTill = (length - ch);

          double curMedian = calculateMediun(list, 0,traverseTill);

          while(++traverseTill<length) {
              curMedian+=list.get(traverseTill);
          }
          return curMedian;
      }

      private static double calculateMediun(List<Integer> list, int start, int end) {
          int length = end - start+1;
          int mid = (start + end)/2;

          if(length%2==0) {
              return ((double)list.get(mid)+list.get(mid+1))/2;
          }
          return list.get(mid);
      }
  }
  ```
  
## References
- https://leetcode.com/discuss/interview-question/1940397/Amazon-Online-Assessment-Find-the-Maximum-Quality-for-given-input-streamlist-over-n-channels.

![133204o1zmc8qzm0coijcq](https://github.com/wuyichen24/coding-interview/assets/8989447/b0feedf7-a161-49ff-8def-8324ec59ad5d)
