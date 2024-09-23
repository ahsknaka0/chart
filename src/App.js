// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DrillDownChartCanvasJS from './DrillDownChartCanvasJS';
import DrillDownChart from './DrillDownChart';
import HighchartsDrilldown from './HighchartsDrilldown';


const App = () => {
  return (
    <Router>
      <div>
        <h1>Chart Navigation</h1>
        <nav className="flex items-center justify-center">
          <ul className="flex gap-10 font-bold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/highcharts-drilldown">Highcharts</Link></li>
            <li><Link to="/drill-down-chart">amCharts</Link></li>
            <li><Link to="/drill-down-chart-canvasjs">CanvasJS</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/highcharts-drilldown" element={<HighchartsDrilldown />} />
          <Route path="/drill-down-chart" element={<DrillDownChart />} />
          <Route path="/drill-down-chart-canvasjs" element={<DrillDownChartCanvasJS />} />
          <Route path="/" element={<h2>Welcome! Select a chart above.</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
