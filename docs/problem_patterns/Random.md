# Random

## Concepts
- Randomly get one or more candidates from a collection.

## Types
| Type | Example | Range Presentation |
|----|----|----|
| Each candidate with same weight/probability | ![dw2](https://user-images.githubusercontent.com/8989447/116018948-5ae37900-a600-11eb-9026-fa273f1082e1.png) | ![dw4](https://user-images.githubusercontent.com/8989447/116019932-88c9bd00-a602-11eb-898f-de7579124887.png) |
| Each candidate with different weights/probabilities | ![dw1](https://user-images.githubusercontent.com/8989447/116018822-17890a80-a600-11eb-8bcd-b8a8dc74ebc4.png) | ![dw3](https://user-images.githubusercontent.com/8989447/116019646-ead5f280-a601-11eb-8880-320f8beb405c.png) |

## Transform between Types
| Each candidate with same weight/probability |  |Each candidate with different weights/probabilities |
|---|---|----|
| [3, 3, 4, 5, 6, 6, 6, 7] | = | [{3, 2}, {4, 1}, {5, 1}, {6, 3}, {7, 1}] |

## Strategies
- For getting random candidate with same weight, consider using [Reservoir Sampling]()
- For getting random candidate with different weight, consider using [Prefix Sum Array]()
- You can also consider converting the problem into another type of random problem and use corresponding solution pattern.

## Problem
- **Candidate with same weight**
   - [Generate Random Index of Target Number](../problems/array/Generate_Random_Index_Of_Target_Number.md)
   - [Get Random Node from List](../problems/linked_list/Get_Random_Node_From_List.md)
- **Candidate with different weights**
   - [Generate Random Index with Weight](../problems/array/Generate_Random_Index_With_Weight.md)
