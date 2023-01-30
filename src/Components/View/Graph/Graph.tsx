import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js'
import { getDatasets } from '../../../Helpers/Data/DataHelper'
import { Line } from 'react-chartjs-2'
import { getGraphOptions } from '../../../Helpers/Graph/GraphHelper'
import { useSelector } from '../../../Store/Store'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export interface IGraph {
  showLowestRate: boolean
  showAverageRate: boolean
  showHighestRate: boolean
}

export const Graph: React.FC<IGraph> = (props) => {
  const { showLowestRate, showAverageRate, showHighestRate } = props

  const marketRates = useSelector((state) => state.search.marketRates)

  const labels = marketRates?.map((rate) => rate.day) ?? []
  const highestRates = marketRates?.map((rate) => rate.high) ?? []
  const averageRates = marketRates?.map((rate) => rate.mean) ?? []
  const lowestRates = marketRates?.map((rate) => rate.low) ?? []

  const datasets = getDatasets(
    lowestRates,
    averageRates,
    highestRates,
    showLowestRate,
    showAverageRate,
    showHighestRate
  )

  const options = getGraphOptions(lowestRates, highestRates)

  const data: ChartData<'line'> = {
    labels,
    datasets
  }

  return <Line options={options} data={data} />
}
