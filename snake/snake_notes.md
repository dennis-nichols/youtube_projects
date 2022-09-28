# Snake project notes

In this project, I followed along with Ania Kubow's [youtube tutorial](https://www.youtube.com/watch?v=rui2tRRVtc0).

## New things I learned about

- How to set up a basic grid game
- Displaying animations in the grid by manipulating css classes of the grid cells
- How navigation through a grid works using array indexes
- How to have different entities interact with each other by monitoring their current indexes in the grid

### Key JS concepts

- The [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property
- Event listners for key press events (`keyup`), each key has a code, etc
- Nifty math to detect if the user agent is at a wall using the width property, size of the array, and modulo operators.

## Bugs I had to resolve

- It appears that the `querySelectorAll` method doesn't work when you use it to select single elements. **Instead**, you have to use the `querySelector` method.
