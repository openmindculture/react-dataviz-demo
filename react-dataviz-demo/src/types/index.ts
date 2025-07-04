// This file defines TypeScript interfaces for the data used in the application. 

export interface DataPoint {
    name: string;
    value: number;
}

export interface ChartProps {
    data: DataPoint[];
    title: string;
    xAxisKey: string;
    yAxisKey: string;
}