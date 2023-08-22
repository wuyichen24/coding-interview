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
