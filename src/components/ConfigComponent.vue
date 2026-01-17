<script setup>
  import { onMounted, ref } from 'vue'
  import { useConfigStore } from '@/stores/config.store'

  const store = useConfigStore()

  const form = ref({
    jornada: 'continua',
    turnoBase: 'mañana',
    rotacion: 1,
    ccaa: 'Madrid',
  })

  onMounted(async () => {
    await store.load()
    if (store.config) {
      form.value = { ...store.config }
    }
  })

  async function save () {
    await store.save(form.value)
    alert('Configuración guardada')
  }
</script>

<template>
  <div>
    <h2>Configuración</h2>

    <select v-model="form.jornada">
      <option value="partida">Partida</option>
      <option value="continua">Continua</option>
    </select>

    <select v-model="form.turnoBase">
      <option value="mañana">Mañana</option>
      <option value="tarde">Tarde</option>
      <option value="noche">Noche</option>
    </select>

    <input v-model="form.rotacion" min="1" type="number">

    <input v-model="form.ccaa" type="text">

    <button @click="save">Guardar</button>
  </div>
</template>
