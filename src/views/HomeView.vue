<template>
  <v-container fluid class="pa-0 ma-0">
    <user-call />

    <app-features ref="appFeatures" class="my-md-10"/>

    <v-divider class="mx-16" />

    <learn-more class="my-md-10" />

    <pricing-options />
  </v-container>
</template>

<script>
import UserCall from '../components/landing/UserCall.vue';
import AppFeatures from '../components/landing/AppFeatures.vue';
import LearnMore from '../components/landing/LearnMore.vue';
import PricingOptions from '../components/landing/PricingOptions.vue';

export default {
  name: 'HomeView',

  components: {
    UserCall,
    AppFeatures,
    LearnMore,
    PricingOptions,
  },
};
</script>
