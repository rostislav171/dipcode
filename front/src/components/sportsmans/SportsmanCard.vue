<template>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class=""
      active-color="primary"
      indicator-color="primary"
      :align="'justify'"
      narrow-indicator
    >
      <q-tab name="examination" label="Медицинские обследования" />
      <q-tab name="sports" label="Спортивные достижения" />
      <q-tab name="testing" label="Тестирование" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated>

      <q-tab-panel name="examination">
        <div>
          <div class="">Медицинские обследования</div>
          <div>
            appex
            <apexchart
            width="500"
            type="radar"
            :options="chartOptions"
            :series="series"
            ></apexchart>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="sports">
        <div>
          <div class="">Спортивные достижения</div>
          <div class=""></div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="testing">
        <div>
          <div class="">Тестирование</div>
          <div class=""></div>
        </div>
      </q-tab-panel>

    </q-tab-panels>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'

const props = defineProps({
  start: String
})
const tab = ref()
const chartOptions = {
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}
const series = [
  {
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91]
  }
]
onMounted(() => {
  console.log(props)
  console.log(series)
  console.log(chartOptions)

  tab.value = props.start
})

</script>
