import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.sass'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement,PointElement,LineElement)
createApp(App).use(router).mount('#app')
