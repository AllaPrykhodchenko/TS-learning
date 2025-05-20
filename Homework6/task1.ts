function display(text: string): void;

function display(text1: string, text2: string): void;

function display(texts: string[]): void;


function display(arg1: string | string[], arg2?: string): void {
    if (Array.isArray(arg1)) {
        arg1.forEach(line => console.log(line));
    } else if (arg2 !== undefined) {
        console.log(arg1);
        console.log(arg2);
    } else {
        console.log(arg1);
    }
}

display("Hello");

display("Hello", "World");

display(["Line 1", "Line 2", "Line 3"]);
