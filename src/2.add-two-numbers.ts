export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  } else if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }

  var lFinal = null;
  let tempFinal: ListNode = null as any;
  let tempL1: ListNode | null = l1;
  let tempL2: ListNode | null = l2;
  let toPass = 0;
  while (true) {
    if (!tempL1 && !tempL2) {
      break;
    }

    var nextNumber =
      toPass + (tempL1 ? tempL1.val : 0) + (tempL2 ? tempL2.val : 0);
    var toAdd = 0;
    toPass = 0;
    if (nextNumber >= 10) {
      toAdd = Number(String(nextNumber)[1]);
      toPass = Number(String(nextNumber)[0]);
    } else {
      toAdd = nextNumber;
      toPass = 0;
    }

    if (!lFinal) {
      lFinal = new ListNode(toAdd);
      tempFinal = lFinal;
    } else {
      (tempFinal as any).next = new ListNode(toAdd);
      (tempFinal as any) = tempFinal.next;
    }

    tempL1 = tempL1 ? tempL1.next : null;
    tempL2 = tempL2 ? tempL2.next : null;
  }

  if (toPass) {
    if (toPass >= 10) {
      (tempFinal as any).next = new ListNode(
        Number(String(toPass)[1]),
        new ListNode(Number(String(toPass)[0]))
      );
    } else {
      (tempFinal as any).next = new ListNode(Number(String(toPass)));
    }
  }

  return lFinal;
}
