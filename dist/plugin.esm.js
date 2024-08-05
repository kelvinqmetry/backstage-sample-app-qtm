import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes.esm.js';

const kelvintestPlugin = createPlugin({
  id: "kelvintest",
  routes: {
    root: rootRouteRef
  }
});
const KelvintestPage = kelvintestPlugin.provide(
  createRoutableExtension({
    name: "KelvintestPage",
    component: () => import('./components/ExampleComponent/index.esm.js').then((m) => m.ExampleComponent),
    mountPoint: rootRouteRef
  })
);

export { KelvintestPage, kelvintestPlugin };
//# sourceMappingURL=plugin.esm.js.map
