export type ShiftType = 'mañana' | 'tarde' | 'noche'
export type JourneyType = 'partida' | 'continua'
export type HolidayType = 'nacional' | 'autonomico' | 'local'

export interface Config {
  id?: number
  journey: JourneyType
  shift: ShiftType
  rotation: number
  ccaa: string
}

export interface WorkDay {
  id?: number
  date: string
  shift: ShiftType
  isHoliday: boolean
  isFree: boolean
}

export interface Holiday {
  id?: number
  date: string
  type: HolidayType
}

export interface Vacation {
  id?: number
  startDate: string
  endDate: string
}

export interface Note {
  id?: number
  date: string
  text: string
  mood?: string
}

export interface Reminder {
  id?: number
  date: string
  title: string
  notified: boolean
}
