import { faker } from "@faker-js/faker";

const areaLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const barLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const mixedLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const pieLabels = ["Facebook", "Youtube", "Github", "LinkedIn", "Twitter"];
const doughnutLabels = ["Facebook", "Youtube", "Github", "LinkedIn", "Twitter"];
const polerLabels = ["Facebook", "Youtube", "Github", "LinkedIn", "Twitter"];
const radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running" ];

const areaData = {
  labels: areaLabels,
  datasets: [
    {
      label: "Sales",
      data: areaLabels.map(() => faker.number.int({ min: 50, max: 200 })),
      backgroundColor: "rgba(75, 192, 192, 0.7)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      pointRadius: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      fill: true,
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Expenses",
      data: areaLabels.map(() => faker.number.int({ min: 10, max: 150 })),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      pointRadius: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      fill: true,
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Prchese",
      data: areaLabels.map(() => faker.number.int({ min: 10, max: 150 })),
      backgroundColor: "rgba(53, 162, 235, 0.7)",
      borderColor: "rgba(53, 162, 235, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(53, 162, 235, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(53, 162, 235, 1)",
      pointRadius: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      fill: true,
      cubicInterpolationMode: "monotone",
    },
  ],
};

const barData = {
  labels: barLabels,
  datasets: [
    {
      label: "dataset 1",
      data: barLabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderWidth: 1,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      hoverBackgroundColor: "rgba(255, 99, 132, 1)",
      tension: 0.1,
    },
    {
      label: "dataset 2",
      data: barLabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderWidth: 1,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      hoverBackgroundColor: "rgba(53, 162, 235, 1)",
      tension: 0.1,
    },
    {
      label: "dataset 3",
      data: barLabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderWidth: 1,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      tension: 0.1,
    },
  ],
};

const bubbleData = {
  datasets: [
    {
      label: "Red Dataset",
      data: Array.from({ length: 10 }, () => ({
        x: faker.number.int({ min: 0, max: 100 }),
        y: faker.number.int({ min: 0, max: 100 }),
        r: faker.number.int({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
      hoverBorderColor: "rgba(255, 99, 132, 1)",
      hoverBorderWidth: 2,
    },
    {
      label: "Blue Dataset",
      data: Array.from({ length: 10 }, () => ({
        x: faker.number.int({ min: 0, max: 100 }),
        y: faker.number.int({ min: 0, max: 100 }),
        r: faker.number.int({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderColor: "rgba(53, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(53, 162, 235, 0.8)",
      hoverBorderColor: "rgba(53, 162, 235, 1)",
      hoverBorderWidth: 2,
    },
  ],
};

const doughnutData = {
  labels: doughnutLabels,
  datasets: [
    {
      label: "Time spent",
      data: doughnutLabels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: [
        "rgba(255, 99, 132, .5)",
        "rgba(255, 159, 64, .5)",
        "rgba(255, 205, 86, .5)",
        "rgba(75, 192, 192, .5)",
        "rgba(54, 162, 235, .5)",
        "rgba(153, 102, 255, .5)",
      ],
      hoverOffset: 4,
      hoverBackgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 2,
    },
  ],
};

const lineData = {
  labels: lineLabels,
  datasets: [
    {
      label: "dataset 1",
      data: lineLabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderWidth: 1,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 10,
      cubicInterpolationMode: "monotone",
      pointStyle: "rectRot",
    },
    {
      label: "dataset 2",
      data: lineLabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderWidth: 1,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      pointBackgroundColor: "rgba(53, 162, 235, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(53, 162, 235, 1)",
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 10,
      tension: 0.5,
      pointStyle: "triangle",
    },
    {
      label: "dataset 3",
      data: lineLabels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderWidth: 1,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 10,
    },
  ],
};

const mixedData = {
  labels: mixedLabels,
  datasets: [
    {
      type: "bar",
      label: "Bar dataset",
      data: mixedLabels.map(() => faker.number.int({ min: -100, max: 100 })),
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      order: 1,
    },
    {
      type: "line",
      label: "Line dataset",
      data: mixedLabels.map(() => faker.number.int({ min: -100, max: 100 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      pointBorderColor: "rgba(255, 99, 132, .5)",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      pointStyle: "star",
      pointRadius: 10,
      pointHoverRadius: 15,
      pointHitRadius: 10,
      fill: false,
      tension: 0.4,
      order: 0,
    },
  ],
};

const pieData = {
  labels: pieLabels,
  datasets: [
    {
      label: "Time spent",
      data: pieLabels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: [
        "rgba(255, 99, 132, .5)",
        "rgba(255, 159, 64, .5)",
        "rgba(255, 205, 86, .5)",
        "rgba(75, 192, 192, .5)",
        "rgba(54, 162, 235, .5)",
        "rgba(153, 102, 255, .5)",
      ],
      hoverOffset: 4,
      hoverBackgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 2,
    },
  ],
};

const polerData = {
  labels: polerLabels,
  datasets: [
    {
      label: "Time spent",
      data: polerLabels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 205, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(54, 162, 235, 0.5)",
      ],
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      hoverOffset: 4,
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
      ],
    },
  ],
};

const radarData = {
  labels: radarLabels,
  datasets: [
    {
      label: "Jafry",
      data: radarLabels.map(() => faker.number.int({ min: 0, max: 100 })),
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
      pointStyle: "rectRot",
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 10,
    },
    {
      label: "Abed",
      data: radarLabels.map(() => faker.number.int({ min: 0, max: 100 })),
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      pointStyle: "triangle",
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 10,
    },
  ],
};

const scatterData = {
  datasets: [
    {
      label: "dataset 1",
      data: Array.from({ length: 20 }, () => ({
        x: faker.number.int({ min: -100, max: 100 }),
        y: faker.number.int({ min: -100, max: 100 }),
      })),
      borderWidth: 1,
      backgroundColor: "rgba(255, 99, 132, .5)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      pointBorderColor: "rgba(255, 99, 132, 1)",
      pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      pointRadius: 10,
      pointHoverRadius: 15,
      pointHitRadius: 10,
      tension: 0.1,
    },
    {
      label: "dataset 2",
      data: Array.from({ length: 15 }, () => ({
        x: faker.number.int({ min: -100, max: 100 }),
        y: faker.number.int({ min: -100, max: 100 }),
      })),
      borderWidth: 2,
      backgroundColor: "rgba(53, 162, 235, .5)",
      borderColor: "rgb(53, 162, 235)",
      pointBorderColor: "rgba(53, 162, 235, 1)",
      pointHoverBackgroundColor: "rgba(53, 162, 235, 1)",
      pointHoverBorderColor: "rgba(53, 162, 235, 1)",
      pointRadius: 10,
      pointHoverRadius: 15,
      pointHitRadius: 10,
      tension: 0.1,
    },
  ],
};

export { areaData, barData, bubbleData, doughnutData, lineData, mixedData, pieData, polerData, radarData, scatterData };

