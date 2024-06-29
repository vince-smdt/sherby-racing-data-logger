import { useEffect, useState } from 'react';
import './App.css';
import 'chart.js/auto';
import { parseCsvToChartData } from './parseCsv';
import { Data } from './data';
import { testData } from './testData';
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
      datasetIdKey='id'
      data={data}
    />
  </>;
}

export default App;
