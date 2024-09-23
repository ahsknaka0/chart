import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var $ = require('jquery');

var totalVisitors = 829500;

var visitorsDrilldownedChartOptions = {
  animationEnabled: true,
  theme: "light2",
  axisY: {
    gridThickness: 0,
    includeZero: false,
    lineThickness: 1
  },
  data: []
};

var newVSReturningVisitorsOptions = {
  animationEnabled: true,
  theme: "light2",
  title: {
    text: "New vs Returning Visitors"
  },
  subtitles: [{
    text: "Click on Any Segment to Drilldown",
    backgroundColor: "#2eacd1",
    fontSize: 16,
    fontColor: "white",
    padding: 5
  }],
  legend: {
    fontFamily: "calibri",
    fontSize: 14,
    itemTextFormatter: function (e) {
      return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
    }
  },
  data: []
};

class  DrillDownChartCanvasJS extends Component {
  constructor() {
    super();
    this.options = {};
    this.visitorsChartDrilldownHandler = this.visitorsChartDrilldownHandler.bind(this);
  }

  visitorsChartDrilldownHandler(e) {
    var chart = this.chart;
    chart.options = visitorsDrilldownedChartOptions;
    chart.options.data = this.options[e.dataPoint.name];
    chart.options.title = { text: e.dataPoint.name }
    chart.render();
    // $("#backButton").toggleClass("invisible");
  }

  render() {  
    this.options = {
      "New vs Returning Visitors": [{
        click: this.visitorsChartDrilldownHandler,
        cursor: "pointer",
        explodeOnClick: false,
        innerRadius: "75%",
        legendMarkerType: "square",
        name: "New vs Returning Visitors",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
          { y: 522460, name: "New Visitors", color: "#E7823A" },
          { y: 307040, name: "Returning Visitors", color: "#546BC1" }
        ]
      }],
      "New Visitors": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Visitors",
        type: "column",
        dataPoints: [
          { y: 50000, name: "New Level 2", color: "#E7823A" },
		  { y: 30000, name:"New level 2.1", color: "#E78S3A"}
        ]
      }],
	  "New level 2.1": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Level 3",
        type: "column",
        dataPoints: [
          { y: 40000, name: "New Level 3", color: "#C0504E" }
        ]
	  }],
      "New Level 2": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Level 3",
        type: "column",
        dataPoints: [
          { y: 40000, name: "New Level 3", color: "#C0504E" }
        ]
      }],
      "New Level 3": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Level 4",
        type: "column",
        dataPoints: [
          { y: 30000, name: "New Level 4", color: "#9BBB59" }
        ]
      }],
      "New Level 4": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Level 5",
        type: "column",
        dataPoints: [
          { y: 20000, name: "New Level 5", color: "#4F81BD" }
        ]
      }],
      "New Level 5": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Level 6",
        type: "column",
        dataPoints: [
          { y: 10000, name: "New Level 6", color: "#F79646" }
        ]
      }],
      "New Level 6": [{
        click: this.visitorsChartDrilldownHandler,
        name: "New Level 7",
        type: "column",
        dataPoints: [
          { y: 5000, name: "New Level 7", color: "#8064A2" }
        ]
      }],
      "Returning Visitors": [{
        click: this.visitorsChartDrilldownHandler,
        name: "Returning Level 2",
        type: "column",
        dataPoints: [
          { y: 25000, name: "Returning Level 2", color: "#546BC1" }
        ]
      }],
      "Returning Level 2": [{
        click: this.visitorsChartDrilldownHandler,
        name: "Returning Level 3",
        type: "column",
        dataPoints: [
          { y: 20000, name: "Returning Level 3", color: "#A5A5A5" }
        ]
      }],
      "Returning Level 3": [{
        click: this.visitorsChartDrilldownHandler,
        name: "Returning Level 4",
        type: "column",
        dataPoints: [
          { y: 15000, name: "Returning Level 4", color: "#FFBB28" }
        ]
      }],
      "Returning Level 4": [{
        click: this.visitorsChartDrilldownHandler,
        name: "Returning Level 5",
        type: "column",
        dataPoints: [
          { y: 10000, name: "Returning Level 5", color: "#FF8042" }
        ]
      }],
      "Returning Level 5": [{
        click: this.visitorsChartDrilldownHandler,
        name: "Returning Level 6",
        type: "column",
        dataPoints: [
          { y: 5000, name: "Returning Level 6", color: "#00C49F" }
        ]
      }],
      "Returning Level 6": [{
        click: this.visitorsChartDrilldownHandler,
        name: "Returning Level 7",
        type: "column",
        dataPoints: [
          { y: 2500, name: "Returning Level 7", color: "#0088FE" }
        ]
      }]
    }
    const buttonStyle = {
      borderRadius: '4px',
      padding: '8px',
      border: 'none',
      fontSize: '16px',
      backgroundColor: '#2eacd1',
      color: 'white',
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer'
    }
    return (
      <div style={{ position: "relative" }}>
        <h1>React Chart with 7 Levels of Drilldown</h1>
        <CanvasJSChart options={this.options} onRef={ref => this.chart = ref} />
        <button className="btn invisible" id="backButton" style={buttonStyle}>&lt; Back</button>
      </div>
    );
  }

  componentDidMount() {
    var chart = this.chart;
    var options = this.options
    chart.options = newVSReturningVisitorsOptions;
    chart.options.data = options["New vs Returning Visitors"];
    chart.render();

    // $("#backButton").click(function () {
    //   $(this).toggleClass("invisible");
    //   chart.options = newVSReturningVisitorsOptions;
    //   chart.options.data = options["New vs Returning Visitors"];
    //   chart.render();
    // });
  }
}



export default DrillDownChartCanvasJS;
