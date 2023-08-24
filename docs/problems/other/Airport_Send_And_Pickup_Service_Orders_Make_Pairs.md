# Airport send and pickup service orders make pairs

## Problem
One online ride hailing company can fulfil many airport transfer orders every day. In order to reduce the time and cost without orders, the company pairs pickup and send orders, if they have the same car type and same airport. 

Besides the arrival time of airport send order must be earlier than the send time of airport pickup order. Then they will assign the pair orders to one driver. 

How to match the airport send and pickup orders, with the sum of car idle time minimized? 

Tips: 
1. This is a maximum weight matching problem.
2. weigh(i,j)=idle duration=the book pickup timestamp of pickup service order - the book arrival time of send service order 

Example: 
```
# list item: order_id,car_type,book_timeoirport_name
Input: send_orders=[
    "s_order1,1,2022-02-11 12:00:00,airport1",
    "s_order2,1,2022-02-11 12:30:00,airport1",
    "s_order3,I,2022-02-11 12:10:00,airport1",
    "s_order4,2,2022-02-12 12:30:00,airport2",
    "s_order5,2,2022-02-12 18:27:00,airport2",
    "s_order6,1,2022-02-12 19:30:00,airport2",
    "s_order7,2,2022-02-12 20:15:00,airport2"
] 
pickup_orders=[
    "p_order1,1,2022-02-11 12:20:00,airport1",
    "p_order2,2,2022-02-11 14:30:00,airport1",
    "p_order3,2,2022-02-12 12:45:00,airport2",
    "p_order4,2,2022-02-12 12:15:00,airport2",
    "p_order5,2,2022-02-12 19:20:00,airport2",
    "p_order6,2,2022-02-12 20:30:00,airport2",
    "p_order7,2,2022-02-12 20:00:00,airport2"
]

Output:
pair_orders=[
    "s_order3->p_order1",
    "s_order4->p_order3",
    "s_order5->p_order5",
    "s_order6->p_order7",
    "s_order7->p_order6"
] 
single_orders=[
    's_order1',
    's order2',
    'p_order2',
    'p_order4' 
]
```

## Function
```java
public class Solution {
    public static void main(String args[]) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    }
}
```
