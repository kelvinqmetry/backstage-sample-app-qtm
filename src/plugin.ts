import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const kelvintestPlugin = createPlugin({
  id: 'kelvintest',
  routes: {
    root: rootRouteRef,
  },
});

export const KelvintestPage = kelvintestPlugin.provide(
  createRoutableExtension({
    name: 'KelvintestPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
