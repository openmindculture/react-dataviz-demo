import MyLineChart from './components/MyLineChart';
import MyBarChart from './components/MyBarChart';
import './App.css'
import {ResponsiveContainer} from "recharts";

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>React & Recharts Data Dashboard</h1>
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
