# CD Command

## Problem
Implement a mock of cd (change directory) command on Unix. The code doesn't have to change actual directories, just return the new path after cd was executed.

The function takes two arguments (current working directory and directory to change to), and returns the output directory as if cd command was executed. There's no filesystem underneath; all paths are valid.

## Solutions
- **Solution 1: String split**
   - Idea
      - Split the current working directory (cwd) and modify the it by the elements in the arguments (arg)
        
  ```java
  public static String cd(String cwd, String arg) {
      String[] cwds = null;

      if (!arg.startsWith("/") && !cwd.equals("/")) {
          cwds = cwd.substring(1).split("/");
      } else {
          cwds = new String[0];
      }

      for (String elem : arg.replaceAll("^/|/$", "").split("/")) {
          if (elem.equals(".")) {
              continue;
          } else if (elem.equals("..")) {
              if (cwds.length > 0) {
                  cwds = Arrays.copyOf(cwds, cwds.length - 1);
              }
          } else {
              cwds = Arrays.copyOf(cwds, cwds.length + 1);
              cwds[cwds.length - 1] = elem;
          }
      }

      return "/" + String.join("/", cwds);
  }
  ```
