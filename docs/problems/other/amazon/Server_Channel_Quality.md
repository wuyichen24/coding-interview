# Server Channel

## Problem
Amazon's AWS provides fast and efficient server solutions. The developers want to stress-test the quality of the servers' channels. The must ensure the following:
- Each of the packets must be sent via a single channel.
- Each of the channel must transfer at least one packet.

The *quality* of the transfer for a channel is defined by the median of the sizes of all the data packets sent through that channel.

**Note**: The median of an array is the middle element if the array is sorted in non-decreasing order. If the number of elements in the array is even, the median is the average of the two middle elements.

Find the maximum possible sum of the qualities of all channels. If the answer is a floating-point value round it to the next higher integer.

## Solutions
