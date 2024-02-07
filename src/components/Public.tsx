import DownloadLinks from 'components/DownloadLinks'

export default function () {
  return (
    <div className="text-left">
      <h3>Farcaster cast history exported to Markdown</h3>
      <p className="italic">as of 11 Jan 2024:</p>
      <ul>
        <li>
          the proto inverse-AMA thread by @shoni.eth{' '}
          <DownloadLinks
            filename={'shoni.eth_first_inverse_AMA_thread_20231229.tar.gz'}
            text={'90KB download'}
            CID={'QmatFvWRHTHVUJBFR9tJbXyyK9JgNHq8fGoJvZyHDFiC6g'}
          />
        </li>
      </ul>
      <p className="italic">as of 6 Jan 2024:</p>
      <ul>
        <li>
          epic @keccers.eth thread, requested by @shazow.eth{' '}
          <DownloadLinks
            filename={'keccers_thread_20231222.tar.gz'}
            text={'32KB download'}
            CID={'QmVtELzhaSMEiZ4HujQ1gGK3AuvDSfuBZ3BEpJTALDuee5'}
          />
        </li>
      </ul>
      <p className="italic">as of 18 Dec 2023:</p>
      <ul>
        <li>
          the proto channels thread, NBA Game 5{' '}
          <DownloadLinks
            filename={'dwr.eth_first_channel_nba_game_5_thread.tar.gz'}
            text={'14KB download'}
            CID={'QmdwSNiV2V21sSSzTzHawaFT2Cq1qmbANVN1bekBQb4PqU'}
          />
        </li>
      </ul>
      <p className="italic">as of 21 Nov 2023:</p>
      <ul>
        <li>
          the OG @pushix thread, why Farchiver exists{' '}
          <DownloadLinks
            filename={'pushix_thread_20230409.tar.gz'}
            text={'7KB download'}
            CID={'QmW3g7v4HPNA5GzEKybRrLNQLdZ5FkZyT5mrRVvSHZDBkJ'}
          />
        </li>
      </ul>
      <p className="italic">as of 10 Nov 2023:</p>
      <ul>
        <li>
          @dwr.eth's MTD, including wowow{' '}
          <DownloadLinks
            filename={'dwr.eth_mtd_20231109.tar.gz'}
            text={'276KB download'}
            CID={'QmVkQrWfok5rizr9vXxSQNnDmL4TNfmuERiKSVys2rVTM2'}
          />
        </li>
        <li>
          @vitalik.eth's last month{' '}
          <DownloadLinks
            filename={'vitalik.eth_1m_20231109.tar.gz'}
            text={'1.4MB download'}
            CID={'QmR3d2RN4wgUy43rBjCpCJxqFraxTtCazTHTScmjHKAadV'}
          />
        </li>
      </ul>
    </div>
  )
}
