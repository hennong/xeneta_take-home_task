import { ChartOptions } from 'chart.js'

export const getGraphOptions = (lowestRates: number[], highestRates: number[]): ChartOptions<'line'> => {
  return {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5
        }
      },
      y: {
        suggestedMin: Math.min(...lowestRates) - 100,
        suggestedMax: Math.max(...highestRates) + 100
      }
    },
    plugins: {
      legend: {
        position: 'center',
        align: 'end',
        onClick: (event) => event.native?.stopPropagation()
      },
      title: {
        text: 'Ocean Market Rates',
        display: true
      }
    }
  }
}
