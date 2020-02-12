# JavaScript-based Visualization of Conway's Game of Life

## Important Links

- [Deployed Client](https://joe-protz.github.io/JSLife/)
- [GitHub](https://www.github.com/joe-protz)
- [Portfolio](https://joe-protz.github.io/#)
- [LinkedIn](https://www.linkedin.com/in/joe-protz/)
- [p5.js](https://p5js.org/)

## Planning Story

This began as a teamwork challenge during a "code retreat day" that I had during my time at General Assembly Boston. The idea was that we were supposed to try to recreate Conway's game of life while being held back by various disadvantages such as one person in a group was allowed to type but not talk where another was allowed to talk but not type.

The goal of the day was not to actually complete this game, however I found myself really interested in the solution. We originally had the idea sketched out in Ruby, and lots of whiteboarding, however I have since lost both. I did use the ideas we discussed for Ruby and translated it to JS, however.

I found myself a few weeks later feeling good about functional programming, however very weak with Object Oriented Programming, so based off of a YouTube creator I really enjoy [Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) I downloaded the p5.js framework and referenced his excellent coding challenge videos on how to do basic things such as just draw a rectangle. I made heavy use of the documents which are done very well.

I started with just creating a class. I knew I wanted to use objects in this project, so I didn't bother starting with less and evolving it. In my Ruby version, there was a grid, and then cells that the grid held. However, in p5, my grid is the canvas so I only needed a Cell class.

I had several initial goals. I needed a cell to:

- know its own location
- know its own state, alive or dead
- know its neighbors

I also needed to hold all of the cells to fill up an entire canvas and have it be scalable.

If I could do this, I felt like implementing the rules would be easy enough. Every loop, check each cell against the loop, and then show the entire array of cells.

The biggest initial challenge by far was to have each cell know it's neighbors. I had created the cells in a 1d array, and didn't have experience in converting coordinates to an index. I did find the formula "index = x + y \* columns" and tried to use it. I kept getting it wrong however because I was under the impression that x + y should be done before the multiplication, which is straight out incorrect. Once I fixed that, I also found that the formula didn't work for literal edge cases, such as in a 3x3 array , the cell in 0,2 would think its neighbor was 0,0 which it is not. So my initial fix for this was during the creating of each cell, create 4 checks, is it touching top, bottom, left , or right?

This solution did work, but eventually I did refactor. I converted my array to a 2d array, and got rid of the check and instead wrapped the cells scope around the edges. I used a formula where if we add the columns or rows to the index and then modulus the whole thing, it will always wrap in all directions. I also fixed the 8 way check for neighbors into a mini nested loop.

I then added some buttons for the user to see some preset patterns, reset it, or randomize it.

### Technologies Used

- HTML
- Javascript
- P5.js

### Unsolved Problems

I would really like to clean up the whole ui, include explanations for what the rules are, and make it a more pleasant experience overall.
