<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        src="@/assets/img/diablo-iii.svg"
        transition="scale-transition"
        alt="D3"
        width="30"
      />
      <v-toolbar-title class="font-diablo ml-2">D3PF</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
  </v-app-bar>
</template>

<script>

export default {
  name: 'HeaderBar'
}
</script>
