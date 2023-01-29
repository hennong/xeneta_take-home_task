import { getMarketRates as getMarketRatesFromApi } from '../../Api/Services/Data.service'
import { searchActions } from '../States/SearchState'
import { StoreThunk } from '../Store'

export const getMarketRates = (): StoreThunk<Promise<void>> => {
  return async (dispatch, getState): Promise<void> => {
    try {
      dispatch(searchActions.setIsLoading(true))

      const originCode = getState().search.origin?.code!
      const destinationCode = getState().search.destination?.code!

      const marketRates = await getMarketRatesFromApi(originCode, destinationCode)

      dispatch(searchActions.setMarketRates(marketRates))

      return Promise.resolve()
    } catch (error) {
      dispatch(searchActions.setMarketRates([]))

      return Promise.reject()
    } finally {
      dispatch(searchActions.setIsLoading(true))
    }
  }
}
