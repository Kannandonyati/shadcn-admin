import { createFileRoute } from '@tanstack/react-router'
import { RunDashboard } from '@/features/ai-dashboard/run-dashboard'
export const Route = createFileRoute(
  '/_authenticated/ai-dashboard/run-dashboard',
)({
  component: RunDashboard,
})

