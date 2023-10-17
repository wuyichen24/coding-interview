# Server Channel Quality

## Problem
Amazon's AWS provides fast and efficient server solutions. The developers want to stress-test the quality of the servers' channels. The must ensure the following:
- Each of the packets must be sent via a single channel.
- Each of the channel must transfer at least one packet.

The *quality* of the transfer for a channel is defined by the median of the sizes of all the data packets sent through that channel.

**Note**: The median of an array is the middle element if the array is sorted in non-decreasing order. If the number of elements in the array is even, the median is the average of the two middle elements.

Find the maximum possible sum of the qualities of all channels. If the answer is a floating-point value round it to the next higher integer.

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
  
