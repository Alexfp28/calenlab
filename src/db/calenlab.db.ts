import type { Table } from 'dexie'
import type { Config, Holiday, Note, Reminder, Vacation, WorkDay } from './models'
import Dexie from 'dexie'

export class CalenLabDB extends Dexie {
  config!: Table<Config>
  workdays!: Table<WorkDay>
  holidays!: Table<Holiday>
  vacations!: Table<Vacation>
  notes!: Table<Note>
  reminders!: Table<Reminder>

  constructor () {
    super('CalenLabDB')

    this.version(1).stores({
      config: '++id, journey, shift, rotation, ccaa',
      workdays: '++id, date, shift, isHoliday, isFree',
      holidays: '++id, date, type',
      vacations: '++id, startDate, endDate',
      notes: '++id, date, text, mood',
      reminders: '++id, date, title, notified',
    })
  }
}

export const db = new CalenLabDB()
