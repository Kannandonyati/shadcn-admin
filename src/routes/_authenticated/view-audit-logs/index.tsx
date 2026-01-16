import { createFileRoute } from '@tanstack/react-router'
import {  ViewAuditLogs} from '@/features/view-audit-logs'

export const Route = createFileRoute('/_authenticated/view-audit-logs/')({
  component: ViewAuditLogs,
})


