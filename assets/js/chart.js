var colorPalette = ["#EAF0FF", "#E0F0E6", "#FFF7ED"];

var options = {
  series: [42, 47, 52],
  chart: {
    width: 340,
    type: "polarArea",
  },
  labels: ["Cash Paid Out", "OPIN tokens", "Total Earnings"],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 5,
    colors: "#fff",
  },
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
  // colors: colorPalette,
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
