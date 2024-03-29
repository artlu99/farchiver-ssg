import { JwtVerifiedCredential } from './dynamic-types'
import { Env } from './types'

export const addressesEqual = (address1: string, address2: string): boolean =>
  address1.toLowerCase() === address2.toLowerCase()

export const allowCorsHeaders = () => {
  return { headers: { 'Access-Control-Allow-Origin': '*' } }
}

export const allowCorsResponse = () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })

export const isRequestAllowed = (request: Request, env: Env) => {
  const allowedSecFetchSite =
    env.ENVIRONMENT === 'development' ? 'same-site' : 'same-origin'
  return request.headers.get('sec-fetch-site') === allowedSecFetchSite
}

export const newResponse = (res: string, env: Env) =>
  new Response(
    res,
    env.ENVIRONMENT === 'development' ? allowCorsHeaders() : undefined
  )

export const misdirection = (env: Env) => newResponse('[]', env)

export const redirection = (url: string) => Response.redirect(url, 301)

export const getAddressFromPayload = (payload) => {
  const verifiedCredentials: JwtVerifiedCredential[] =
    payload.verified_credentials ?? []

  const address =
    verifiedCredentials?.length > 0
      ? verifiedCredentials[0].address ?? undefined
      : undefined

  return address
}

// radash
export const sort = (array, getter, desc = false) => {
  if (!array) return []
  const asc = (a, b) => getter(a) - getter(b)
  const dsc = (a, b) => getter(b) - getter(a)
  return array.slice().sort(desc === true ? dsc : asc)
}
