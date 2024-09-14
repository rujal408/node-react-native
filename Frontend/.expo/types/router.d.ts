/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/` | `/(auth)/sign-up` | `/(protected)` | `/(protected)/dashboard` | `/(protected)/malls` | `/(protected)/malls/` | `/(protected)/malls/create-mall` | `/(protected)/shops` | `/_sitemap` | `/dashboard` | `/malls` | `/malls/` | `/malls/create-mall` | `/shops` | `/sign-up`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
