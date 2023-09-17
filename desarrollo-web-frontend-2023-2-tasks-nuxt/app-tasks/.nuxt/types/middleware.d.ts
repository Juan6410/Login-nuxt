import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/needf/Desktop/Login-nuxt/desarrollo-web-frontend-2023-2-tasks-nuxt/app-tasks/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}