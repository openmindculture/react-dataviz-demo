import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {financialData} from '../data'; // Import our data

const MyLineChart: React.FC = () => {
    return (
        // ResponsiveContainer makes the chart adapt to its parent's size
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={financialData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* CartesianGrid adds a grid to the background */}
                <CartesianGrid strokeDasharray="3 3"/>

                {/* XAxis defines the horizontal axis, using the 'month' key from our data */}
                <XAxis dataKey="month"/>

                {/* YAxis defines the vertical axis */}
                <YAxis/>

                {/* Tooltip shows details when you hover over a data point */}
                <Tooltip/>

                {/* Legend helps identify the different lines */}
                <Legend/>

                {/* Line component represents a line in the chart */}
                <Line type="monotone" dataKey="revenue" stroke="#00429d" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="expenses" stroke="#93003a"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;