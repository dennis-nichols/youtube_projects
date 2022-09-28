# Memory game notes

This project was done based on Ania Kubow's [tutorial](https://www.youtube.com/watch?v=ec8vSKJuZTk).

## New things I learned

### 1. Quick random sort of an array

* Array objects in JS can have the `.sort()` method called on them.
* This method by default will sort the array in alphabetical and ascending order.
* The method will also accept a comparison function for sorting the array.

#### The sort comparison function

* By default the comparison function takes 2 elements of the array in order and returns the result of the operation (A-B).
* If the result is less than or equal to 0, A is inserted in the new array at a lower index, i.e. it comes first.
* If the result is greater than 0, A is inserted in the new array at a higher index, i.e. the positions of A and B are initially switched.

#### Making it random

* By passing the following function to the sort method, we ensure that for each pairwise comparison of the array elements, the resulting sort is random:

```js
    array.sort( () => 0.5 - math.random() );
```
