import mitt, { type Emitter } from 'mitt'
import type { Admin } from '@/view/management/admin/table/type.ts'

type AdminEvents = {
  'open-edit-dialog': Admin
  'admin-deleted': void
  'admin-updated': void
}

export const adminEventBus: Emitter<AdminEvents> = mitt<AdminEvents>()
