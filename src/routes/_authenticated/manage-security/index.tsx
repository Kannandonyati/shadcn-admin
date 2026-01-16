import { createFileRoute } from '@tanstack/react-router'
import {  ManageSecurity} from '@/features/manage-security'

export const Route = createFileRoute('/_authenticated/manage-security/')({
  component: ManageSecurity,
})

