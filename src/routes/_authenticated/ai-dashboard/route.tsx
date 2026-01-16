import { createFileRoute } from '@tanstack/react-router'
import { AiDashboard } from '@/features/ai-dashboard'

export const Route = createFileRoute('/_authenticated/ai-dashboard')({
  component: AiDashboard,
})

