import { createFileRoute } from '@tanstack/react-router'
import { SystemOverview } from '@/features/ai-dashboard/system-overview'

export const Route = createFileRoute(
  '/_authenticated/ai-dashboard/system-overview',
)({
  component: SystemOverview,
})


