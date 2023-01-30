import { Stack } from '@mui/system'
import { useSelector } from '../../Store/Store'
import { Graph } from './Graph/Graph'
import { textStyles } from './Graph/Graph.styles'
import { viewStyles } from './View.styles'

export const View: React.FC = () => {
  const marketRates = useSelector((state) => state.search.marketRates)

  const noActiveSearch = marketRates === null
  const noData = marketRates?.length === 0
  const isLoading = useSelector((state) => state.search.isLoading)

  return (
    <Stack style={viewStyles}>
      <Stack style={textStyles}>
        {isLoading ? (
          'Loading...'
        ) : noActiveSearch ? (
          'Search for Market Rates using the Search Bar'
        ) : noData ? (
          `Got no Data for the Search`
        ) : (
          <Graph />
        )}
      </Stack>
    </Stack>
  )
}
