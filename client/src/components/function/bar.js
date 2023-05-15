import { useEffect, useState } from "react";
// import data from '../data.json'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import './bar.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// SELECT times,COUNT(DAY) FROM `user_tb` GROUP by cast(times as DATE);

function App() {

  const [chartData, setChartData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/user_day")
      setTimeout(() => {
        // console.log(data);
        setChartData({
          labels: data.map(val => val.times),
          datasets: [
            {
              label: 'Report',
              data: data.map((val) => val.sum),
              fill: true,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 200, 132, 0.5)',
            },
            {
              label: 'RReport',
              data: data.map((val) => val.times),
              fill: true,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        })
      }, 1000)
    }
    fetchData()
  }, [])

  return (
    <div className="mian">
      <div className='chart'>
        {
          chartData && chartData?.datasets && (
            <Bar
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    // position: 'top',
                  },
                  title: {
                    display: true,
                    // text: 'Revenue',
                  }

                },
              }}
              data={chartData} width={1700} height={500}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;