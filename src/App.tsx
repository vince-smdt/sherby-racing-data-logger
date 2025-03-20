import { useEffect, useState } from 'react';
import './App.css';
import 'chart.js/auto';
import { parseCsvToChartData } from './ParseCsv';
import { Data } from './Data';
import { testData } from './TestData';
import { Line } from 'react-chartjs-2';

function App() {
  let [data, setData] = useState<Data>({ labels: [], datasets: [] });

  useEffect(() => {
    console.log("App has loaded.");
    const newData = parseCsvToChartData(testData);
    if (newData) setData(newData);
  }, []);

  return <>
    <Line
      id='main-chart'
      datasetIdKey='id'
      data={data}
    />
  </>;
}

export default App;
