var _ = require('lodash');

var chartData = [
      {
        "month": "2001M01",
        "total": 10,
        "incineration": 300,
        "garbageBury": 500
      },
      {
        "month": "2001M02",
        "total": 5,
        "incineration": 100,
        "garbageBury": 800
      }
    ];


var aChart = Object.keys(chartData[0]);

var josim = aChart.map(
  (x) => (
    {
      'field': x,
      'name': _.capitalize(x)
    }
  )
)


console.log(josim);
