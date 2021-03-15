<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white" />

    <v-app-bar pills small>
      <v-toolbar-items
        :active="!isPassiveSkillsActive"
        @click="changeComponent('ActiveSkills')"
        >Active</v-toolbar-items
      >
      <v-toolbar-items
        :active="isPassiveSkillsActive"
        @click="changeComponent('PassiveSkills')"
        >Passive</v-toolbar-items
      >
    </v-app-bar>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps" />
    </keep-alive>
    <!-- <ActiveSkills :skills="skills.active" />
    <hr />
    <PassiveSkills :skills="skills.passive" /> -->
  </div>
</template>

<script>
// import ActiveSkills from "./ActiveSkills";
// import PassiveSkills from "./PassiveSkills";

export default {
  name: 'HeroSkills',
  components: {
    // Dynamic Components
    ActiveSkills: () =>
      import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills'),
    PassiveSkills: () =>
      import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  computed: {
    /**
     * Dinamyc props for dynamic components
     * @returns {String}
     */
    componentProps () {
      return this.activeComponent === 'ActiveSkills'
        ? this.skills.active
        : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  }
}
</script>
