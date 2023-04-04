import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ChecklistState {
  love: number
  animals: Array<string>
  people: Array<string>
  toggle: (itemId: string, love: number, type: ChecklistTypes) => void
}

export enum ChecklistTypes {
  People = 'people',
  Animals = 'animals',
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
            ...state,
            [type]: [...state[type], itemId],
            love: get().love + love,
          }))

        const uncheck = () =>
          set((state) => ({
            ...state,
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
