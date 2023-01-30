import { Stack } from '@mui/system'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import { graphStyles, checkBoxGroupStyles } from './Graph.styles'
import { MarketRateColor } from '../../../Theme/Theme'
import { Graph } from './Graph'

export const GraphView: React.FC = () => {
  const [showLowestRate, setShowLowestRate] = useState<boolean>(false)
  const [showAverageRate, setShowAverageRate] = useState<boolean>(true)
  const [showHighestRate, setShowHighestRate] = useState<boolean>(false)

  return (
    <Stack style={graphStyles}>
      <Graph showLowestRate={showLowestRate} showAverageRate={showAverageRate} showHighestRate={showHighestRate} />

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
