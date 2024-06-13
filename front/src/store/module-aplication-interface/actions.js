import SidebarService from '../../service/aplication-interface/sidebar.service'

export function loadMenuItems ({ commit }, user) {
  const items = SidebarService.getItems(user)
  commit('setMenuItems', items)
}
