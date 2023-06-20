var colorPalette = ["#00D8B6", "#008FFB", "#FEB019"];

var options = {
  series: [42, 47, 52],
  chart: {
    width: 375,
    type: "polarArea",
  },
  labels: ["Cash Paid Out", "ROPIN Tokens", "Total Earnings"],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
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
