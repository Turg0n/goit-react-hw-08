export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;