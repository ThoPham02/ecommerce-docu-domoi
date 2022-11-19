import { createSelector } from "@reduxjs/toolkit";

export const AuthSelector = state => state.auth;

export const UserSelector = state => state.register;

export const CartSelector = state => state.cart

export const CartSelectorForEachUser = createSelector(UserSelector, CartSelector, )