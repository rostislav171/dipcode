<template>
  <q-page>
    <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead class="">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="i in [1,2,3,4]" :key="i">
          <td class="text-left">
            Frozen Yogurt {{ i }}
          </td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <q-menu fit touch-position
        context-menu>
            <q-list style="min-width: 100px">
              <q-item clickable>
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

      </tbody>
    </q-markup-table>
  </div>
  </q-page>
</template>

<script>
// const columns = [

// ]

// const rows = [

// ]

// return {
//   columns,
//   rows
// }

</script>
