type title = {
  display: boolean
  text: string
}
type legend = {
  position: string
}
type plugins = {
  legend: legend
  title: title
}
type chartOptions = {
  responsive: boolean
  plugins?: plugins
}
type datasets = {
  label: string
  backgroundColor: string
  data: number[]
}
type chartsData = {
  labels: string[]
  datasets: datasets[]
}
type chartData = {
  type: string
  chartsData: chartsData
  chartOptions: chartOptions
}

export const barData: chartData = {
  type: 'bar',
  chartsData: {
    labels: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thuresday',
      'Friday'
    ],
    datasets: [
      {
        label: 'Sign ups',
        backgroundColor: '#0083ff',
        data: [40, 20, 12, 39, 10, 40, 39]
      }
    ]
  },
  chartOptions: {
    responsive: true,
  }
}
export const pieData: chartData = {
  type: 'pie',
  chartsData: {
    labels: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thuresday',
      'Friday'
    ],
    datasets: [
      {
        label: 'Sign ups',
        backgroundColor: '#0083ff',
        data: [40, 20, 12, 39, 10, 40, 39]
      }
    ]
  },
  chartOptions: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  }
}
