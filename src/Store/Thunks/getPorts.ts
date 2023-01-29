import { Port } from '../../Types/Data/Port'
import { getPorts as getPortsFromApi } from '../../Api/Services/Data.service'
import { searchActions } from '../States/SearchState'
import { StoreThunk } from '../Store'

export const getPorts = (): StoreThunk<Promise<void>> => {
  return async (dispatch, getState): Promise<void> => {
    try {
      const ports = await getPortsFromApi()

      dispatch(searchActions.setPorts(ports))

      return Promise.resolve()
    } catch (error) {
      dispatch(searchActions.setPorts([]))

      return Promise.reject()
    }
  }
}
