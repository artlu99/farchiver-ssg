export type FidDetail = {
  fid: string
  username: string
  pfp: string
  connected_addresses: string[]
}

export type AssetDescription = {
  tarball: string
  timestamp: number
  sharedwith: string[]
  owners: string[]
  description: string
  encrypted?: boolean
  cid?: string
}
