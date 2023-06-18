<template>
  <v-container fluid>
    <v-row class="align-center">
      <v-col class="hidden-sm-and-down" cols="12" sm="1">
        <v-img width="50px" src="../../assets/brand/logo-hat.svg" />
      </v-col>

      <v-col cols="12" sm="2">
        <social-bar :on-top="true" :scrolled="true" />
      </v-col>

      <v-spacer />

      <v-col class="hidden-sm-and-down text-center" cols="12" sm="4">
        Copyright © 2023 studus
      </v-col>

      <v-spacer />

      <v-col cols="12" sm="3">
        <nav-bar :scrolled="true" v-on="$listeners" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from '../shared/NavBar.vue';
import SocialBar from '../shared/SocialBar.vue';

export default {
  name: 'PageFooter',

  components: {
    NavBar,
    SocialBar,
  },

  data: () => ({
    scrolled: null,

    features: [
      {
        id: 0,
        img: '',
        desc: '',
      },
      {
        id: 1,
        img: '',
        desc: '',
      },
      {
        id: 2,
        img: '',
        desc: '',
      },
    ],
  }),

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
