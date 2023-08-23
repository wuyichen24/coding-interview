# Reformat Date

## Solutions
- Solution 1
```java
class Solution {
    public String reformatDate(String date) {
        Map<String,String> m = new HashMap<>();
        m.put("Jan","01"); m.put("Feb","02"); m.put("Mar","03"); m.put("Apr","04");
        m.put("May","05"); m.put("Jun","06"); m.put("Jul","07"); m.put("Aug","08");
        m.put("Sep","09"); m.put("Oct","10"); m.put("Nov","11"); m.put("Dec","12");

        StringBuilder sb = new StringBuilder();
        if(date.length()==13){
            return sb.append(date.substring(9))
            .append("-")
            .append(m.get(date.substring(5,8)))
            .append("-").append(date.substring(0,2))
            .toString();
        }
        return sb.append(date.substring(8))
        .append("-")
        .append(m.get(date.substring(4,7)))
        .append("-0")
        .append(date.substring(0,1))
        .toString();
    }
}
```
