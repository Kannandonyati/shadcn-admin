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
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Tasks',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'Apps  ',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'Chats',
          url: '/chats',
          icon: MessagesSquare,
        },
        {
          title: 'Users',
          url: '/users',
          icon: Users,
        },
        
        //change this to root route as /maintenance-tab --> /
        {
          title: 'Maintenance Tab',
          url: '/maintenance-tab',
          icon: LayoutDashboard,
        },
         {
          title: 'Manage User',
          url: '/manage-user',
          icon: ListTodo,
        },
         {
          title: 'Manage Security',
          url: '/manage-security',
          icon: Package,
        },
        {
          title: 'View Audit Logs',
          url: '/view-audit-logs',
          icon: MessagesSquare,
        },
         {
          title: 'Manage Variables',
          url: '/manage-variables',
          icon: Users,
        }
      ],
    },
    // {
    //   title: 'AI Powered ',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: ShieldCheck,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //   ],
    // },
  {
      title: 'AI Powered ',
      items: [
        {
          title: 'AI Dashboard',
          icon: ShieldCheck,
          items: [
            {
              title: 'Job Manager',
              url: '/ai-dashboard/job-manager',
              icon: UserCog,
            },
            {
              title: 'Run Dashboard',
              url: '/ai-dashboard/run-dashboard',
              icon: Wrench,
            },
            {
              title: 'System Overview',
              url: '/ai-dashboard/system-overview',
              icon: Palette,
            },
            {
              title: 'Workspace',
              url: '/ai-dashboard/workspace',
              icon: Palette,
            },
            
          ],
        },
        
      ],
    },
  ],
}
