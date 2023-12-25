// custom-instance.ts

import { $fetch, FetchError } from 'ofetch'

const baseURL = 'https://backend-cheatsgame.iran.liara.run/api/' // use your own URL here or environment variable

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: any
  data?: unknown
  responseType?: string
  headers?: Record<string, string>
}): Promise<T> => {
  const response = await $fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method,
      ...(data ? { body: data } : {})
    }
  )

  return response.json()
}

export default customInstance

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = FetchError<Error>
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
