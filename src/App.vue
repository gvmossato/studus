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

  data: () => ({
    //
  }),

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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Nunito:wght@400;700&display=swap');

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
