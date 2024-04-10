import jwt from './jwt'
import {
  allowCorsResponse,
  getFidDetailFromPayload,
  isRequestAllowed,
  misdirection,
  newResponse,
  redirection,
  sort,
} from './helpers'
import { Env, AssetDescription } from './types'

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context

  if (env.ENVIRONMENT === 'development') {
    // Handle Preflight Requests
    if (request.method === 'OPTIONS') {
      return allowCorsResponse()
    }

    await env.KV.put(
      'assets',
      '[{"tarball": "lechuga-cinturon-escritorio","timestamp": 1699027200,"sharedwith": ["6546"],"owners": ["10032"],"description": "Egbekun Karena beta tester v0.9 1m history"}]'
    )

    await env.KV.put(
      'dynamic_jwt_pubkey',
      `-----BEGIN PUBLIC KEY-----
      MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA265+Cfh67cOToKfcf2PY
      j3Insf/xeWTepjeoO4vsyUT+Htt5tNgREdqvjatjx8r/bsHWFASVIgJ2BqxDgnLO
      jcX5csKlRfnGkmIRcI2CiCay0y7Gapm/mmT1UhELimlyIVyr/B8txY4LU+4+jEaE
      PDaJo5CxgNvSiZVGQxUIH2FdntfkBQFSo5UUidnxASRzpTKK6xO+cDYXBT5s9Ecf
      r1Jk7ulSEwvXQ+LpqSQ7o3Z7KMb3iLhe9TYQ+C/80vMqry5HTA2C9tuoooy0zMgl
      aIBqsyg6VmF7DAEvuC9nj0knFAgkssmSBkFJyQSNuyxqBVlbN25YbMT1NfObyP4Y
      S4PbtGhhPt94YSwWzFmW2IbNzewXa+NhSEsSz+aG4GExwIn1yHoPgnJTMUZ4ioYB
      KkRIHeF8tQZOF5XGbHo1DrFXtTJsnqyv8tOQxgeZoWfFOjFha7lNgG4gv8iKmN41
      igMEzqbj88DTYiyRpghA5OqhDKI4l47AcGqX0UQOooWVenHN5w0s6t7nXJ1phTZ2
      klwiFeozUBiK59Z1pU9i+WEvh45Metiws0zkZF9asE5IF35+vsmy/SarmsjZ2Szv
      Y6/RCSG8LFBTXnAJ8xZCGat1zs8c67dp3QGQl5HJHZ+5pOlGmoLpz2pcX9jAqm1h
      6s6gRoW9/o48AgrgIZSYSH8CAwEAAQ==
      -----END PUBLIC KEY-----
      `
    )
  }

  if (!isRequestAllowed(request, env)) return misdirection(env)
  const { origin } = new URL(request.url)
  if (request.method !== 'POST') return redirection(origin)

  const jwtToken = await request.text()
  const secret = await env.KV.get('dynamic_jwt_pubkey')
  const { header, payload } = jwt.decode(jwtToken)
  const isValid = await jwt.verify(jwtToken, secret, header['alg'])
  if (!isValid) return misdirection(env)

  const fidDetail = getFidDetailFromPayload(payload)

  const assetDescriptions: AssetDescription[] = JSON.parse(
    await env.KV.get('assets')
  )
  const fid = fidDetail?.fid ?? 'undefined'

  const owned: AssetDescription[] = sort(
    assetDescriptions.filter((assetDescription) =>
      assetDescription.owners.includes(fid)
    ),
    (o) => o.timestamp,
    true
  )

  const shared: AssetDescription[] = sort(
    assetDescriptions.filter(
      (assetDescription) =>
        assetDescription.sharedwith.includes(fid) ||
        (assetDescription.sharedwith.includes('*') &&
          !assetDescription.owners.includes(fid))
    ),
    (m) => m.timestamp,
    true
  )

  return newResponse(JSON.stringify({ fidDetail, owned, shared }), env)
}
