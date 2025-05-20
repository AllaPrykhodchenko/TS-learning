function identity<T extends { rating: number }>(items: T[]): number {
    if (items.length === 0) return 0;

    const total = items.reduce((sum, item) => sum + item.rating, 0);
    return total / items.length;
}

const doctors = [
    { title: "Good doctor", rating: 5 },
    { title: "Normal doctor", rating: 3 },
    { title: "Bad doctor", rating: 1 }
];

const average = identity(doctors);
console.log(average);
