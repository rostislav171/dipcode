import { LocalStorage } from 'quasar'

const user = JSON.parse(LocalStorage.getItem('user'))

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

export default function () {
  return {
    ...initialState,
    userInfo: null
  }
}
