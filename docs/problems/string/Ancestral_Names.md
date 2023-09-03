# Ancestral Names

## Problem
In some cultures, children are named after ancestors and there is a number following which represents how many ancestors have shared that name. They are oftern shown as *Roman Numerals*.

In Roman numerals, a value is not repeated more than three times. At that point, smaller value precedes a larger value to indicate subtraction. For example, the letter I represents the number *1*, and V represents *5*. Reaon through the formation of *1* to *10* below, and see how it is applied in the following lines.

- *I, II, III, V, VI, VII, VIII, IX,* and *X* represent *1* through *10*.
- *XX, XXX, XL, and L* are *20, 30, 40,* and *50*.
- For any other two-digit number *< 50*, concatenate the Roman numeral(s) that represent its multiples of ten with the Roman numeral(s) for its value *< 10*. For example, *43* is *40 + 3 = 'XL' + 'III' = 'XLIII'*

Given a list of strings comprised of a name and a Roman numeral, sort the list first by name, then by the decimal value of the Roman numeral.

### Function Description
Complete the function *sortRoman* in the editor below.

*sortRoman* has the following parameter:

*names[n]*: an array of strings comprised of names and roman numerals.

### Return
*string[n]*: an array of strings sorted first by given name, the by ordinal.

### Constraints
- *1 <= n <= 50*
- Each names[i] is a single string composed of 2 space-separated values: *givenName* and *romanNumeral*.
- *romanNumeral* represents a number between 1 and 50, inclusive.
- *1 <= | givenName| <= 20*
- Each *givenName* starts with an uppercase letter *ascii[A-Z]* which is followed by lowercase letters *ascii[a-z]*.
- There is a speace between *givenName* and *romanNumeral*.
- Each *names[i]* is distinct.

## Examples
- Example 1
   - Input
     ```
     names = ['Steven XL', 'Steven XVI', 'David IX', 'Mary XV', 'Mary XIII', 'Mary XX']
     ```
   - Output
     ```
     ['David IX', 'Mary XIII', 'Mary XV', 'Mary XX', 'Steven XVI', 'Steven XL']
     ```
   - Explanation
      - The result with Roman numerals is the expected return value. Written in deciaml and sortedm they are *['David 9', 'Mary 13', 'Mary 15', 'Mary 20', 'Steven 16', 'Steven 40']*
- Example 2
   - Input
     ```
     names = ['Louis IX', 'Louis VIII']
     ```
   - Output
     ```
     ['Louis VIII', 'Louis IX']
     ```
   - Explanation
      - Sort first by *givenName* then, if *givenName* is not unique, by the value of the Roman numeral. In decimal, the list if sorted *['Louis 8', 'Louis 9']*.

## Solutions
- Solution 1
  ```java
  public static String[] sortRoman(String[] names) {
      Arrays.sort(names, (s1, s2) -> {
          // split the strings up into name,roman
          String[] arr1 = s1.split(" ");
          String[] arr2 = s2.split(" ");

          // grab the numerical values of the romans
          int val1 = romanToInt(arr1[1]);
          int val2 = romanToInt(arr2[1]);

          // if the names are equal, compare the numerals
          if (arr1[0].equals(arr2[0])) {
              //if first one is greater than, push it back
              if (val1 > val2) {
                  return 1;
              }
              // if first one is less than, stay same
              else {
                  return -1;
              }
          } else { //if not same, just compare the names
              return arr1[0].compareTo(arr2[0]);
          }
      });
      return names;
  }

  public static int romanToInt(String roman) {
      int total = 0;

      // create hashmap to store the roman numerals
      HashMap<Character, Integer> romans = new HashMap<>();
      romans.put('I', 1);
      romans.put('V', 5);
      romans.put('X', 10);
      romans.put('L', 50);
      romans.put('C', 100);
      romans.put('D', 500);
      romans.put('M', 1000);

      for (int i = 0; i < roman.length(); i++) {
          char c = roman.charAt(i);
          // check to see if next roman is greater. if next roman is greater, you need to subtract
          if (i + 1 < roman.length() && romans.get(c) < romans.get(roman.charAt(i + 1))) {
              int add = romans.get(roman.charAt(i + 1)) - romans.get(c);
              total += add;
              i++;                  // skip over next one since already calculated
          } else {
              total += romans.get(c); // if less than, just add in order
          }
      }
      return total;
  }
  ```

## References
- [ancestor problem](https://leetcode.com/discuss/general-discussion/851939/ancestor-problem)
