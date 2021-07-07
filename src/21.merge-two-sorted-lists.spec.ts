import { mergeTwoLists, ListNode } from "./21.merge-two-sorted-lists";

describe("21.mergeTwoLists", () => {
  it("example 1", () => {
    expect(
      mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4)))
      )
    ).toEqual(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
        )
      )
    );
  });

  it("example 2", () => {
    expect(mergeTwoLists(null, null)).toEqual(null);
  });

  it("example 3", () => {
    expect(mergeTwoLists(null, new ListNode(0))).toEqual(new ListNode(0));
  });
});
