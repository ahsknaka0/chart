// DrillDownChart.js
import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const DrillDownChart = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  // Bar Chart with Drill Down
  useLayoutEffect(() => {
    let root = am5.Root.new(barChartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
      })
    );

    let data = [
      {
        category: "Level 1",
        value: 100,
        children: [
          {
            category: "Level 2 - A",
            value: 50,
            children: [
              {
                category: "Level 3 - A1",
                value: 30,
                children: [
                  {
                    category: "Level 4 - A1.1",
                    value: 15,
                    children: [
                      {
                        category: "Level 5 - A1.1.1",
                        value: 8,
                        children: [
                          {
                            category: "Level 6 - A1.1.1.1",
                            value: 4,
                            children: [
                              {
                                category: "Level 7 - A1.1.1.1.1",
                                value: 2
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    category: "Level 4 - A1.2",
                    value: 15,
                    children: [
                      {
                        category: "Level 5 - A1.2.1",
                        value: 7,
                        children: [
                          {
                            category: "Level 6 - A1.2.1.1",
                            value: 3,
                            children: [
                              {
                                category: "Level 7 - A1.2.1.1.1",
                                value: 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                category: "Level 3 - A2",
                value: 20,
                children: [
                  {
                    category: "Level 4 - A2.1",
                    value: 10,
                    children: [
                      {
                        category: "Level 5 - A2.1.1",
                        value: 5,
                        children: [
                          {
                            category: "Level 6 - A2.1.1.1",
                            value: 2,
                            children: [
                              {
                                category: "Level 7 - A2.1.1.1.1",
                                value: 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    category: "Level 4 - A2.2",
                    value: 10,
                    children: [
                      {
                        category: "Level 5 - A2.2.1",
                        value: 5,
                        children: [
                          {
                            category: "Level 6 - A2.2.1.1",
                            value: 2,
                            children: [
                              {
                                category: "Level 7 - A2.2.1.1.1",
                                value: 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            category: "Level 2 - B",
            value: 50,
            children: [
              {
                category: "Level 3 - B1",
                value: 40,
                children: [
                  {
                    category: "Level 4 - B1.1",
                    value: 20,
                    children: [
                      {
                        category: "Level 5 - B1.1.1",
                        value: 10,
                        children: [
                          {
                            category: "Level 6 - B1.1.1.1",
                            value: 5,
                            children: [
                              {
                                category: "Level 7 - B1.1.1.1.1",
                                value: 2
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    category: "Level 4 - B1.2",
                    value: 20,
                    children: [
                      {
                        category: "Level 5 - B1.2.1",
                        value: 10,
                        children: [
                          {
                            category: "Level 6 - B1.2.1.1",
                            value: 5,
                            children: [
                              {
                                category: "Level 7 - B1.2.1.1.1",
                                value: 2
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                category: "Level 3 - B2",
                value: 10,
                children: [
                  {
                    category: "Level 4 - B2.1",
                    value: 5,
                    children: [
                      {
                        category: "Level 5 - B2.1.1",
                        value: 2,
                        children: [
                          {
                            category: "Level 6 - B2.1.1.1",
                            value: 1,
                            children: [
                              {
                                category: "Level 7 - B2.1.1.1.1",
                                value: 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    category: "Level 4 - B2.2",
                    value: 5,
                    children: [
                      {
                        category: "Level 5 - B2.2.1",
                        value: 2,
                        children: [
                          {
                            category: "Level 6 - B2.2.1.1",
                            value: 1,
                            children: [
                              {
                                category: "Level 7 - B2.2.1.1.1",
                                value: 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      
    ];

    series.data.setAll(data);

    // Handle drill down
    series.columns.template.events.on("click", function (ev) {
      let targetData = ev.target.dataItem.dataContext;
      if (targetData.children) {
        series.data.setAll(targetData.children);
        xAxis.data.setAll(targetData.children);
      }
    });

    xAxis.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  // Pie Chart with Drill Down
  useLayoutEffect(() => {
    let root = am5.Root.new(pieChartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
      })
    );

    let data = [
      {
        category: "Level 1",
        value: 100,
        children: [
          {
            category: "Level 2 - A",
            value: 50,
            children: [
              { category: "Level 3 - A1", value: 30 },
              { category: "Level 3 - A2", value: 20 },
            ],
          },
          {
            category: "Level 2 - B",
            value: 50,
            children: [
              { category: "Level 3 - B1", value: 40 },
              { category: "Level 3 - B2", value: 10 },
            ],
          },
        ],
      },
    ];

    series.data.setAll(data);

    // Handle drill down
    series.slices.template.events.on("click", function (ev) {
      let targetData = ev.target.dataItem.dataContext;
      if (targetData.children) {
        series.data.setAll(targetData.children);
      }
    });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div>
      <h2>Bar Chart Drill Down</h2>
      <div
        id="barChartDiv"
        ref={barChartRef}
        style={{ width: "100%", height: "500px" }}
      ></div>

      <h2>Pie Chart Drill Down</h2>
      <div
        id="pieChartDiv"
        ref={pieChartRef}
        style={{ width: "100%", height: "500px" }}
      ></div>
    </div>
  );
};

export default DrillDownChart;
