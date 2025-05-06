import { createSelector } from "@reduxjs/toolkit";

const selectState = state => state;
export const getAuthState = createSelector([selectState],
    state => state.auth);
export const getRoleState = createSelector([selectState],
    state => state.role);