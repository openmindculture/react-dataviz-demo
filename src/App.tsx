import MyLineChart from './components/MyLineChart';
import MyBarChart from './components/MyBarChart';
import './App.css'

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>React & Recharts Data Dashboard</h1>
            </header>
            <main className="dashboard">
                <div className="chart-card">
                    <h2>Monthly Revenue vs. Expenses</h2>
                    <MyLineChart/>
                </div>
                <div className="chart-card">
                    <h2>Monthly Profit</h2>
                    <MyBarChart/>
                </div>
            </main>
        </div>
    );
}

export default App
