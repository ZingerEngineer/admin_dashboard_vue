import { InboxArrowDownIcon } from '@heroicons/vue/24/outline'
import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

type comment = {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  label: string
}
export const commentList: comment[] = [
  {
    icon: InboxArrowDownIcon,
    label: 'New comment'
  },
  {
    icon: InboxArrowDownIcon,
    label: 'New comment'
  },
  {
    icon: InboxArrowDownIcon,
    label: 'New comment'
  }
]
