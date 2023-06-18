<template>
  <v-container id="about">
    <v-slide-group :value="features[1].id" center-active>
      <v-row class="justify-center">
        <v-slide-item v-for="item in features" :key="item.id">
          <v-card
            class="hover-shadow d-flex flex-column justify-center my-8 mx-2 pa-6 mx-md-6"
            width="280px"
          >
            <v-icon :color="item.id % 2 ? 'black' : 'primary'" size="70">
              {{ item.icon }}
            </v-icon>

            <h2 :class="`title my-6 ${item.id % 2 ? 'black' : 'primary'}--text`">
              {{ item.title }}
            </h2>

            <v-card-subtitle class="text-center">
              {{ item.description }}
            </v-card-subtitle>
          </v-card>
        </v-slide-item>
      </v-row>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: 'AppFeatures',

  data: () => ({
    features: [
      {
        id: 0,
        icon: 'mdi-swap-horizontal-variant',
        title: 'Guia',
        description: 'Siga um passo a passo detalhado e interativo. Nunca mais perca um prazo: saiba o que levar e onde levar.',
      },
      {
        id: 1,
        icon: 'mdi-face-recognition',
        title: 'Documentos',
        description: 'Preenchimento automático de formulários, envio de documentos e assinaturas digitais sempre que for possível.',
      },
      {
        id: 2,
        icon: 'mdi-account-group',
        title: 'Comunidade',
        description: 'Dicas de quem já passou por isso e conversas com quem tem muito a contar sobre!',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.hover-shadow {
  transition: 0.1s ease-in;
  &:hover {
    box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.2) !important;
    scale: 1.02;
  }
}

.title {
  text-transform: uppercase;
  text-align: center;
}
</style>
