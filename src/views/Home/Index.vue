<template>
  <v-container class="home">
    <HomeTitle />
    <MainForm/>
  </v-container>
</template>

<script>
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'

export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
