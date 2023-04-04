<template>
  <v-row justify="center" class="mb-6">
    <v-col cols="4">
      <v-row>
        <v-text-field v-model="keyword" label="Keyword" append-icon="mdi-magnify" @keydown.enter.exact="handleClickSearch( keyword )" @click:append="handleClickSearch( keyword )" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
  },

  data() {
    return {
      keyword: '',
    }
  },

  methods: {
    handleClickSearch( keyword ) {
      this.$emit('search', keyword)
    }
  }
}
</script>

<style scoped>

</style>
