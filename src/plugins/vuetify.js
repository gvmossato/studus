import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.accent3, // #00B0FF
        secondary: '#3d407d',
        accent: colors.pink.base, // #E91E63
      },
    },
  },
});
