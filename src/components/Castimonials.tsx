import 'react-farcaster-embed/dist/styles.css'
import { FarcasterEmbed } from 'react-farcaster-embed' // include default styles or write your own

import { useEffect, useState } from 'preact/hooks'
import UserCount from 'components/UserCount'

export default function () {
  const [data1, setData1] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await FarcasterEmbed({
        url: 'https://warpcast.com/antimofm.eth/0x724cbf',
      })
      setData1(response)
    }

    fetchData().catch(() => {})
  }, [])

  return (
    <div className="text-left">
      <h3>The easiest way to save individual casts</h3>
      <h4>Permanence provided by Pinata 🤝 IPFS</h4>
      <div>{data1}</div>
      <h4>WIP 👀</h4>
      <h3>
        <UserCount />
      </h3>
    </div>
  )
}
