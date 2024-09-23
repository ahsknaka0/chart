import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';

drilldown(Highcharts);

const HighchartsDrilldown = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Drilldown Chart'
    },
    series: [
      {
        name: 'Level 1',
        data: [
          {
            name: 'Category A',
            y: 5,
            drilldown: 'level2A'
          },
          {
            name: 'Category B',
            y: 3,
            drilldown: 'level2B'
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          id: 'level2A',
          name: 'Level 2A',
          data: [
            {
              name: 'Subcategory A1',
              y: 4,
              drilldown: 'level3A1'
            },
            {
              name: 'Subcategory A2',
              y: 1,
              drilldown: 'level3A2'
            }
          ]
        },
        {
          id: 'level3A1',
          name: 'Level 3A1',
          data: [
            { name: 'Subcategory A1a', y: 2, drilldown: 'level4A1a' },
            { name: 'Subcategory A1b', y: 2 }
          ]
        },
        {
          id: 'level4A1a',
          name: 'Level 4A1a',
          data: [
            { name: 'Leaf A1a', y: 2 },
            { name: 'Leaf A1b', y: 1 }
          ]
        },
        {
          id: 'level2B',
          name: 'Level 2B',
          data: [
            { name: 'Subcategory B1', y: 2 },
            { name: 'Subcategory B2', y: 1 }
          ]
        }
      ]
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsDrilldown;
