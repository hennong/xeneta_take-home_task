import { Stack } from '@mui/system'
import { useEffect } from 'react'
import { searchActions } from '../../Store/States/SearchState'
import { useDispatch, useSelector } from '../../Store/Store'
import { getPorts } from '../../Store/Thunks/getPorts'
import { Port } from '../../Types/Data/Port'
import { PortDirection } from '../../Types/PortDirection/PortDirection'
import { PortField } from './PortField'
import { searchBarStyles } from './SearchBar.styles'
import { SearchButton } from './SearchButton'
import { SwapButton } from './SwapButton'

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const origin = useSelector((state) => state.search.origin)
  const destination = useSelector((state) => state.search.destination)

  useEffect(() => {
    dispatch(getPorts())
  }, [])

  const setOrigin = (origin: Port | null) => {
    dispatch(searchActions.setOrigin(origin))
  }

  const getOrigin = () => origin

  const setDestination = (destination: Port | null) => {
    dispatch(searchActions.setDestination(destination))
  }

  const getDestination = () => destination

  const currentSelectedPorts: (Port | null)[] = [origin, destination]

  return (
    <Stack style={searchBarStyles}>
      <PortField
        direction={PortDirection.From}
        setPort={setOrigin}
        getPort={getOrigin}
        currentSelectedPorts={currentSelectedPorts}
      />
      <SwapButton />
      <PortField
        direction={PortDirection.From}
        setPort={setDestination}
        getPort={getDestination}
        currentSelectedPorts={currentSelectedPorts}
      />
      <SearchButton />
    </Stack>
  )
}
