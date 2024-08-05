import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { kelvintestPlugin, KelvintestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(kelvintestPlugin)
  .addPage({
    element: <KelvintestPage />,
    title: 'Root Page',
    path: '/kelvintest',
  })
  .render();
