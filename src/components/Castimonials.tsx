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
    <div className="hero h-full bg-base-100">
      <div className="hero-content min-h-screen text-center text-content">
        <div className="prose text-left">
          <h3>The easiest way to save individual casts</h3>
          <h4>Permanence provided by Pinata 🤝 IPFS</h4>
          <div>{data1}</div>
          <h3>WIP 👀</h3>
        </div>
      </div>
    </div>
  )
}
