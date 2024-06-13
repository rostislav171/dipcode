
<template>
  <q-page>
    <div class="q-pa-md">
      <sportsman-card sportsman="s" start="examination"></sportsman-card>
    </div>
  </q-page>
</template>

<script setup>
import SportsmanCard from 'components/sportsmans/SportsmanCard.vue'

// import { onMounted } from 'vue'
// import SportsmansService from 'src/service/sportsmans/Sportsmans.service'
// const { sportsmansPage, loadSportsmansPage } = SportsmansService()

// onMounted(async () => {
//   await loadSportsmansPage()
// })
console.log(SportsmanCard)
</script>
