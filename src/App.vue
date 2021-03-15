<template>
  <v-app>
    <v-main>
      <LoadLayout v-if="isLoading">
        <BaseLoading />
      </LoadLayout>

      <MainLayout v-else />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>
