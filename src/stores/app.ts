import type { Config } from '@/db/models.ts'
import { defineStore } from 'pinia'
import { db } from '@/db/calenlab.db'

// Interface explícita para el state
interface ConfigState {
  config: Config | null
  loaded: boolean
}

export const useConfigStore = defineStore('config', {
  state: (): ConfigState => ({
    config: null,
    loaded: false,
  }),

  actions: {
    /**
     * Carga la configuración desde la base de datos
     * Si no existe configuración, establece config como null
     */
    async load (): Promise<void> {
      const all: Config[] = (await db.config.toArray()) ?? []
      // Forzar el tipo para evitar el error de Pinia
      this.config = (all.length > 0 ? all[0] : null) as Config | null
      this.loaded = true
    },

    /**
     * Guarda una nueva configuración en la base de datos
     * Reemplaza cualquier configuración existente
     * @param payload - Nueva configuración a guardar
     */
    async save (payload: Config): Promise<void> {
      await db.config.clear()
      await db.config.put(payload)
      this.config = payload as Config | null
    },

    /**
     * Actualiza parcialmente la configuración existente
     * Si no hay configuración cargada, no hace nada
     * @param partial - Propiedades a actualizar
     */
    async update (partial: Partial<Config>): Promise<void> {
      // Guard clause: salir temprano si no hay configuración
      if (!this.config) {
        return
      }

      // Fusionar configuración existente con cambios parciales
      const newConfig: Config = { ...this.config, ...partial }
      await this.save(newConfig)
    },

    /**
     * Resetea la configuración eliminándola de la base de datos
     * y estableciendo el estado a null
     */
    async reset (): Promise<void> {
      await db.config.clear()
      this.config = null as Config | null
    },
  },
})
