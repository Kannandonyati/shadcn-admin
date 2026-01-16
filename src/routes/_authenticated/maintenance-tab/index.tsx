import { createFileRoute } from '@tanstack/react-router'
import { MaintenanceTab } from '@/features/maintenance-tab'

export const Route = createFileRoute('/_authenticated/maintenance-tab/')({
  component: MaintenanceTab,
})

