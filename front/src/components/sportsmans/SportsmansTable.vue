<template>
  <q-markup-table flat bordered>
    <thead v-if="sportsmansPage" class="">
      <tr>
        <th colspan="5">
          <div class="row no-wrap items-center">
            Список
          </div>
        </th>
      </tr>
      <tr>
        <th>Фамилия</th>
        <th>Имя</th>
        <th>Отчество</th>
        <th>Логин</th>
        <th>Дата рождения</th>
        <th>Результаты обследований</th>
        <th>Результаты тестирований</th>
        <th>Спортивные достижения</th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="(s, i) in sportsmansPage.results" :key="i">
        <!-- <td class="text-left">
          {{ s }}
        </td> -->
        <td class="text-left">{{s.lastName}}</td>
        <td class="text-left">{{s.firstName}}</td>
        <td class="text-left">{{s.secondName}}</td>
        <td class="text-left">{{s.email}}</td>
        <td class="text-left">{{s.birthday}}</td>
        <td class="text-left">{{s.examinations}}</td>
        <td class="text-left">{{s.resultTests}}</td>
        <td class="text-left">{{s.sportsResults}}</td>

        <q-menu fit touch-position
      context-menu>
          <q-list style="min-width: 100px">
            <q-item clickable @click="this.$router.push({ name: 'sportsmans-detail', params: { id: s.id }})">
              <q-item-section>Просмотр</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Изменить</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Отправить уведомление</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Удалить</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </tr>
      <tr v-if="sportsmansPage.results?.length == 0" >
        <td colspan="100%">
          <q-banner class="bg-primary text-white">
            Нет информации о спортсменах
            <template v-slot:action>
              <q-btn flat color="white" label="Добавить" />
              <q-btn flat color="white" label="Импортировать" />
            </template>
          </q-banner>
        </td>

      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import SportsmansService from 'src/service/sportsmans/Sportsmans.service'

export default defineComponent({
  name: 'SportsmansTable',
  props: ['rows', 'columns'],
  setup () {
    const { sportsmansPage, loadSportsmansPage } = SportsmansService()
    onMounted(async () => {
      await loadSportsmansPage()
    })
    return {
      sportsmansPage,
      loadSportsmansPage
    }
  },
  methods: {
    logout () {
    }
  }

})
</script>
