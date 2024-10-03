const add = (str: string) => {

    if(str=="") return 0

    if(str.length==1) return 0

    if(str.includes(",") || str.includes("\n") ){
        const numbers = str.split(/,|\n/).map(Number)
        return numbers.reduce((acc,crr)=>acc+crr)
    }

    if(str.startsWith("//")){
        const [delimiter, numbersString] = str.split("//")[1].split("\n")
        const numbers = numbersString.split(delimiter)
        return numbers.reduce((acc,crr)=>acc+crr)
    }

};
