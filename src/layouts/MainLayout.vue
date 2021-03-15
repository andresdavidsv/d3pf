<template>
  <v-container>
    <HeaderBar/>
    <router-view />
    <FooterBar/>
  </v-container>
</template>

<script>

import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
