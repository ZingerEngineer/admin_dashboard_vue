import { emitter } from '@/utils/emitter'
import {
  BellIcon,
  ChartBarIcon,
  ChevronDownIcon,
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
type comments = {
  icon : FunctionalComponent<HTMLAttributes & VNodeProps>
  label : string
}
type SecondaryCard = {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  label: string
  contentType : string
  functional: boolean
  dropDownIcon: FunctionalComponent<HTMLAttributes & VNodeProps> | null
  CardDropDownItemList: DropDownItem[] | null
  bottomButton : boolean
}

export const SecondaryCardList: SecondaryCard[] = [
  {
    icon: ChartBarIcon,
    label: 'Charts',
    contentType : "chart",
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
    ],
    bottomButton : false
  },
  {
    icon: BellIcon,
    label: 'Notifications',
    contentType : "comments",
    functional: false,
    dropDownIcon: null,
    CardDropDownItemList: null,
    bottomButton : true
  }
]
