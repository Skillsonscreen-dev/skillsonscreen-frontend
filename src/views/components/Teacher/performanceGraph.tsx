import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const state = {
    labels: ['July', 'August', 'September',
             'October', 'November', 'December'],
    datasets: [
      {
        label: 'Enrolled',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(7, 190, 247, 0.5)',
        borderColor: '#07BEF7',
        borderWidth: 3,
        data: [65, 59, 80, 81, 56, 20]
      }
    ]
  }
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
const PerfomanceGraph = () => {
    return ( 
        <div className="graph">
          <Line
          style={{height: "320px"}}
          data={state}
          options={options}
          />
        </div>
     );
}
 
export default PerfomanceGraph;