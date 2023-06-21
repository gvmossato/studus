<template>
    <v-img
      id="start"
      src="../../assets/pictures/exchange.jpg"
      class="background-image align-center"
      gradient="to bottom left, rgba(0,0,0,.1), rgba(0,0,0,1)"
    >

      <v-container>
        <v-row class="flex-column">
          <v-col cols="12" sm="8" md="7" lg="6">
            <v-img src="../../assets/brand/logo-full.svg" />
          </v-col>

          <v-col class="text-center text-md-left white--text" cols="12" sm="8" md="7" lg="6">
            <h1 class="text--h1">
              Faça do mundo o seu <strong>campus</strong>!
            </h1>
          </v-col>

          <v-col class="my-8" cols="12" sm="8" md="7" lg="6">
            <form
              method="POST"
              name="user"
              class="d-flex flex-column flex-md-row align-center"
              netlify

              @submit.prevent="handleSubmit"
            >
              <v-text-field
                append-icon="mdi-email"
                placeholder="Email"
                name="email"
                type="email"
                class="mb-4 mb-md-0 mr-md-4"
                validate-on-blur
                hide-details
                solo
                outlined

                v-model="email"
                :rules="[rules.required, rules.email]"
              />
              <v-btn
                class="primary--btn"
                type="submit"
                rounded
              >
                Conhecer
              </v-btn>
            </form>
          </v-col>

          <v-col class="text-center text-md-left white--text" cols="12" sm="9" lg="6">
            <p>
              Viajar para um novo país pode não ser nada fácil, ainda mais quando o
              assunto é estudar, por isso a <strong>studus</strong> te acompanha do
              planejamento ao desembarque!
            </p>
          </v-col>
        </v-row>

        <v-snackbar v-model="showSuccessAlert" color="success">
          <v-icon class="mr-2">mdi-email-check</v-icon>
          <b>E-mail cadastrado com sucesso! Aguarde...</b>
        </v-snackbar>
      </v-container>
  </v-img>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  name: 'UserCall',

  data: () => ({
    email: '',
    showSuccessAlert: false,
    validForm: false,

    rules: {
      required: (val) => !!val,
      email: (val) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(val);
      },
    },

  }),

  methods: {
    encodeForm(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    },

    handleSubmit() {
      if (Object.keys(this.rules).every(
        (el) => this.rules[el](this.email),
      )) this.validForm = true;

      if (this.validForm) {
        if (process.env.NODE_ENV === 'production') {
          axios.post(
            '/',
            this.encodeForm({ 'form-name': 'user', email: this.email }),
            { header: { 'Content-Type': 'application/x-www-form-urlencoded' } },
          );
        }

        setTimeout(() => {
          this.showSuccessAlert = true;
        }, 100);

        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 3000);

        this.email = '';
        this.validForm = false;

        setTimeout(() => {
          this.$router.push({ name: 'mailing' });
        }, 3500);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.background-image {
  height: 100vh;
  object-fit: fill;
}
</style>
