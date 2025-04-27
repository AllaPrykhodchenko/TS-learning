type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
  const sortedArr = [...arr];
  return sortedArr.sort((a, b) => {
    return direction === "asc" ? a.localeCompare(b) : b.localeCompare(a);
  });
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);