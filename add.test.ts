import add from "./add";

// ""
test("Single Charater Return Number", () => {
  expect(add("1")).toBe(1);
  expect(add("2")).toBe(2);
});

// , \n
test("Check for Commas and /n delimiter", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1\n2,3")).toBe(6);
  expect(add("1,2\n3")).toBe(6);
  expect(add("1\n2\n3")).toBe(6);
});

// negative numbers throw error
test("Negative numbers throw error", () => {
  expect(() => add("-1,2,3")).toThrowError("negatives not allowed -1");
  expect(() => add("-1,-2,3")).toThrowError("negatives not allowed -1,-2");
});

// numbers > 1000 are ignored
test("Numbers greater than 1000, add 1 instead", () => {
  expect(add("1,2,1001")).toBe(4);
  expect(add("1,2,1000")).toBe(1003);
  expect(add("1,2,999")).toBe(1002);
});

// custom delimiter
test("Other Delimiter Check", () => {
  expect(add("//;\n1;2;3")).toBe(6);
  expect(add("//-\n1-2-3")).toBe(6);
});

// multiple custom delimiter
test("Multiple custom delimiter Check", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
  expect(add("//[***]\n1***2***3")).toBe(6);
  expect(add("//[***]\n1***2000***3")).toBe(5); // more than 1000 case
  expect(add("//[***][---]\n1***2---3")).toBe(6);
  expect(add("//[***][---][@@@]\n1***2---3@@@4")).toBe(10);
});
