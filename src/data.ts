// Define the type for a single data point
export type DataPoint = {
    month: string;
    revenue: number;
    expenses: number;
    profit: number;
};

// Create an array of data points
export const financialData: DataPoint[] = [
    { month: "Jan", revenue: 2000, expenses: 1500, profit: 500 },
    { month: "Feb", revenue: 2200, expenses: 1600, profit: 600 },
    { month: "Mar", revenue: 2500, expenses: 1700, profit: 800 },
    { month: "Apr", revenue: 2300, expenses: 1800, profit: 500 },
    { month: "May", revenue: 2700, expenses: 2000, profit: 700 },
    { month: "Jun", revenue: 3000, expenses: 2100, profit: 900 },
];