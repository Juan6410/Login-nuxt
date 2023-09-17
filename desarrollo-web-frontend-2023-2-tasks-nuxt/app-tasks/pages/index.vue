<template>
  <div style="text-align: center;">
    <h1 style="margin-top: 20px;">Ingrese sus datos para continuar</h1>
  </div>
  <div style="margin-top: 20px;">
    <Formulario />
  </div>
</template>

<script>
import Formulario from "~/components/tasks/Formulario.vue";

export default {
  components: {
    Formulario
  },
  head: {
    title: 'Formulario de Ejemplo' // Puedes personalizar el título de la página aquí
  }
};

definePageMeta({
  layout: "blank",
});

</script>
