import { emitter } from '@/utils/emitter'
import {
  BellIcon,
  ChartBarIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps
} from 'vue'
type DropDownItem = {
  label: string
  action: () => void
}
type SecondaryCard = {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  label: string
  functional: boolean
  dropDownIcon: FunctionalComponent<HTMLAttributes & VNodeProps> | null
  CardDropDownItemList: DropDownItem[] | null
}

export const SecondaryCardList: SecondaryCard[] = [
  {
    icon: ChartBarIcon,
    label: 'Charts',
    functional: true,
    dropDownIcon: ChevronDownIcon,
    CardDropDownItemList: [
      {
        label: 'Bar chart',
        action: () => emitter.emit('change-secondary-card-chart-type', 'bar')
      },
      {
        label: 'Pie chart',
        action: () => emitter.emit('change-secondary-card-chart-type', 'pie')
      },
      {
        label: 'Line chart',
        action: () => emitter.emit('change-secondary-card-chart-type', 'line')
      }
    ]
  },
  {
    icon: BellIcon,
    label: 'Notifications',
    functional: false,
    dropDownIcon: null,
    CardDropDownItemList: null
  }
]
