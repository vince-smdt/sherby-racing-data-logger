import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import "./App.css";

function App() {
  return <>
    <Line
      datasetIdKey='id'
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Test1',
            data: [0, 4, 3, 1, 5, 7, 8],
          },
          {
            label: 'Test2',
            data: [2, 1, 4, 5, 5, 3, 7],
          },
        ]
      }}
    />
  </>;
}

export default App;
