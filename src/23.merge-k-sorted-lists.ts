export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists) {
    return null;
  }

  // Initializes
  let merged = null;
  let mergedPointer: any = null;
  const pointers = [];
  let minIndex = null;
  let minVal = Infinity;
  for (let i = 0; i < lists.length; i++) {
    const k = lists[i];
    if (k && k.val < minVal) {
      minIndex = i;
      minVal = k.val;
    }

    pointers.push(lists[i]);
  }
  if (minIndex === null) {
    return null;
  }

  // Adds first element
  merged = pointers[minIndex];
  mergedPointer = merged;
  pointers[minIndex] = pointers[minIndex]?.next;

  // Adds the rest
  while (true) {
    minIndex = null;
    minVal = Infinity;
    for (let i = 0; i < pointers.length; i++) {
      var k = (pointers as any)[i];
      if (k && k.val < minVal) {
        minIndex = i;
        minVal = k.val;
      }
    }
    if (minIndex === null) {
      break;
    }

    mergedPointer.next = pointers[minIndex];
    mergedPointer = mergedPointer?.next;
    pointers[minIndex] = pointers[minIndex]?.next;
  }

  return merged as any;
}
