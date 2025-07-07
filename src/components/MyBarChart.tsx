import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {financialData} from '../data'; // Use the same data

const MyBarChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={financialData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {/* Bar component represents a bar in the chart */}
                <Bar dataKey="profit" fill="#8884d8"/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;