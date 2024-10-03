const addNumberArray = (numbers: number[]) => {
  const num = numbers.filter((n) => n < 0);
  if (num.length > 0)
    throw new Error(`negatives not allowed ${num.join(",")} `);
  return numbers.reduce((acc, crr) => {
    if (crr < 0) throw new Error("negatives not allowed");
    return acc + crr;
  });
};

const add = (str: string) => {
  if (str == "") return 0;

  if (str.length == 1) return Number(str);

  if (str.startsWith("//")) {
    const [delimiter, numbersString] = str.split("//")[1].split("\n");
    const numbers = numbersString.split(delimiter).map(Number);
    console.log({ delimiter, numbersString, numbers });

    return addNumberArray(numbers);
  }

  if (str.includes(",") || str.includes("\n")) {
    const numbers = str.split(/,|\n/).map(Number);
    console.log(numbers);
    return addNumberArray(numbers);
  }
};

const val = "\n1\n12,13";
console.log(add(val));
