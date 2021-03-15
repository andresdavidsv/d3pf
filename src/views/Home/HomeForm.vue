<template>
  <form>
    <v-text-field
      v-model="battle"
      v-focus
      :error-messages="battleErrors"
      :counter="10"
      label="BattleTag"
      required
      @input="$v.battle.$touch()"
      @blur="$v.battle.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="regions"
      item-value="value"
      item-text="name"
      :error-messages="selectErrors"
      label="Region"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-btn class="mr-4" @click="submit">
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    battle: { required, maxLength: maxLength(50) },
    select: { required }
  },

  data: () => ({
    battle: '',
    select: null,
    regions: [
      { name: 'Europe', value: 'EU' },
      { name: 'America', value: 'US' },
      { name: 'Korea', value: 'KR' },
      { name: 'Taiwan', value: 'TW' }
    ],
    battletagRules: [v => !!v || 'BattleTag is required']
  }),

  computed: {
    battleErrors () {
      const errors = []
      if (!this.$v.battle.$dirty) return errors
      !this.$v.battle.maxLength &&
        errors.push('BattleTag must be at most 50 characters long')
      !this.$v.battle.required && errors.push('BattleTag is required.')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$router.push({
          name: 'Profile',
          params: {
            region: this.select,
            battleTag: this.battle.replace('#', '-')
          }
        })
      }
    },
    clear () {
      this.$v.$reset()
      this.battle = ''
      this.select = null
    }
  }
}
</script>

<style></style>
