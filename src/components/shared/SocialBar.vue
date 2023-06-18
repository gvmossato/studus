<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-space-around" cols="12" sm="12">
        <v-tooltip
          v-for="btn in socials" :key="btn.scrollTo"
          :color="btn.hoverColor"
          :top="onTop"
          :bottom="!onTop"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              class="hovered"
              :style="colorButton(btn.hoverColor)"
              :color="alwaysWhite || scrolled ? 'primary' : 'white'"

              v-bind="attrs"
              v-on="on"
            >
              <v-icon>{{ btn.icon }}</v-icon>
            </v-btn>
          </template>
          <span>Em breve!</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SocialBar',

  data() {
    return {
      socials: [
        {
          icon: 'mdi-twitter',
          hoverColor: '#1DA1F2',
        },
        {
          icon: 'mdi-facebook',
          hoverColor: '#4267B2',
        },
        {
          icon: 'mdi-linkedin',
          hoverColor: '#0E76A8',
        },
        {
          icon: 'mdi-instagram',
          hoverColor: '#E1306C',
        },
      ],
    };
  },

  props: {
    scrolled: {
      type: Boolean,
      default: false,
    },
    onTop: {
      type: Boolean,
      default: false,
    },
    alwaysWhite: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    colorButton: (hoverColor) => ({
      '--hover-color': hoverColor,
    }),
  },
};
</script>

<style scoped lang="scss">
.hovered {
  &:hover {
    color: var(--hover-color) !important;
  }
}
</style>
