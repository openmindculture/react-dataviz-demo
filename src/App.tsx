import React from 'react';
import Chart from './components/Chart';
import sampleData from './data/sampleData';

const App: React.FC = () => {
    return (
        <div>
            <h1>React DataViz Demo</h1>
            <Chart data={sampleData} />
        </div>
    );
};

export default App;