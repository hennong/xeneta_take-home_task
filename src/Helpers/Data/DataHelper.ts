import { ChartDataset } from 'chart.js'
import { MarketRateColor } from '../../Theme/Theme'
import { MarketRate } from '../../Types/Data/MarketRate'

export const areRatesSet = (marketRates: MarketRate[]) => {
  return !!marketRates[0]?.mean
}

export const getDatasets = (
  lowestRates: number[],
  averageRates: number[],
  highestRates: number[],
  showLowest: boolean,
  showAverage: boolean,
  showHighest: boolean
): ChartDataset<'line'>[] => {
  const datasets: ChartDataset<'line'>[] = [
    ...(showHighest
      ? [
          {
            label: 'Highest Rate',
            data: highestRates,
            borderColor: MarketRateColor.Highest,
            backgroundColor: '#ffe45e'
          }
        ]
      : []),

    ...(showAverage
      ? [
          {
            label: 'Average Rate',
            data: averageRates,
            borderColor: MarketRateColor.Average,
            backgroundColor: '#368f8b'
          }
        ]
      : []),

    ...(showLowest
      ? [
          {
            label: 'Lowest Rate',
            data: lowestRates,
            borderColor: MarketRateColor.Lowest,
            backgroundColor: '#f26a8d'
          }
        ]
      : [])
  ]

  return datasets
}
