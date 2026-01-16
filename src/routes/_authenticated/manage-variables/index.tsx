import { createFileRoute } from '@tanstack/react-router'
import {  ManageVariables} from '@/features/manage-variables'

export const Route = createFileRoute('/_authenticated/manage-variables/')({
  component: ManageVariables,
})


