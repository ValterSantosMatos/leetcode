export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) {
    return null;
  } else if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  // Add the first element
  let merged = null;
  let mergedPointer = null;
  var l1Pointer: any = l1;
  var l2Pointer: any = l2;

  // Adds first
  if (l1Pointer?.val < l2Pointer?.val) {
    merged = l1Pointer;
    l1Pointer = l1Pointer?.next;
  } else {
    merged = l2Pointer;
    l2Pointer = l2Pointer?.next;
  }

  // Adds the rest
  mergedPointer = merged;
  while (l1Pointer || l2Pointer) {
    if (!l2Pointer || l1Pointer?.val < l2Pointer?.val) {
      (mergedPointer as any).next = l1Pointer;
      l1Pointer = l1Pointer?.next;
    } else {
      (mergedPointer as any).next = l2Pointer;
      l2Pointer = l2Pointer?.next;
    }

    mergedPointer = (mergedPointer as any).next;
  }

  return merged;
}
