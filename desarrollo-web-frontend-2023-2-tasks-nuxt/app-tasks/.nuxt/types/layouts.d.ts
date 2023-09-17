import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blank" | "default"
declare module "C:/Users/needf/Desktop/Login-nuxt/desarrollo-web-frontend-2023-2-tasks-nuxt/app-tasks/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}