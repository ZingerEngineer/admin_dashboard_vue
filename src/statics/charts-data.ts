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
  maintainAspectRatio?: boolean
}
type datasets = {
  label: string
  backgroundColor: string | string[]
  data: number[]
}
type chartsData = {
  labels: string[]
  datasets: datasets[]
}
export type ChartData = {
  type: string
  chartsData: chartsData
  chartOptions: chartOptions
}

export const barData: ChartData = {
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
    maintainAspectRatio:false
  }
}
export const pieData: ChartData = {
  type: 'pie',
  chartsData: {
    labels: ['Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thuresday',
    'Friday'],
    datasets: [
      {
        label: 'Sign ups',
        backgroundColor: ['#00e5fc', '#00fc22', '#1200fc','#fc007c','#fafc00','#fc0000','#8000fc'],
        data: [40, 20, 12, 39, 10, 40, 39]
      }
    ]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio:false
  }
}
export const lineData: ChartData = {
  type: 'line',
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
    maintainAspectRatio:false
  }
}
