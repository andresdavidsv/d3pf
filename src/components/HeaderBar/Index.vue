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
      <v-toolbar-title class="font-diablo ml-2">{{ title }}</v-toolbar-title>
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
  name: 'HeaderBar',
  data () {
    return {
      // 🔥 Note that only variables that start with VUE_APP_ will be statically embedded
      // into the client bundle with webpack.DefinePlugin.
      // Recuperamos la variable de entorno y la guardamos en 'title'
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>
