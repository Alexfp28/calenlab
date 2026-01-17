<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue'
  import { useTheme } from 'vuetify'

  const vuetifyTheme = useTheme()

  // Cargar tema guardado o usar 'light' por defecto
  const theme = ref(localStorage.getItem('theme') || 'light')

  // Aplicar tema al montar el componente
  onMounted(() => {
    vuetifyTheme.change(theme.value)
  })

  // Guardar tema cuando cambie
  watch(theme, newTheme => {
    localStorage.setItem('theme', newTheme)
    vuetifyTheme.change(newTheme)
  })

  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>

<template>
  <v-responsive class="rounded">
    <v-app :theme="theme">
      <v-app-bar title="CalenLab">
        <v-spacer />

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          slim
          :text="theme === 'light' ? 'Modo oscuro' : 'Modo claro'"
          variant="text"
          @click="onClick"
        />
      </v-app-bar>

      <v-main>
        <section class="h-full w-full grid grid-rows-4 grid-cols-2 gap-3 p-2!">
          <!-- Contenedor principal | Calendario  -->
          <v-container class="row-span-3 col-span-2 w-full border-2 border-blue-500">
            <Calendar />
          </v-container>

          <!-- Footer | Pienso que podría ser innecesario -->
          <v-container class="row-span-1 border border-blue-500 grid grid-cols-2 gap-3">
            <p>Footer</p>
          </v-container>
        </section>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>
/* Estilos personalizados si necesitas ajustes adicionales */
</style>
