// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

declare module '*.vue' {
  import { type ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}
