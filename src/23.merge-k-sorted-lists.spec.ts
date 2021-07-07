import { mergeKLists, ListNode } from "./23.merge-k-sorted-lists";

describe("23.mergeKLists", () => {
  it("example 1", () => {
    expect(
      mergeKLists([
        new ListNode(1, new ListNode(4, new ListNode(5))),
        new ListNode(1, new ListNode(3, new ListNode(4))),
        new ListNode(2, new ListNode(6)),
      ])
    ).toEqual(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(
            2,
            new ListNode(
              3,
              new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
            )
          )
        )
      )
    );
  });

  it("example 2", () => {
    expect(mergeKLists([])).toEqual(null);
  });

  it("example 3", () => {
    expect(mergeKLists([null])).toEqual(null);
  });

  it("example 4", () => {
    expect(
      mergeKLists([new ListNode(0, new ListNode(2, new ListNode(5)))])
    ).toEqual(new ListNode(0, new ListNode(2, new ListNode(5))));
  });
});
