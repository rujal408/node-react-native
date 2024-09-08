/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/` | `/(auth)/sign-up` | `/(protected)` | `/(protected)/dashboard` | `/(protected)/malls` | `/(protected)/shops` | `/_sitemap` | `/dashboard` | `/malls` | `/shops` | `/sign-up`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
