<template>
  <v-card
    width="300px"
    :class="`base-card pa-4 mx-6 ${plan.isMainCard && 'main-card'}`"
  >
    <v-spacer />

    <h3>
      {{ plan.title }}
    </h3>

    <v-spacer />

    <v-card-subtitle :class="plan.isMainCard && 'white--text'">
      {{ plan.description }}
    </v-card-subtitle>

    <v-spacer />

    <div class="d-flex">
      <h1>{{ plan.price }}</h1>
      <div class="my-auto ml-2">
        <p class="currency--text">R$</p>
        <p class="currency--text">por Mês</p>
      </div>
    </div>

    <v-spacer />

    <v-card-subtitle :class="plan.isMainCard && 'white--text'">
      <p v-for="value, index in plan.features" :key="index">
        {{ value }}
      </p>
    </v-card-subtitle>

    <v-spacer />

    <v-btn
      :class="`primary--btn ${plan.isMainCard && 'main-card--btn'}`"
      :to="{ name: plan.viewName }"
      width="85%"
      rounded
    >
      {{ plan.btnCall }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'PricingCard',

  props: {
    plan: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 29pt;
  font-weight: 400;
}

h3 {
  text-transform: uppercase;
}

.base-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.main-card {
  scale: 1.15;
  background-color: #3d407d !important;
  color: white !important;
  z-index: 100;
}

.main-card--btn {
  background-color: white !important;
  color: #3d407d !important;
}

.currency--text {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 10pt;
  line-height: 12pt;
  text-align: left;
}
</style>
