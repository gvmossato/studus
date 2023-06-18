<template>
  <v-container
    fluid
    id="pricing"
    class="d-flex primary align-center justify-center"
  >
    <v-slide-group :value="plans[1].id" center-active>
      <v-row class="py-16">
        <v-slide-item v-for="item in plans" :key="item.id">
          <pricing-card :plan="item" />
        </v-slide-item>
      </v-row>
    </v-slide-group>
  </v-container>
</template>

<script>
import PricingCard from '../shared/PricingCard.vue';

export default {
  name: 'PricingOptions',

  components: {
    PricingCard,
  },

  data: () => ({
    plans: [
      {
        id: 0,
        title: 'Gratuito',
        viewName: 'free',
        description: 'Para quem uma ajudinha já basta',
        price: '0',
        features: [
          'O que levar e o que não levar',
          'Onde você precisa ir',
        ],
        btnCall: 'Conhecer',
        isMainCard: false,
      },
      {
        id: 1,
        title: 'Guia',
        viewName: 'guide',
        description: 'A expirência completa de um intercâmbio sem complicação',
        price: '99',
        features: [
          'Guia passo a passo do que fazer',
          'Experiências de quem já fez',
          'Formulários automáticos',
          'Prazos, datas e locais detalhados',
          'Suporte em tempo real',
          'Comunidades de intercambistas',
        ],
        btnCall: 'Vivenciar',
        isMainCard: true,
      },
      {
        id: 2,
        title: 'Amigo',
        viewName: 'friend',
        description: 'Ajuda para o que há de mais essencial',
        price: '39',
        features: [
          'Documentos, locais e datas',
          'Dicas de outros intercambistas',
          'Avaliações de quem já foi',
        ],
        btnCall: 'Explorar',
        isMainCard: false,
      },
    ],
  }),
};
</script>
