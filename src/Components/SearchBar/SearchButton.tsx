import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from '../../Store/Store'
import { getMarketRates } from '../../Store/Thunks/getMarketRates'

export const SearchButton: React.FC = () => {
  const dispatch = useDispatch()
  const destination = useSelector((state) => state.search.destination)
  const origin = useSelector((state) => state.search.origin)

  const disabled = !destination || !origin

  const onClick = () => {
    dispatch(getMarketRates())
  }

  return (
    <Button color='primary' size='large' aria-label='Search' disabled={disabled} onClick={onClick}>
      Search <SearchIcon />
    </Button>
  )
}
