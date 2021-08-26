import React, { Component } from "react";
// import * as d3 from 'd3'
import * as d3 from 'd3'
/* eslint-disable import/first */
window.d3 = d3;
import "d3-gantt-chart";

const Gant = (props) => {
    React.useEffect(() => {
        drawChart()
      });

      const drawChart =() => {
        const { tasks, taskTypes, taskStatus, tickFormat } = props;
        var gantt = window.d3
          .gantt()
          .taskTypes(taskTypes)
          .taskStatus(taskStatus)
          .tickFormat(tickFormat);
        gantt(tasks);
      }
      return null;
}

export default Gant;
