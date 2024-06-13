<template>
  <div>
    <q-expansion-item
      icon="explore"
      label="label"
      caption="caption"
      header-class=""
      expand-icon-class=""
    >
      <q-card>
        <q-card-section>
          awd
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
  <q-list bordered padding>
    <template v-for="sidebarItem in leftDrawerItems" :key="sidebarItem.key">
      <q-item-label header >
        {{sidebarItem.title}}
      </q-item-label>
      <q-item
        exact
        v-for="menuItem in sidebarItem.items"
        :key="menuItem.key"
        :to="{name:menuItem.to}"
      >
        <q-item-section
          v-if="menuItem.icon"
          avatar
        >
          <q-icon :name="menuItem.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ menuItem.title }}</q-item-label>
          <q-item-label v-if="menuItem.caption" caption>
            {{ menuItem.caption }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced  />

    </template>

  </q-list>
</template>

<script>
import { defineComponent } from 'vue'
import useLeftDrawerItems from 'src/hooks/useLeftDrawerItems'
import useUserInfo from 'src/hooks/user/useUserInfo'

export default defineComponent({
  name: 'LeftDrawerItems',
  setup (props) {
    const { leftDrawerItems } = useLeftDrawerItems()
    const { userInfo } = useUserInfo()
    return {
      userInfo,
      leftDrawerItems
    }
  },
  mounted () {
    console.log(
      this.userInfo,
      this.leftDrawerItems
    )
  }

})
</script>
