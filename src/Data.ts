export interface Dataset {
  label: string,
  data: Array<number>
};

export interface Data {
  labels: Array<string>,
  datasets: Array<Dataset>
};
