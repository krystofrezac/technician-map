import dynamic from 'next/dynamic';

import { MapClient } from './MapClient';

export const Map = dynamic(
  () => import('./MapClient').then(module => module.MapClient),
  { ssr: false },
) as typeof MapClient;
