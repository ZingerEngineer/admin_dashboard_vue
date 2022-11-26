import {
  BellIcon,
  ChartBarIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import { DefinedComponent } from '@vue/test-utils/dist/types'
import { FunctionalComponent, HTMLAttributes, VNodeProps} from 'vue'
import BarChart from '../components/BarChart.vue'
type ComponentList = {
 label:string 
 component: DefinedComponent
}
type SecondaryCard = {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  label: string
  functional: boolean
  dropDownIcon: FunctionalComponent<HTMLAttributes & VNodeProps> | null
  CardDropDownItems: string[] | ComponentList[] | null
}

export const SecondaryCardList: SecondaryCard[] = [
  {
    icon: ChartBarIcon,
    label: 'Charts',
    functional: true,
    dropDownIcon: ChevronDownIcon,
    CardDropDownItems: [
     {
      label: "Bar chart",
      component: BarChart
     },{
      label: "Pie chart",
      component: BarChart
     },{
      label: "Line chart",
      component: BarChart
     }
    ]
  },
  {
    icon: BellIcon,
    label: 'Notifications',
    functional: false,
    dropDownIcon: null,
    CardDropDownItems: null
  }
]
