<template>
  <v-app>
    <page-header
      class="hidden-sm-and-down"
      :alwaysWhite="alwaysWhite"

      @scrollToComponent="scrollToComponent"
    />

    <v-main>
      <router-view/>
    </v-main>

    <page-footer @scrollToComponent="scrollToComponent" />
  </v-app>
</template>

<script>
import PageHeader from './components/global/PageHeader.vue';
import PageFooter from './components/global/PageFooter.vue';

export default {
  name: 'App',

  components: {
    PageHeader,
    PageFooter,
  },

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'studus';
      },
    },
  },

  computed: {
    alwaysWhite() { return this.$route.name !== 'home'; },
  },

  methods: {
    scrollToComponent(componentId) {
      const hash = `#${componentId}`;

      if (this.$route.path === '/' && this.$route.hash === hash) return;
      this.$router.push({ path: '/', hash });
    },
  },

};
</script>

<style>
html, body, main {
  font-family: Nunito, Arial, Helvetica, sans-serif;
  font-size: 13pt;
  padding: 0;
  background-color: #f0f0f0;
}

h1, h2, h3 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
  color: unset;
}

strong {
  color: #00B0FF;
}

.primary--btn {
  background-color: #00B0FF !important;
  color: white !important;
  font-weight: bold !important;
}

@media only screen and (max-width: 600px) {
  html, body, main {
    font-size: 11.5pt;
  }

  h1 {
    font-size: 19pt;
  }
}

</style>
