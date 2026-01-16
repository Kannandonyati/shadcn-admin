import {
  Construction,
  LayoutDashboard,
  Bug,
  ListTodo,
  FileX,
  Lock,
  Package,
  ServerOff,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  HelpCircle,
  Monitor,
  Bell,
  Palette,
  Wrench,
  UserCog,
  Settings,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Dart',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    }
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Maintenance Tab',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Manage User',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'Manage Security',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'View Audit Logs',
          url: '/chats',
          icon: MessagesSquare,
        },
        {
          title: 'Manage Variables',
          url: '/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'AI Powered ',
      items: [
        {
          title: 'Auth',
          icon: ShieldCheck,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: Bug,
          items: [
            {
              title: 'Unauthorized',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'Forbidden',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'Not Found',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'Internal Server Error',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },
      {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            
          ],
        },
        
      ],
    },
  ],
}
