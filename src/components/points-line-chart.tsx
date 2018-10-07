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

    // 2016 - Alice Blue
    const aliceBlueRgba = "0, 0, 255";
    const aliceBlueLineColour = `rgba(${aliceBlueRgba}, 1)`;
    const aliceBlueLegendFillColour = `rgba(${aliceBlueRgba}, 0.4)`;

    const greenRgba = "75, 192, 192";
    const greenLineColour = `rgba(${greenRgba}, 1)`;
    const greenLegendFillColour = `rgba(${greenRgba}, 0.4)`;

    const orangeRgba = "255, 165, 0";
    const orangeLineColour = `rgba(${orangeRgba}, 1)`;
    const orangeLegendFillColour = `rgba(${orangeRgba}, 0.4)`;

    // const showTrendLines = true;

    const dataPointCount = 25;

    const labels: string[] = [];

    for (let index = 0; index < dataPointCount; index++) {
      const gameNumber = index + 1;

      // const element = (index + 1) % 5 === 0 ? (index + 1).toString(10) : "";
      const element =
        gameNumber % 5 === 0 || gameNumber === 1 || gameNumber === 23
          ? gameNumber.toString(10)
          : "";

      labels.push(element);
    }

    const points2016: number[] = [
      3,
      3,
      0,
      0,
      3,
      1,
      0,
      3,
      1,
      3, // 24 Sep

      3,
      3,
      0,
      0,
      3,
      1,
      0,
      0,
      0,
      3, // 3 Dec

      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      3, // 4 Feb 2017

      1,
      0,
      0,
      1,
      0,
      1,
      1,
      3,
      3,
      0, // 4 Apr 2017

      3,
      3,
      1,
      3,
      3,
      0
    ];

    const pointsRunning2016: number[] = [];

    for (let index = 0; index < points2016.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2016[index - 1];

      const nextElement = runningTotal + points2016[index];

      pointsRunning2016.push(nextElement);
    }

    const points2017: number[] = [
      3,
      0,
      1,
      1,
      1,
      3,
      1,
      3,
      1,
      3, // 26 Sep
      3,
      1,
      0,
      3,
      3,
      3,
      1,
      0,
      3,
      3, // 3 Dec
      3,
      3,
      1,
      3,
      0,
      0,
      0,
      1,
      3,
      0, // 2 Feb 2018
      1,
      1,
      1,
      0,
      3,
      0,
      1,
      3,
      1,
      0, // 2 Apr 2018
      0,
      3,
      0,
      1,
      1,
      0
    ];

    const pointsRunning2017: number[] = [];

    for (let index = 0; index < points2017.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2017[index - 1];

      const nextElement = runningTotal + points2017[index];

      pointsRunning2017.push(nextElement);
    }

    const points2018: number[] = [
      1,
      1,
      0,
      3,
      3,
      3,
      3,
      0,
      0,
      1, // 28 Sep
      1,
      0
    ];

    const pointsRunning2018: number[] = [];

    for (let index = 0; index < points2018.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2018[index - 1];

      const nextElement = runningTotal + points2018[index];

      pointsRunning2018.push(nextElement);
    }

    const chartData: ChartData<chartjs.ChartData> = {
      // labels: Array(dataPointCount)
      //   .fill(0)
      //   .map((e, i) => (i + 1).toString(10)),

      labels: labels,

      datasets: [
        {
          label: "2016-",
          fill: false,
          lineTension: 0.1,

          backgroundColor: aliceBlueLegendFillColour,
          borderColor: aliceBlueLineColour,

          borderCapStyle: "butt",
          borderDash: [3, 3],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: aliceBlueLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: aliceBlueLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2016
        },
        {
          label: "2017-",
          fill: false,
          lineTension: 0.1,

          backgroundColor: purpleLegendFillColour,
          borderColor: purpleLineColour,

          borderCapStyle: "butt",
          borderDash: [3, 3],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: purpleLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: purpleLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2017
        },
        {
          label: "2018-",
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
          data: pointsRunning2018
        }
      ]
    };

    if (this.state.showTrendLines) {
      const playoffFormValues: number[] = [];

      for (let index = 0; index < dataPointCount; index++) {
        const element = (index + 1) * 1.7;
        playoffFormValues.push(element);
      }

      const relegationFormValues: number[] = [];

      for (let index = 0; index < dataPointCount; index++) {
        const element = (index + 1) * 1.0;
        relegationFormValues.push(element);
      }

      if (chartData.datasets) {
        chartData.datasets.push({
          label: "Playoffs",
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

          data: playoffFormValues
        });

        chartData.datasets.push({
          label: "Relegation",
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

          data: relegationFormValues
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
      <div style={{ position: "relative", height: "80vh" }}>
        <div
          className="custom-control custom-checkbox"
          style={{ margin: "10px 30px 5px 25px" }}
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
        </div>
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
