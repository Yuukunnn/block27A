import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { DataSet } from '../../DataSet';

function Chart() {

    console.log(DataSet)

    const totalCostByYear = DataSet.reduce((acc, transaction) => {
        const year = new Date(transaction.date).getFullYear();
        const cost = parseFloat(transaction.cost);
        if (!acc[year]) {
          acc[year] = 0;
        }
        acc[year] += cost;
        return acc;
      }, {});

    console.log(totalCostByYear)

    const revenue = [totalCostByYear[2019], totalCostByYear[2020], totalCostByYear[2021], totalCostByYear[2022]];
    const xLabels = [
      '2019',
      '2020',
      '2021',
      '2022'
    ];
    

  return (
    <>
    <h2>YoY</h2>
    <BarChart
      width={500}
      height={300}
      series={[
        { data: revenue, id: 'pvId' }
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </>
  );
}

export default Chart;
