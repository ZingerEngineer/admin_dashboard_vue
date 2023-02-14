import {
  UserIcon,
  ShoppingCartIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'
import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'
type Card = {
  color: string
  label: string
  value: number
  discription: string | null
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
}

export const cardsList: Card[] = [
  {
    color: 'bg-blue-600',
    label: 'Sign ups',
    value: 114,
    discription: '+25% from last month',
    icon: UserIcon
  },
  {
    color: 'bg-lime-600',
    label: 'Revenue',
    value: 25455,
    discription: '+17.5% from last month',
    icon: ShoppingCartIcon
  },
  {
    color: 'bg-red-600',
    label: 'Open tickets',
    value: 5,
    discription: null,
    icon: PhoneIcon
  }
]
