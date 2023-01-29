import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MarketRate } from '../../Types/Data/MarketRate'
import { Port } from '../../Types/Data/Port'

interface SearchState {
  ports: Port[] | null
  origin: Port | null
  destination: Port | null
  marketRates: MarketRate[] | null
  isLoading: boolean
}

const initialState: SearchState = {
  ports: null,
  origin: null,
  destination: null,
  marketRates: null,
  isLoading: false
}

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setPorts: (state: SearchState, action: PayloadAction<Port[]>): void => {
      state.ports = action.payload
    },
    setOrigin: (state: SearchState, action: PayloadAction<Port | null>): void => {
      state.origin = action.payload
    },
    setDestination: (state: SearchState, action: PayloadAction<Port | null>): void => {
      state.destination = action.payload
    },
    setMarketRates: (state: SearchState, action: PayloadAction<MarketRate[] | null>): void => {
      state.marketRates = action.payload
    },
    setIsLoading: (state: SearchState, action: PayloadAction<boolean>): void => {
      state.isLoading = action.payload
    }
  }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer
