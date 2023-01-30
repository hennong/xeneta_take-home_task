import { Theme } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#004e64'
    },
    background: {
      default: '#979dac'
    }
  }
})

export enum MarketRateColor {
  Highest = '#ffbc42',
  Average = '#218380',
  Lowest = '#d81159'
}
