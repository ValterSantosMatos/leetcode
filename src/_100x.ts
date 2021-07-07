export function flattenArray(
  array: Array<number | Array<number | Array<number>>>
): Array<Number> {
  var queue = array;
  var flattenArray: Array<number> = [];

  while (queue.length) {
    // Gets the first element of the queue
    const element = queue[0];
    queue.shift();

    // Check if its a number or an array
    if (Array.isArray(element) === false) {
      // Its a number
      flattenArray.push(element as number);
    } else {
      // Its an array (add each item to the queue)
      for (var i = (element as Array<any>).length - 1; i >= 0; i--) {
        queue.unshift((element as Array<any>)[i]);
      }
    }
  }

  return flattenArray;
}
