"use client";
import React, { Component, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Home() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                ],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    });
    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="500"
                    />
                </div>
            </div>
        </div>
    );
}

/* class App extends Component {
  constructor(props:{}) {
    super(props);

    this.state = ;
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App; */
