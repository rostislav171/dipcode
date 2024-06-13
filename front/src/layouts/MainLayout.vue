<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title @click="this.$router.push({ name: 'products' })">
          MiningTech / {{$route.meta.title}}
        </q-toolbar-title>

        <q-btn @click="this.$router.push({ name: 'orders' })" dense round flat icon="star">
        </q-btn>

        <q-btn @click="this.$router.push({ name: 'cart' })" dense round flat icon="shopping_cart">
          <q-badge v-if="getCountCart !== 0" color="red" floating transparent>
            {{getCountCart}}
          </q-badge>
        </q-btn>

        <LogoutButton></LogoutButton>
      </q-toolbar>
    </q-header>
<!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
     <LeftDrawerItems  ></LeftDrawerItems>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import LeftDrawerItems from 'components/interface/LeftDrawerItems.vue'
import LogoutButton from 'components/interface/LogoutButton.vue'
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import useUserInfo from 'src/hooks/user/useUserInfo'
// import useLeftDrawerItems from 'src/hooks/useLeftDrawerItems'

export default defineComponent({
  name: 'MainLayout',

  components: {
    // LeftDrawerItems,
    LogoutButton
  },

  computed: {
    ...mapGetters('cart', [
      'getCountCart'
    ])
  },
  mounted () {
    // console.log(
    //   this.leftDrawerOpen,
    //   this.toggleLeftDrawer
    // )
  },
  setup () {
    // const { leftDrawerOpen, toggleLeftDrawer } = useLeftDrawerItems()
    const { userInfo } = useUserInfo()
    return {
      userInfo
      // leftDrawerOpen,
      // toggleLeftDrawer
    }
  }
})
</script>
