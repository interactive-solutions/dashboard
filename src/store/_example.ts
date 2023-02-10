import create from 'zustand';

import { withDevtools } from 'store/middlewares';
import { NonFunctionProperties } from 'types/nonFunction';

export interface ExampleStore {
  amount: number;
  increase: (by?: number) => void;
}

export const initialExampleStore: NonFunctionProperties<ExampleStore> = {
  amount: 0
};

export const useExampleStore = create<ExampleStore>()(
  withDevtools((set, get) => ({
    ...initialExampleStore,
    increase: (by) => {
      set(
        (state) => ({
          amount: state.amount + typeof by === 'number' ? by : get().amount + 1
        }),
        false,
        'example/increase'
      );
    }
  }))
);
