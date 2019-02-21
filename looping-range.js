function range(start, end, step) {
  var returnRange = [] ;

  if (start === undefined || end === undefined || step === undefined) return returnRange;
  if (start > end) return returnRange;
  if (step < 0) return returnRange;

  for ( var i = 0; i < ((end - start) / step + 1); i++) {
    returnRange.push(start + step * i);
  }
  return returnRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
