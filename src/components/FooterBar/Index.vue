<template>
  <v-footer color="primary lighten-1" padless app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        <router-link :to="{ name: `${link}` }">{{ link }}</router-link>
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong
          ><a href="https://andresdavidsv.com/" target="_blank"
            >Andresdavidsv</a
          ></strong
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ['Home', 'About']
  })
}
</script>
