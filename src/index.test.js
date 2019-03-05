import exepct from "expect";

describe("sanity check", () => {
  it("should pass", () => {
    exepct(true).toEqual(true);
  });
});
