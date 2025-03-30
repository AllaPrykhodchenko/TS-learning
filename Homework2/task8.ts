function wordsToUpperCase(str : string) {
    const words = str.split(" ");
    for (let index = 0; index < words.length; index++) {
        words[index] = capitalizeFirstLetter(words[index]);   
    }
    const result = words.join(" ")
    console.log(result);

}

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

wordsToUpperCase('i love java script');