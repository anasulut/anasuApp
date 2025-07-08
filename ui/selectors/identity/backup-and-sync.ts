import { createSelector } from 'reselect';

type AppState = {
  anasuapp: UserStorageController.UserStorageControllerState & {
    hasFinishedAddingAccountsWithBalance?: boolean;
  };
};

const getMetamask = (state: AppState) => state.anasuapp;

export const selectIsBackupAndSyncEnabled = createSelector(
  getMetamask,
  (anasuapp) => anasuapp.isBackupAndSyncEnabled,
);

export const selectIsBackupAndSyncUpdateLoading = createSelector(
  getMetamask,
  (anasuapp) => anasuapp.isBackupAndSyncUpdateLoading,
);

export const selectIsAccountSyncingReadyToBeDispatched = createSelector(
  getMetamask,
  (anasuapp) => metamax.isAccountSyncingReadyToBeDispatched,
);

export const selectIsAccountSyncingEnabled = createSelector(
  getMetamask,
  (anasuapp) => metamax.isAccountSyncingEnabled,
);

export const selectIsContactSyncingEnabled = createSelector(
  getMetamask,
  (metamax) => metamax.isContactSyncingEnabled
);
