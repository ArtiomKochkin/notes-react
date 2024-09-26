import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { AUTH_URL, LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "@/shared/const";
import { ITokenResponse } from "@/shared/types";

export const createBaseQueryWithReAuth = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers) {
      const token = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include',
  });

  const BaseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      const refreshResult = await baseQuery(
        { url: `${AUTH_URL}/refresh`, method: 'POST' }, 
        api, 
        extraOptions
      );

      if (refreshResult?.data) {
        localStorage.setItem(
          LOCAL_STORAGE_ACCESS_TOKEN_KEY,
          (refreshResult.data as ITokenResponse).accessToken
        );
        result = await baseQuery(args, api, extraOptions); 
      } else {
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
        window.location.href = '/notes-react/login';
      }
    }

    return result;
  };

  return BaseQueryWithReAuth;
};