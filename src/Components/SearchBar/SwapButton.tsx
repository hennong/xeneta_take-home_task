import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import { Button } from '@mui/material'
import { batch } from 'react-redux'
import { searchActions } from '../../Store/States/SearchState'
import { useDispatch, useSelector } from '../../Store/Store'

export const SwapButton: React.FC = () => {
  const origin = useSelector((state) => state.search.origin)
  const destination = useSelector((state) => state.search.destination)

  const disabled = !destination && !origin

  const dispatch = useDispatch()

  const swapPorts = () => {
    batch(() => {
      dispatch(searchActions.setOrigin(destination))
      dispatch(searchActions.setDestination(origin))
    })
  }

  return (
    <Button color='primary' aria-label='Swap' size='small' onClick={swapPorts} disabled={disabled}>
      <SwapHorizIcon />
    </Button>
  )
}
