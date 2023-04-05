import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ChecklistTypes } from '../utils/types'

interface ChecklistState {
  love: number
  animals: Array<string>
  people: Array<string>
  toggle: (itemId: string, love: number, type: ChecklistTypes) => void
}

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set, get) => ({
      love: 0,
      animals: [],
      people: [],
      toggle: (itemId, love, type) => {
        const check = () =>
          set((state) => ({
            [type]: [...state[type], itemId],
            love: get().love + love,
          }))

        const uncheck = () =>
          set((state) => ({
            [type]: [...state[type].filter((id) => id !== itemId)],
            love: get().love - love,
          }))

        return get()[type].includes(itemId) ? uncheck() : check()
      },
    }),
    {
      name: 'checklist-storage',
    }
  )
)
