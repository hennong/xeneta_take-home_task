import { MarketRate } from '../../Types/Data/MarketRate'
import { Port } from '../../Types/Data/Port'
import { instance } from '../Axios'

export const getPorts = async (): Promise<Port[]> => {
  const response = await instance.get('/ports')

  const ports = response.data

  return ports
}

export const getMarketRates = async (originCode: string, destinationCode: string): Promise<MarketRate[]> => {
  const response = await instance.get('/rates', {
    params: {
      origin: originCode, //
      destination: destinationCode
    }
  })

  const marketRates = response.data

  return marketRates
}
