import { Data, Dataset } from "./Data";

export function parseCsvToChartData(content: string): Data | null {
  const lines = content.split(/\r?\n/);
  const headers = lines[0].split(',');
  const timestamps = new Array<string>;
  const datasets = new Array<Dataset>;

  // Initiate value arrays in data dictionary
  for (let hi = 1; hi < headers.length; hi++) {
    datasets.push({
      label: headers[hi],
      data: new Array<number>()
    });
  }

  // Read csv content into arrays
  for (let li = 1; li < lines.length; li++) {
    const values = lines[li].split(',');

    if (headers.length !== values.length) {
      console.error(`parseCsv: Wrong number of columns at line ${li + 1}, expecting ${headers.length} columns, found ${values.length}`);
      return null;
    }

    timestamps.push(values[0]);

    for (let vi = 1; vi < values.length; vi++) {
      const value = Number(values[vi]);

      if (isNaN(value)) {
        console.error(`parseCsv: Not a number value at line ${li + 1}, column ${vi + 1}.`);
        return null;
      }

      datasets[vi - 1].data.push(value);
    }
  }

  return {
    labels: timestamps,
    datasets: datasets
  };
}
