import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { employeeApi } from '../services/employeeApi';
 

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

// Optional: Enables refetchOnFocus/refetchOnReconnect behaviors
// See `setupListeners` documentation for customization
setupListeners(store.dispatch);
