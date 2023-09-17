<template>
  <div class="container">
    <form class="custom-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" class="form-control" id="nombre" v-model="nombre" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>

      <div class="form-group">
        <button @click="redireccionarAPagina" :disabled="!nombre || !email" class="custom-button">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      email: ""
    };
  },
  methods: {
    submitForm() {
      console.log("Nombre:", this.nombre);
      console.log("Email:", this.email);
    },
    redireccionarAPagina() {
      this.$router.push('/tareas');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
}

.custom-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.custom-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.custom-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
