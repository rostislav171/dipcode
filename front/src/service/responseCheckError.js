import EventBus from './user/EventBus'

const responseCheckError = (response) => {
  if (response.status === 403 || response.status === 401) {
    EventBus.dispatch('logout')
  }
}

export default responseCheckError
