import { createSelector } from '@reduxjs/toolkit';
// Contact
export const selectLoading = state => state.contacts.isLoading;
export const selectContactList = state => state.contacts.items;
export const selectFilter = state => state.filter;
// Auth
export const selectLoggedUser = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectRefresh = state => state.auth.isRefreshing;
export const selectFilteredList = createSelector(
  [selectFilter, selectContactList],
  (filter, contacts) => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  }
);
