import { emitter } from '@/utils/emitter'
import {
  BellIcon,
  ChartBarIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'
import { commentList, Comment } from './comments'
import { ChartData, barData, pieData } from './charts-data'
type CommentContent = {
  type: string
  content: Comment[]
}
type ChartContent = {
  type: string
  content: ChartData[]
}
type DropDownItem = {
  label: string
  action: () => void
}
type SecondaryCard = {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  label: string
  contentType?: CommentContent | ChartContent
  functional: boolean
  dropDownIcon: FunctionalComponent<HTMLAttributes & VNodeProps> | null
  CardDropDownItemList: DropDownItem[] | null
  bottomButton: boolean
  buttonMessage?: string
}

export const SecondaryCardList: SecondaryCard[] = [
  {
    icon: ChartBarIcon,
    label: 'Charts',
    contentType: { type: 'Charts', content: [barData, pieData] },
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
    bottomButton: false
  },
  {
    icon: BellIcon,
    label: 'Notifications',
    contentType: { type: 'Comments', content: commentList },
    functional: false,
    dropDownIcon: null,
    CardDropDownItemList: null,
    bottomButton: true,
    buttonMessage: 'Show all'
  }
]
