function propsCount(currentObject : object) : number{    
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};

console.log(propsCount(mentor));
