# React DataViz Demo

This project is a demonstration of data visualization using React and ReCharts with TypeScript. It showcases how to create interactive charts and graphs with a sample dataset.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-dataviz-demo
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/`: Contains the source code for the application.
  - `App.tsx`: The main component that renders the Chart component.
  - `components/Chart.tsx`: The Chart component that uses ReCharts to visualize data.
  - `data/sampleData.ts`: Contains sample data for the chart.
  - `types/index.ts`: Type definitions for the data structures used in the application.
  
- `public/`: Contains static files.
  - `index.html`: The main HTML file for the React application.

- `package.json`: Configuration file for npm, listing dependencies and scripts.

- `tsconfig.json`: TypeScript configuration file.

- `vite.config.ts`: Configuration file for Vite.

## Usage

The Chart component can be customized by passing different data and configuration options. Refer to the documentation in the `src/components/Chart.tsx` file for more details on the available props.

## License

This project is licensed under the MIT License.