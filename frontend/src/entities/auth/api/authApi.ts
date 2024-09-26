import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_URL, LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "@/shared/const";
import { IAuthRequest } from "@/shared/types";

const baseQuery = fetchBaseQuery({
  baseUrl: AUTH_URL,
  prepareHeaders(headers) {
    const token = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<{ accessToken: string }, IAuthRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<{ accessToken: string }, IAuthRequest>({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials
      })
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;