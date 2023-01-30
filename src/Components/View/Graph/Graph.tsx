import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Stack } from '@mui/system'
import { getGraphOptions } from '../../../Helpers/Graph/GraphHelper'
import { useSelector } from '../../../Store/Store'
import { getDatasets } from '../../../Helpers/Data/DataHelper'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import { graphStyles, checkBoxGroupStyles } from './Graph.styles'
import { MarketRateColor } from '../../../Theme/Theme'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const Graph: React.FC = () => {
  const marketRates = useSelector((state) => state.search.marketRates)

  const [showLowestRate, setShowLowestRate] = useState<boolean>(false)
  const [showAverageRate, setShowAverageRate] = useState<boolean>(true)
  const [showHighestRate, setShowHighestRate] = useState<boolean>(false)

  const labels = marketRates?.map((rate) => rate.day)
  const highestRates = marketRates?.map((rate) => rate.high) ?? []
  const averageRates = marketRates?.map((rate) => rate.mean) ?? []
  const lowestRates = marketRates?.map((rate) => rate.low) ?? []

  const datasets = getDatasets(
    lowestRates,
    averageRates,
    highestRates,
    showLowestRate,
    showAverageRate,
    showHighestRate
  )

  const options = getGraphOptions(lowestRates, highestRates)

  const data: ChartData<'line'> = {
    labels,
    datasets
  }

  return (
    <Stack style={graphStyles}>
      <Line options={options} data={data} />

      <Stack style={checkBoxGroupStyles}>
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: MarketRateColor.Highest }}
              checked={showHighestRate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setShowHighestRate(event.target.checked)
              }}
            />
          }
          label='High'
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: MarketRateColor.Average }}
              checked={showAverageRate}
              onChange={(event) => {
                setShowAverageRate(event.target.checked)
              }}
            />
          }
          label='Average'
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: MarketRateColor.Lowest }}
              checked={showLowestRate}
              onChange={(event) => {
                setShowLowestRate(event.target.checked)
              }}
            />
          }
          label='Low'
        />
      </Stack>
    </Stack>
  )
}
