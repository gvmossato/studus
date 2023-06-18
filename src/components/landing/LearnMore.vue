<template>
  <v-container id="more">
    <v-row class="d-flex flex-column flex-md-row align-center">
      <v-col cols="12" sm="6" align="center">
        <v-img
          src="../../assets/art/world.svg"
          width="70%"
        />
      </v-col>

      <v-col cols="12" sm="6" class="d-flex align-center">
        <v-container class="text-center" fluid>
          <h2>
            Ajuda para
            <strong class="black--text">quando</strong> e
            <strong class="black--text">onde</strong>
            precisar
          </h2>
          <p class="my-14">
            O passaporte descomplicado para seus estudos internacionais!
            <br />
            <br />
            Viaje com a confiança de quem tem a experiência de um guia
            e a ajuda de quem já trilhou esse caminho.
          </p>
          <v-btn
            class="primary--btn"
            color="secondary"
            rounded

            :to="{ name: 'about' }"
          >
            Descubra
          </v-btn>
        </v-container>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'LearnMore',

  data: () => ({
    email: '',
  }),
};
</script>

<style scoped lang="scss">
h2 {
  color: #696969;
}
</style>
