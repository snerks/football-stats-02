import * as React from "react";

import { Line, ChartData } from "react-chartjs-2";
import * as chartjs from "chart.js";

export interface PointsLineChartProps {}

export interface PointsLineChartState {
  showTrendLines: boolean;
}

class PointsLineChart extends React.Component<
  PointsLineChartProps,
  PointsLineChartState
> {
  state = { showTrendLines: false };

  handleShowTrendLines = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.showTrendLines = !prevState.showTrendLines;

      return nextState;
    });
  };

  render() {
    const redRgba = "255, 0, 0";
    const redLineColour = `rgba(${redRgba}, 1)`;
    const redLegendFillColour = `rgba(${redRgba}, 0.4)`;

    // 128, 0, 128
    const purpleRgba = "85, 85, 85";
    const purpleLineColour = `rgba(${purpleRgba}, 1)`;
    const purpleLegendFillColour = `rgba(${purpleRgba}, 0.4)`;

    const greyRgba = "220, 220, 220";
    const greyLineColour = `rgba(${greyRgba}, 1)`;
    // const greyLegendFillColour = `rgba(${greyRgba}, 0.4)`;

    const greenRgba = "75, 192, 192";
    const greenLineColour = `rgba(${greenRgba}, 1)`;
    const greenLegendFillColour = `rgba(${greenRgba}, 0.4)`;

    const orangeRgba = "255, 165, 0";
    const orangeLineColour = `rgba(${orangeRgba}, 1)`;
    const orangeLegendFillColour = `rgba(${orangeRgba}, 0.4)`;

    // const showTrendLines = true;

    const dataPointCount = 15;

    const chartData: ChartData<chartjs.ChartData> = {
      // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],

      labels: Array(dataPointCount)
        .fill(0)
        .map((e, i) => (i + 1).toString(10)),

      datasets: [
        {
          label: "2017-2018",
          fill: false,
          lineTension: 0.1,

          backgroundColor: purpleLegendFillColour,
          borderColor: purpleLineColour,

          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: greyLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: purpleLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [3, 3, 4, 5, 6, 9, 10, 13, 14, 17, 20, 20, 20, 23, 24]
        },
        {
          label: "2018-2019",
          fill: false,
          lineTension: 0.1,
          backgroundColor: redLegendFillColour,
          borderColor: redLineColour,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: redLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: redLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1, 2, 2, 5, 8, 11, 14, 14, 14, 15]
        }
      ]
    };

    if (this.state.showTrendLines) {
      if (chartData.datasets) {
        chartData.datasets.push({
          label: "Playoff Form",
          fill: false,
          lineTension: 0.1,

          backgroundColor: greenLegendFillColour,
          borderColor: greenLineColour,

          borderCapStyle: "butt",
          borderDash: [5, 15],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: greenLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: greenLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          // data: [1.7, 3.4, 5.1, 6.8, 8.5, 10.2, 11.9, 13.6, 15.3, 17]
          data: Array(dataPointCount)
            .fill(0)
            .map((e, i) => (i + 1) * 1.7)
        });

        chartData.datasets.push({
          label: "Relegation Form",
          fill: false,
          lineTension: 0.1,

          backgroundColor: orangeLegendFillColour,
          borderColor: orangeLineColour,

          borderCapStyle: "butt",
          borderDash: [5, 15],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: orangeLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: orangeLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          data: Array(dataPointCount)
            .fill(0)
            .map((e, i) => (i + 1) * 1)
        });
      }
    }

    const chartOptions = {
      // responsive: true,
      maintainAspectRatio: false,
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
      <div>
        {/* <div
          className="custom-control custom-checkbox"
          style={{ margin: "30px" }}
        >
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            onChange={() => this.handleShowTrendLines()}
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Show Trend Lines
          </label>
        </div> */}
        <Line
          data={chartData}
          options={chartOptions}
          width={600}
          redraw={true}
        />
      </div>
    );
  }
}

export default PointsLineChart;
