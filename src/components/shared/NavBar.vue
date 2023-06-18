<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-space-around" cols="12" sm="12">
        <v-btn
          text
          v-for="btn in links" :key="btn.scrollTo"
          :color="alwaysWhite || scrolled ? 'primary' : 'white'"
          @click="scrollToComponent(btn.scrollTo)"
        >
          {{ btn.label }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      links: [
        {
          label: 'Início',
          scrollTo: 'start',
        },
        {
          label: 'Sobre',
          scrollTo: 'about',
        },
        {
          label: 'Mais',
          scrollTo: 'more',
        },
        {
          label: 'Preço',
          scrollTo: 'pricing',
        },
      ],
    };
  },

  props: {
    scrolled: {
      type: Boolean,
      default: false,
    },
    alwaysWhite: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    scrollToComponent(componentId) {
      this.$emit('scrollToComponent', componentId);
    },
  },
};
</script>
