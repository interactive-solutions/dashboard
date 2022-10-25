import { devtools, persist } from 'zustand/middleware';

import { isBuild } from 'utils';

export const withDevtools: typeof devtools = (store, ...rest) =>
  (isBuild() ? store : devtools(store, ...rest)) as any; // 🙈

export const withPersist: typeof persist = (store, ...rest) =>
  persist(store, ...rest);
