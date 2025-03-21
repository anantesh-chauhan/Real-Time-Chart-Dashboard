function generateNewData() {
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1)
    };
}

function generateBubbleData() {
    return Array.from({ length: 6 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 10 + 5 }));
}

function generateScatterData() {
    return Array.from({ length: 12 }, () => ({ x: Math.random() * 100, y: Math.random() * 100 }));
}

function updateChart(chart, data) {
    chart.data.labels = data.labels;
    chart.data.datasets[0].data = data.values;
    chart.update();
}

function updateBubbleChart(chart) {
    chart.data.datasets[0].data = generateBubbleData();
    chart.update();
}

function updateScatterChart(chart) {
    chart.data.datasets[0].data = generateScatterData();
    chart.update();
}

// Get chart elements
const ctxArea = document.getElementById('areaChart').getContext('2d');
const ctxBar = document.getElementById('barChart').getContext('2d');
const ctxPie = document.getElementById('pieChart').getContext('2d');
const ctxHistogram = document.getElementById('histogramChart').getContext('2d');
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
const ctxRadar = document.getElementById('radarChart').getContext('2d');
const ctxLine = document.getElementById('lineChart').getContext('2d');
const ctxBubble = document.getElementById('bubbleChart').getContext('2d');
const ctxScatter = document.getElementById('scatterChart').getContext('2d');
const ctxHeatmap = document.getElementById('heatmapChart').getContext('2d');
const ctxWaterfall = document.getElementById('waterfallChart').getContext('2d');
const ctxGauge = document.getElementById('gaugeChart').getContext('2d');
const ctxTreeMap = document.getElementById('treemapChart').getContext('2d');
const ctxSunburst = document.getElementById('sunburstChart').getContext('2d');
const ctxCandlestick = document.getElementById('candlestickChart').getContext('2d');

// Create Charts
const areaChart = new Chart(ctxArea, { type: 'line', data: { labels: [], datasets: [{ label: 'Area Chart', data: [], borderColor: 'blue', backgroundColor: 'rgba(0, 0, 255, 0.2)', fill: true }] } });
const barChart = new Chart(ctxBar, { type: 'bar', data: { labels: [], datasets: [{ label: 'Bar Chart', data: [], backgroundColor: 'rgba(75, 192, 192, 0.2)' }] } });
const pieChart = new Chart(ctxPie, { type: 'pie', data: { labels: [], datasets: [{ label: 'Pie Chart', data: [], backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'] }] } });
const histogramChart = new Chart(ctxHistogram, { type: 'bar', data: { labels: [], datasets: [{ label: 'Histogram', data: [], backgroundColor: 'rgba(255, 99, 132, 0.5)' }] } }, options = { scales: { x: { beginAtZero: true }, y: { beginAtZero: true } } });
const doughnutChart = new Chart(ctxDoughnut, { type: 'doughnut', data: { labels: [], datasets: [{ label: 'Doughnut Chart', data: [], backgroundColor: ['pink', 'cyan', 'yellow', 'blue', 'red', 'green'] }] } });
const radarChart = new Chart(ctxRadar, { type: 'radar', data: { labels: [], datasets: [{ label: 'Radar Chart', data: [], backgroundColor: 'rgba(0, 255, 0, 0.3)', borderColor: 'green' }] } });
const lineChart = new Chart(ctxLine, { type: 'line', data: { labels: [], datasets: [{ label: 'Line Chart', data: [], borderColor: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)', fill: true }] } });
const bubbleChart = new Chart(ctxBubble, { type: 'bubble', data: { datasets: [{ label: 'Bubble Chart', data: generateBubbleData(), backgroundColor: 'rgba(255, 159, 64, 0.5)' }] } });
const scatterChart = new Chart(ctxScatter, { type: 'scatter', data: { datasets: [{ label: 'Scatter Plot', data: generateScatterData(), backgroundColor: 'rgba(54, 162, 235, 0.5)' }] } });
const heatmapChart = new Chart(ctxHeatmap, { type: 'bar', data: { labels: [], datasets: [{ label: 'Heatmap', data: [], backgroundColor: 'rgba(255, 206, 86, 0.5)' }] } });
const waterfallChart = new Chart(ctxWaterfall, { type: 'bar', data: { labels: [], datasets: [{ label: 'Waterfall', data: [], backgroundColor: 'rgba(153, 102, 255, 0.5)' }] } });
const gaugeChart = new Chart(ctxGauge, { type: 'doughnut', data: { labels: ['Used', 'Remaining'], datasets: [{ data: [60, 40], backgroundColor: ['green', 'lightgray'] }] } });
const treemapChart = new Chart(ctxTreeMap, { type: 'bar', data: { labels: [], datasets: [{ label: 'Treemap', data: [], backgroundColor: 'rgba(255, 99, 132, 0.5)' }] } });
const sunburstChart = new Chart(ctxSunburst, { type: 'pie', data: { labels: [], datasets: [{ label: 'Sunburst Chart', data: [], backgroundColor: ['blue', 'red', 'green', 'yellow', 'purple', 'orange'] }] } });
const candlestickChart = new Chart(ctxCandlestick, { type: 'bar', data: { labels: [], datasets: [{ label: 'Candlestick', data: [], backgroundColor: 'rgba(255, 159, 64, 0.5)' }] } });

// Update charts every 2 seconds
function refreshCharts() {
    const newData = generateNewData();
    updateChart(areaChart, newData);
    updateChart(barChart, newData);
    updateChart(pieChart, newData);
    updateChart(histogramChart, newData);
    updateChart(doughnutChart, newData);
    updateChart(radarChart, newData);
    updateChart(lineChart, newData);
    updateBubbleChart(bubbleChart);
    updateScatterChart(scatterChart);
    updateChart(heatmapChart, newData);
    updateChart(waterfallChart, newData);
    updateChart(gaugeChart, newData);
    updateChart(treemapChart, newData);
    updateChart(sunburstChart, newData);
    updateChart(candlestickChart, newData);
}

// Initial load
refreshCharts();
setInterval(refreshCharts, 2000);