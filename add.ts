const addNumberArray = (numbers: number[]) => {
  const num = numbers.filter((n) => n < 0);
  if (num.length > 0)
    throw new Error(`negatives not allowed ${num.join(",")} `);
  return numbers.reduce((acc, curr) => {
    if (curr < 0) throw new Error("negatives not allowed");
    else if (curr > 1000) return acc + 1;
    return acc + curr;
  });
};

const add = (str: string) => {
  if (str == "") return 0;

  if (str.startsWith("//")) {
    const [delimiter, numbersString] = str.split("//")[1].split("\n");
    const filterDelimiter = delimiter.split(/\[|\]/).filter((n) => n);
    let dummyStr = numbersString;
    let i = 0;
    while (i < filterDelimiter.length) {
      if (dummyStr.includes(filterDelimiter[i])) {
        dummyStr = dummyStr.replace(filterDelimiter[i], ",");
      } else {
        i++;
      }
    }

    const numbers: any = dummyStr.split(",").map(Number);
    return addNumberArray(numbers);
  }

  if (str.includes(",") || str.includes("\n")) {
    const numbers = str.split(/,|\n/).map(Number);

    return addNumberArray(numbers);
  }

  return Number(str);
};

// const val = "\n1\n1002,3";
// const val = "//;\n1;2";
// const val = "//[*][%]\n1*2%3"
// const val = "//[***]\n1***2***3";
// const val = "//[***][---]\n1***2---3";
// const val = "//[***][---][@@@]\n1***2---3@@@4";
// console.log(add(val));

export default add;
