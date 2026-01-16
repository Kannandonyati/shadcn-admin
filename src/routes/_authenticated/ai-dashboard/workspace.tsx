import { createFileRoute } from '@tanstack/react-router'
import { Workspace } from '@/features/ai-dashboard/workspace'

export const Route = createFileRoute('/_authenticated/ai-dashboard/workspace')({
  component: Workspace,
})


