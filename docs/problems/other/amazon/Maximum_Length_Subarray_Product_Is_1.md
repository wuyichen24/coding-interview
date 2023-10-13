# Maximum length of subarray product equal to 1

## Problem
input: `[1,-1,-1,1,1,-1]`
output: 5 
explanation: `[1,-1,-1,1,1]`

## Solutions
```java
public static int get(int[] input){
    int pre1 = 0;
    int pre2 = 0;
    int result = 0;

    for(int i: input){
        if(i > 0){
            pre1++;
            if(pre2 > 0)
                pre2++;
        } else{
            int temp = pre1;
            if(pre2 > 0){
                pre1 = pre2 + 1;
            }else
                pre1 = 0;

            pre2 = temp + 1;
        }
        result = Math.max(result, pre1);
    }
    return result;
}
```
