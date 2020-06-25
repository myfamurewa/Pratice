const drawingBook = (n, p) => {
  // n is the number of pages in the book
  // p is the the page that we are trying to go to
  // you can either start at the front of the book or the back of the book
  // when you turn a page you can see the next two pages
  // or if you start from the back the previous two pages
  /************ Start of Pseudocode  ****************/
  // we need a window variable that shows the current two pages
  // if  p is included in window we return the number of flipped pages
  //  we need to check to see if p is closer to the front of the book or the back of the book
  // then we need a variable to hold whether we start from the front or the back
  // adjust the window according to if you started from the front i + 1, i + 2
  // or the back i - 1, i - 2
  // maybe this could be a while loop
  let startPoint = p + 0 < n - p ? "beginning" : p + 0 === n - p ? "beginning" : "end";
  let view = startPoint === "beginning" ? [0, 1] : [n - 1, n];
  let pagesTurned = 0;
  if (view.includes(p)) {
    return pagesTurned;
  } else {
    do {
      if (startPoint === "beginning") {
        view[0] = view[0] + 2;
        view[1] = view[1] + 2;
        pagesTurned++;
      } else {
        view[0] = view[0] - 2;
        view[1] = view[1] - 2;
        pagesTurned++;
      }
    } while (view.includes(p) === false);
    return pagesTurned;
  }
};
// it works but isn't very fast
// it fails on test # 26 but because I can't look at the test case I don't know why
// I need to work on coming up with simpler solutions using math rather than doing what just comes to mind first
// console.log(drawingBook(6, 2));
console.log(drawingBook(5, 4));

function pageCount (n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    return Math.min(pageTurns, totalTurns - pageTurns)
}
// this method is much faster
console.log(drawingBook(6, 2))