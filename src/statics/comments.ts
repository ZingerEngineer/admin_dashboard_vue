import { InboxArrowDownIcon } from '@heroicons/vue/24/outline'
import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

export type Comment = {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  label: string
  subLabel:string
}
export const commentList: Comment[] = [
  {
    icon: InboxArrowDownIcon,
    label: 'New comment',
    subLabel: '21 days ago'
  },
  {
    icon: InboxArrowDownIcon,
    label: 'New comment',
    subLabel: '23 days ago'
  },
  {
    icon: InboxArrowDownIcon,
    label: 'New comment',
    subLabel: '10 days ago'
  }
]
