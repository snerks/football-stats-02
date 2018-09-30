import * as React from "react";

import { Line } from "react-chartjs-2";

export interface PointsLineChartProps {}

export interface PointsLineChartState {}

class PointsLineChart extends React.Component<
  PointsLineChartProps,
  PointsLineChartState
> {
  // state = { :  }
  render() {
    // const chartData = {
    //   labels: ["1", "2", "3", "4", "5", "6"],
    //   datasets: [
    //     {
    //       label: "2017-2018",
    //       data: [3, 3, 4, 5, 6, 9],
    //       //   backgroundColor: [
    //       //     "rgba(255, 99, 132, 0.2)",
    //       //     "rgba(54, 162, 235, 0.2)",
    //       //     "rgba(255, 206, 86, 0.2)",
    //       //     "rgba(75, 192, 192, 0.2)",
    //       //     "rgba(153, 102, 255, 0.2)",
    //       //     "rgba(255, 159, 64, 0.2)"
    //       //   ],
    //       borderColor: [
    //         "rgba(255,99,132,1)",
    //         "rgba(54, 162, 235, 1)",
    //         "rgba(255, 206, 86, 1)",
    //         "rgba(75, 192, 192, 1)",
    //         "rgba(153, 102, 255, 1)",
    //         "rgba(255, 159, 64, 1)"
    //       ],
    //       borderWidth: 1
    //     },
    //     {
    //       label: "2018-2019",
    //       data: [1, 2, 2, 5, 8, 11],
    //       //   backgroundColor: [
    //       //     "rgba(255, 99, 132, 0.2)",
    //       //     "rgba(54, 162, 235, 0.2)",
    //       //     "rgba(255, 206, 86, 0.2)",
    //       //     "rgba(75, 192, 192, 0.2)",
    //       //     "rgba(153, 102, 255, 0.2)",
    //       //     "rgba(255, 159, 64, 0.2)"
    //       //   ],
    //       borderColor: [
    //         "rgba(255,99,132,1)",
    //         "rgba(54, 162, 235, 1)",
    //         "rgba(255, 206, 86, 1)",
    //         "rgba(75, 192, 192, 1)",
    //         "rgba(153, 102, 255, 1)",
    //         "rgba(255, 159, 64, 1)"
    //       ],
    //       borderWidth: 1
    //     }
    //   ]
    // };

    const chartData = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "2017-2018",
          fill: false,
          lineTension: 0.1,

          // backgroundColor: "rgba(75,192,192,0.4)",
          // borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(255, 0, 0, 0.4)",
          borderColor: "rgba(255, 0, 0, 1)",

          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [3, 3, 4, 5, 6, 9, 10, 13, 14, 17]
        },
        {
          label: "2018-2019",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1, 2, 2, 5, 8, 11, 14, 14, 14, 15]
        },
        {
          label: "Playoff Form",
          fill: false,
          lineTension: 0.1,

          // backgroundColor: "rgba(75,192,192,0.4)",
          // borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(220,220,220, 0.4)",
          borderColor: "rgba(220,220,220, 1)",

          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(220,220,220, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(220,220,220, 1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1.7, 3.4, 5.1, 6.8, 8.5, 10.2, 11.9, 13.6, 15.3, 17]
        },
        {
          label: "Relegation Form",
          fill: false,
          lineTension: 0.1,

          // backgroundColor: "rgba(75,192,192,0.4)",
          // borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(255, 165, 0, 0.4)",
          borderColor: "rgba(255, 165, 0, 1)",

          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255, 165, 0, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 165, 0, 1)",
          pointHoverBorderColor: "rgba(255, 165, 0,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      ]
    };

    const chartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Points Total"
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Games Played"
            }
          }
        ]
      }
    };

    return (
      <Line data={chartData} options={chartOptions} width={600} height={250} />
    );
  }
}

export default PointsLineChart;
