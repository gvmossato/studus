<template>
  <v-container fluid class="mt-md-16">
    <v-row class="d-flex flex-column align-center justify-center mt-md-16">
      <v-col cols="12" sm="10" md="6" align="center">
        <v-img src="../assets/art/cancel.svg" width="400" />
      </v-col>

      <v-col class="text-center mt-4" cols="12" sm="10" md="4">
        <h1>
          <strong>Obrigado!</strong> Mas...
        </h1>
      </v-col>

      <v-col class="text-center" cols="12" sm="10" md="4">
        <p>
          A <strong>studus</strong> é apenas um projeto de universidade
          para a matéria <b>PRO3582 — Projeto de Novos Empreendimentos</b>.
          Então, infelizmente, sem app para intercambistas, mas você já nos
          ajudou muito chegando até aqui!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped lang="scss">
  .container {
    background-color: white;
  }
</style>
