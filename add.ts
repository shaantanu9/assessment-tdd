const addNumberArray = (numbers:number[]) => {
    return numbers.reduce((acc, crr) =>{
        if(crr < 0) throw new Error("negatives not allowed")
        return acc + crr
    });
};

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
    console.log(numbers)
    return addNumberArray(numbers)
    // numbers.reduce((acc, crr) => acc + crr);
  }



};

const val = "\n1\n2,-13"
console.log(add(val))