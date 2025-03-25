type Parameter = string | number | boolean | number[]

function processData(param: Parameter): string | number | boolean | number[] {
    switch (typeof param) {
        case "string":
            return param.toUpperCase();
        case "number":
            return param * param;
        case "boolean":
            return !param;
        case "object":
            if (Array.isArray(param)) {
                return param.length === 0 ? "Empty array: []" : param.map((num) => num * num);
            }
    }
    
    throw new Error("Unsupported data type");
}

 console.log(processData("text data")); // "TEXT DATA"
 console.log(processData(3)); // 9
 console.log(processData(false)); // true
 console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
 console.log(processData([])); // Empty array: []