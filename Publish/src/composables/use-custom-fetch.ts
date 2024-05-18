import { useNuxtApp } from '#imports'
import type { FetchCustomOptions } from '~/types/common-fetch'

interface Options
  extends Pick<
    FetchCustomOptions,
    'params' | 'body' | 'ignoreAuth' | 'baseURL'
  > {}

export function $get<T>(url: string, options?: Options) {
  return useNuxtApp().$http<T>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: options?.params ?? {},
    ignoreAuth: options?.ignoreAuth
  })
}

export function $post<T>(url: string, options?: Options) {
  return useNuxtApp().$http<T>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: options?.body ?? {},
    ignoreAuth: options?.ignoreAuth
  })
}

export function $put<T>(url: string, options?: Options) {
  return useNuxtApp().$http<T>(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: options?.body ?? {},
    ignoreAuth: options?.ignoreAuth
  })
}

export function $delete<T>(url: string, options?: Options) {
  return useNuxtApp().$http<T>(url, {
    method: 'DELETE',
    body: options?.body ?? {},
    ignoreAuth: options?.ignoreAuth
  })
}

export function $uploadPost<T>(url: string, options?: Options) {
  return useNuxtApp().$http<T>(url, {
    method: 'POST',
    body: options?.body ?? {}
  })
}

export function $uploadPut<T>(url: string, options?: Options) {
  return useNuxtApp().$http<T>(url, {
    method: 'PUT',
    body: options?.body ?? {}
  })
}
