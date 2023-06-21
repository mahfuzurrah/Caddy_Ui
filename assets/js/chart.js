var colorPalette = ["#EAF0FF", "#E0F0E6", "#FFF7ED"];

var options = {
  series: [42, 47, 52],
  chart: {
    width: 375,
    type: "polarArea",
    colors: colorPalette,
  },
  labels: ["Cash Paid Out", "ROPIN Tokens", "Total Earnings"],
  fill: {
    opacity: 1,
    colors: colorPalette,
    stroke: {
      colors: ['#000000']
    }
  },
  stroke: {
    width: 5,
    colors: "#fff",
  },
  colors: colorPalette,
  yaxis: {
    show: false,
  },
  legend: {
    position: "bottom",
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: "light",
      shadeIntensity: 0.6,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();