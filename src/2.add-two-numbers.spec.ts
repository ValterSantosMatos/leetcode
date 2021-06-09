import { addTwoNumbers, ListNode } from "./2.add-two-numbers";

describe("2.addTwoNumbers", () => {
  it("example 1", () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4)))
      )
    ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
  });

  it("example 2", () => {
    expect(addTwoNumbers(new ListNode(9), new ListNode(9))).toEqual(
      new ListNode(8, new ListNode(1))
    );
  });

  it("example 3", () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(9))),
        new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
      )
    ).toEqual(
      new ListNode(
        7,
        new ListNode(0, new ListNode(4, new ListNode(0, new ListNode(1))))
      )
    );
  });
});
