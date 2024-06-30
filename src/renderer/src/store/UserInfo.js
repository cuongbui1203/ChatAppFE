import { create } from 'zustand'

const useUserInfo = create((set) => ({
  user: true,
  setUserInfo: () => set((state, user) => ({ user: user }))
}))

export { useUserInfo }
