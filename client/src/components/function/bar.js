import { useEffect, useState } from "react";
// import data from '../data.json'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import axios from "axios";
import './bar.css';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function App() {

  const [chartData, setChartData] = useState({})

  useEffect(() => {
const fetchData = async () => {
  const {data} = await axios.get("http://localhost:5000/user_tb")
    setTimeout(() => {
      console.log(data);
      setChartData({
        labels: data.map(item => item.times),
        datasets: [
          {
            label: 'Revenue',
            data: data.map((item) => item.iduser_tb),
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 200, 132, 0.5)',
          },
          // {
          //   label: 'RReport',
          //   data: data.map((item) => item.trigia-100000),
          //   fill: true,
          //   borderColor: 'rgb(255, 99, 132)',
          //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
          // },
        ],
      })
    }, 1000)
  }
  fetchData()
  }, [])
  
  return (
    <div className="Appp">
      <div className='chart'>
        {
          chartData && chartData?.datasets && (
            <Line 
              options={ {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Revenue',
                    },
                    title:{
                      display:true,
                      text:'Report',
                
                    }
                  },
                }} 
              data={chartData}  width={1700} height={500}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;