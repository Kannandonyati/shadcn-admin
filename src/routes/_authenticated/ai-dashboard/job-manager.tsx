import { createFileRoute } from '@tanstack/react-router'
import { JobManager } from '@/features/ai-dashboard/job-manager'

export const Route = createFileRoute(
  '/_authenticated/ai-dashboard/job-manager',
)({
  component: JobManager,
})

