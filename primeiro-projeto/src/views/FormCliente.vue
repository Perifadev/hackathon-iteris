<template>
  <validation-observer ref="observer">
    <div class="container">
      <h1>Diga-me o que você</h1>
      <form @submit.prevent="submit">
        <validation-provider name="Name" rules="required|max:30">
          <v-text-field
            v-model="name"
            :counter="30"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider name="telefone" rules="telefone">
          <v-text-field
            v-model="telefone"
            label="telefone"
            requiredname="telefone"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider name="email" rules="required|email">
          <v-text-field
            v-model="email"
            label="E-mail"
            requiredname="email"
            autocomplete="off"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit"> Enviar </v-btn>
      </form>
    </div>
  </validation-observer>
</template>

<script>
export default {
  data: () => ({
    name: "",
    telefone: "",
    email: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
.container {
  padding: 30px;
  width: 100%;
  height: 100vh;
  color: #fff;
  /*background-image: linear-gradient(180deg, #194b79, #19236f, #000204);*/
}
</style>
