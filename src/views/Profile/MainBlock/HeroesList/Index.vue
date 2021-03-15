<template>
  <div>
    <h1>Heroes List</h1>
    <v-data-table
      :headers="headers"
      :items="heroes"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item" />
      </template>
      <template v-slot:cell(class)="data">
        <HeroClassLevel
          :hero="{ class: data.item.class, level: data.item.level }"
        />
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
import { formatNumber } from '@/filters/numeral'
export default {
  name: 'HeroesList',
  components: { HeroIco, HeroClassLevel },
  filters: {
    formatNumber
  },
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Class',
          sortable: true,
          value: 'class'
        },
        {
          text: 'Elite Kills',
          sortable: true,
          value: 'kills.elites'
        }
      ]
    }
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
