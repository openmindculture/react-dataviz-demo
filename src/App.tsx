import MyLineChart from './components/MyLineChart';
import MyBarChart from './components/MyBarChart';
import './App.css'
import {ResponsiveContainer} from "recharts";

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>React & Recharts Proof of Concept</h1>
                <p>
                    Created using Vite, React, and Recharts.
                    Source code available on GitHub as a public archive at
                    
                    <a href="https://github.com/openmindculture/react-dataviz-demo">github.com/openmindculture/react-dataviz-demo</a>
                </p>
            </header>

            <main className="dashboard dashboard--flex">
                <ResponsiveContainer>
                    <div className="chart-card">
                        <h2>Monthly Revenue vs. Expenses</h2>
                        <MyLineChart/>
                    </div>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <div className="chart-card">
                        <h2>Monthly Profit</h2>
                        <MyBarChart/>
                    </div>
                </ResponsiveContainer>
            </main>
        </div>
    );
}

export default App
