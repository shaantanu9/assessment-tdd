import add from "./add";

test("Single Charater Return Number", () => {
  expect(add("1")).toBe(1);
  expect(add("2")).toBe(2);
});
