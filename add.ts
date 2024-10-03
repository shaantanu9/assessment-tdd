// const addNumberArray = (numberArray) => {
//   console.log(numberArray);
// };

const add = (str: string) => {
  if (str == "") return 0;

  if (str.length == 1) return Number(str);

  if (str.startsWith("//")) {
    const [delimiter, numbersString] = str.split("//")[1].split("\n");
    const numbers = numbersString.split(delimiter).map(Number);
    console.log({delimiter,numbersString, numbers})
    
    return numbers.reduce((acc, crr) => acc + crr);
  }

  if (str.includes(",") || str.includes("\n")) {
    const numbers = str.split(/,|\n/).map(Number);
    return numbers.reduce((acc, crr) => acc + crr);
  }

};

const val = "//;\n1;2;3"
console.log(
    add(val)
)