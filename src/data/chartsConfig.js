const areaOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    y: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

const barOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    y: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
});

const bubbleOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    y: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

const doughnutOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  plugins: {
    legend: {
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

const lineOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    y: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
});

const mixedOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    y: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

const pieOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },

  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

const polerOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    r: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

const radarOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    r: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      pointLabels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
        font: {
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
});


const scatterOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2,
  },
  scales: {
    x: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    y: {
      grid: {
        color: isDark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)",
      },
      ticks: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: isDark ? "rgba(255, 255, 255, .7)" : "rgba(0, 0, 0, .7)",
      },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  tension: 0.2,
});

export { areaOptions, barOptions, bubbleOptions, doughnutOptions, lineOptions, mixedOptions, pieOptions, polerOptions, radarOptions, scatterOptions };

