import { createFileRoute } from '@tanstack/react-router'
import {  ManageUser} from '@/features/manage-user'

export const Route = createFileRoute('/_authenticated/manage-user/')({
  component: ManageUser,
})