<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <v-container fluid :class="`header ${alwaysWhite || scrolled ? 'white' : ''}`">
    <v-row>
      <v-spacer />

      <v-col class="ma-auto" cols="12" sm="1">
        <v-img v-show="alwaysWhite || scrolled" width="50px" src="../../assets/brand/logo-hat.svg"/>
      </v-col>

      <v-spacer />

      <v-col cols="12" sm="4">
        <nav-bar :alwaysWhite="alwaysWhite" :scrolled="scrolled" v-on="$listeners" />
      </v-col>

      <v-spacer />

      <v-col cols="12" sm="3">
        <social-bar :alwaysWhite="alwaysWhite" :on-top="false" :scrolled="scrolled" />
      </v-col>

      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import NavBar from '../shared/NavBar.vue';
import SocialBar from '../shared/SocialBar.vue';

export default {
  name: 'PageHeader',

  components: {
    NavBar,
    SocialBar,
  },

  props: {
    alwaysWhite: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      scrolled: null,
    };
  },

  methods: {
    updateScroll() {
      this.scrolled = (window.scrollY || document.documentElement.scrollTop) >= 50;
    },
  },
  created() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  position: fixed;
  z-index: 1000;
  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
  color: white;
  transition: 0.5s;
  width: 100vw;
}
.white {
  background: white;
  color: #00B0FF !important;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.2);
}
</style>
