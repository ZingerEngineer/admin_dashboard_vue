import {
  HomeIcon,
  ChartBarIcon,
  Square3Stack3DIcon,
  ClipboardDocumentIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline'
import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

type ChildItem = {
  childLabel: string
  childRoute: string
}

type Item = {
  label: string
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>
  route: string | null
  children: ChildItem[] | null
}

export const dropDownItemsList: Item[] = [
  {
    label: 'Dasboard',
    icon: HomeIcon,
    route: '/dashboard',
    children: null
  },
  {
    label: 'Charts',
    icon: ChartBarIcon,
    children: [
      {
        childLabel: 'chart.js',
        childRoute: '/charts/'
      }
    ],
    route: null
  },
  {
    label: 'Components',
    icon: Square3Stack3DIcon,
    route: null,
    children: [
      {
        childLabel: 'Cards',
        childRoute: '/components/cards'
      },
      {
        childLabel: 'Forms',
        childRoute: '/components/forms'
      },
      {
        childLabel: 'Icons',
        childRoute: '/components/icons'
      },
      {
        childLabel: 'Stats',
        childRoute: '/components/stats'
      },
      {
        childLabel: 'Tables',
        childRoute: '/components/tables'
      },
      {
        childLabel: 'Typography',
        childRoute: '/components/typography'
      },
      {
        childLabel: 'User Interface',
        childRoute: '/components/user_interface'
      }
    ]
  },
  {
    label: 'Layouts',
    icon: ClipboardDocumentIcon,
    route: null,
    children: [
      {
        childLabel: 'Blank',
        childRoute: '/layouts/blank'
      },
      {
        childLabel: 'Content',
        childRoute: '/layouts/content'
      },
      {
        childLabel: 'Log in',
        childRoute: '/layouts/login'
      },
      {
        childLabel: 'Sign up',
        childRoute: '/layouts/signup'
      }
    ]
  },
  {
    label: 'About',
    icon: InformationCircleIcon,
    route: null,
    children: [
      {
        childLabel: 'GitHub',
        childRoute: 'https://github.com/'
      },
      {
        childLabel: 'ZingerThemes',
        childRoute: 'https://github.com/ZingerEngineer'
      }
    ]
  }
]
