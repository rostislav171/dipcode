class SidebarService {
  getItems (user) {
    const basicItems = this.getBasicItems()
    const usersManagementItems = this.getUserManagementItems()
    const getExaminationsItems = user.isExaminationTemplatesManager
      ? this.getExaminationsItems()
      : {}
    const itemsSidebar = [
      {
        ...basicItems
      },
      {
        ...this.getTestingsItems()
      },
      {
        ...usersManagementItems
      },
      {
        ...getExaminationsItems
      }
    ]
    return itemsSidebar
  }

  getBasicItems () {
    return {
      title: 'Основное меню',
      items: [
        {
          title: 'Профиль',
          to: 'profile',
          icon: 'account_circle'
        },
        {
          title: 'Настройки',
          to: 'settings',
          icon: 'settings'
        },
        {
          title: 'Песочница',
          to: 'sandbox',
          icon: 'sandbox'
        }
      ]
    }
  }

  getUserManagementItems () {
    return {
      title: 'Пользователи',
      items: [
        {
          title: 'Спортсмены ',
          to: 'sportsmans',
          icon: 'las la-trophy'
        },
        {
          title: 'Сотрудники',
          to: 'employees',
          icon: 'account_circle'
        }
      ]
    }
  }

  getExaminationsItems () {
    return {
      title: 'Медецинские обследования',
      items: [
        {
          title: 'Шаблоны обследований',
          to: 'examination-template',
          icon: 'view_list'
        },
        {
          title: 'Проведение обследований',
          to: 'to',
          icon: 'note_add'
        }
      ]
    }
  }

  getTestingsItems () {
    return {
      title: 'Тестирование',
      items: [
        {
          title: 'Шаблоны тестирований',
          to: 'testing-templates',
          icon: 'view_list'
        },
        {
          title: 'Результаты тестирований',
          to: 'testing-results',
          icon: 'view_list'
        }
      ]
    }
  }
}

export default new SidebarService()
