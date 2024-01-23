# CD Command

## Problem
Implement a mock of cd (change directory) command on Unix. The code doesn't have to change actual directories, just return the new path after cd was executed.

The function takes two arguments (current working directory and directory to change to), and returns the output directory as if cd command was executed. There's no filesystem underneath; all paths are valid.

## Solutions
- **Solution 1: String split**
   - Idea
      - Split the current working directory (cwd) and modify the it by the elements in the arguments (arg):
   - Steps
      - Check the argument is an absolute path or not.
         - If the argument isn't an absolute path, so we need to append it to the current working directory.
         - If the argument is an absolutte path, so we start from root, ignoring the current working directory.
      - Modify the current working directory by each element in the arguments
         - If the current is `.`, it means current directory, do nothing.
         - If the current is `..`, it means move up to the parent directory, remove the last element of the `cwds` array.
         - For other thing, add the element to the end of the the `cwds` array.
        
  ```java
  public String cd(String cwd, String arg) {
      String[] cwds = null;

      if (!arg.startsWith("/") && !cwd.equals("/")) {
          cwds = cwd.substring(1).split("/");
      } else {
          cwds = new String[0];
      }

      for (String elem : arg.replaceAll("^/|/$", "").split("/")) {
          if (elem.equals(".")) {
              continue;                                        // Ignore ".", since it means "current directory"
          } else if (elem.equals("..")) {
              if (cwds.length > 0) {
                  cwds = Arrays.copyOf(cwds, cwds.length - 1); // Remove the last path component
              }
          } else {
              cwds = Arrays.copyOf(cwds, cwds.length + 1);     // New path component: append to the end of the path
              cwds[cwds.length - 1] = elem;
          }
      }

      return "/" + String.join("/", cwds);
  }
  ```
