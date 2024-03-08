import { atom } from 'jotai'

const strAtom = atom(localStorage.getItem('themeSelection') ?? 'dark')

const themeSelection = atom(
  (get) => get(strAtom),
  (get, set, newStr: string) => {
    set(strAtom, newStr)
    localStorage.setItem('themeSelection', newStr)
  }
)
export default themeSelection
