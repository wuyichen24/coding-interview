# Diwali Lights

## Problem
Alex and Rome have bought a new LED light set for Diwali containing N LEDS, However, it is broken, On careful observation. Alex found out that the ith LED turns on at time Li anf turns off at time Ri. These times are calculated as the time after turining on Power supply. Rome considers her house will lit at a particular moment if K LEDS are lit at that moment. They only want to hang K such bulbs such that there is at least some moment when they will all light up. You have to find number of ways of choosing K such lamps. Give the answer mod 1^9+7

## Example
- Example 1
   - Input
     ```
     N = 3
     K = 1
     1 1
     2 2
     3 3
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - We have to find only one light such that it lights up at some point. We can see that choosing any light will do. So, there are 3 ways
- Example 2
   - Input
     ```
     N = 3
     K = 2
     1 1
     2 2
     3 3
     ```
   - Output
     ```
     0
     ```
   - Explanation
     ```
     The first light is lit at 1, the second at 2, and the third at 3. So, there is no way to choose 2 lights and let them lit at the same time.
     ```
- Example 3
   - Input
     ```
     N = 5
     K = 2
     1 3
     2 4
     3 5
     4 6
     5 7
     ```
   - Output
     ```
     7
     ```
   - Explanation
      - There are 7 ways:
         - Light 0 and Light 1
         - Light 1 and Light 2
         - Light 2 and Light 3
         - Light 3 and Light 4
         - Light 0 and Light 2
         - Light 1 and Light 3
         - Light 2 and Light 4
- Example 4
   - Input
   - Output
   - Explanation

## Solution
